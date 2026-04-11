<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/3642eee0-2b4b-480f-a533-0fe0190de1d6

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set an API key in [.env.local](.env.local):
   - `VITE_API_KEY=your_google_ai_api_key`
   - (Fallbacks supported by the app: `API_KEY`, `REACT_APP_API_KEY`, `NEXT_PUBLIC_API_KEY`)
3. (Optional) Customize the list of selectable AI models in `constants.tsx` by editing `AI_MODEL_OPTIONS`.
   - Each model needs an `id` (actual model name sent to Google GenAI), user-facing `label`, and `description`.
   - The chat UI model picker is in `components/AICurator.tsx`.
4. Run the app:
   `npm run dev`

## Role & Access Management (Migration Notes)

> ⚠️ This repository currently ships as a client-only Vite app and does **not** yet include the production Express + Firebase server/API described in the enterprise architecture. The notes below provide a safe migration baseline and operator workflow.

### 1) Bootstrap the first owner

You can assign a first owner claim with the included one-time script:

```bash
npm run role:set -- --email owner@example.com --role owner
```

or by UID:

```bash
npm run role:set -- --uid <firebase_uid> --role owner
```

Environment variables required by the script:

- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY` (with `\n` escaped)

You can also bootstrap owners from an `OWNER_EMAILS` env variable in your future Express API startup path.

### 2) Role model and permission behavior

The shared role helper (`auth_roles.ts`) defines these roles:

- `owner`
- `admin`
- `collaborator`
- `viewer`

Authorization helpers included:

- `isOwner`
- `isAdmin`
- `canManageRoles`
- `canManageSettings`
- `canEditContent`
- `canViewInternalStats`

Backward compatibility is preserved:

- if custom claims contain `admin: true` but no `role`, the user normalizes to `admin`.

### 3) How to test role changes

1. Run the script against a test Firebase project.
2. Sign in as the target user.
3. Force token refresh (or sign out/in) after claim updates.
4. Validate role-gated UI and API access in your production app.

### 4) Token refresh after role changes

Firebase custom claims are embedded in the ID token. After role updates:

- user should sign out/in, or
- client should force refresh with `getIdToken(true)`.

Until refresh, old permissions may appear in the client token.
