#!/usr/bin/env node
/**
 * One-time role management script.
 *
 * Usage:
 *   node scripts/set-user-role.mjs --email person@example.com --role owner
 *   node scripts/set-user-role.mjs --uid someUid --role admin
 *
 * Required env vars:
 *   FIREBASE_PROJECT_ID
 *   FIREBASE_CLIENT_EMAIL
 *   FIREBASE_PRIVATE_KEY (with \n escaped)
 */

import process from 'node:process';

const ALLOWED_ROLES = new Set(['owner', 'admin', 'collaborator', 'viewer']);

let initializeApp;
let cert;
let getApps;
let getAuth;

try {
  ({ initializeApp, cert, getApps } = await import('firebase-admin/app'));
  ({ getAuth } = await import('firebase-admin/auth'));
} catch {
  console.error('Missing dependency: firebase-admin. Install it before running this script: npm i firebase-admin');
  process.exit(1);
}


const args = new Map();
for (let i = 2; i < process.argv.length; i += 2) {
  const key = process.argv[i];
  const value = process.argv[i + 1];
  if (!key?.startsWith('--') || !value) {
    console.error('Invalid arguments.');
    process.exit(1);
  }
  args.set(key.slice(2), value);
}

const email = args.get('email');
const uid = args.get('uid');
const role = args.get('role');

if (!role || !ALLOWED_ROLES.has(role)) {
  console.error('Invalid --role. Must be one of owner|admin|collaborator|viewer');
  process.exit(1);
}

if (!email && !uid) {
  console.error('Provide either --email or --uid');
  process.exit(1);
}

if (!getApps().length) {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    console.error('Missing Firebase Admin credentials in env vars.');
    process.exit(1);
  }

  initializeApp({
    credential: cert({ projectId, clientEmail, privateKey }),
  });
}

const auth = getAuth();

const user = email ? await auth.getUserByEmail(email) : await auth.getUser(uid);
const existingClaims = user.customClaims ?? {};
const mergedClaims = { ...existingClaims, role, admin: role === 'owner' || role === 'admin' };

await auth.setCustomUserClaims(user.uid, mergedClaims);

console.log(`Updated ${user.email ?? user.uid} to role=${role}`);
console.log('User must refresh token or sign out/in to see role change.');
