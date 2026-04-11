export type AppRole = 'owner' | 'admin' | 'collaborator' | 'viewer';

export type SupportedClaims = {
  role?: AppRole;
  admin?: boolean;
  [key: string]: unknown;
};

export const normalizeRoleFromClaims = (claims: SupportedClaims | null | undefined): AppRole => {
  if (!claims) return 'viewer';

  if (claims.role === 'owner' || claims.role === 'admin' || claims.role === 'collaborator' || claims.role === 'viewer') {
    return claims.role;
  }

  // Backward compatibility for legacy binary claim.
  if (claims.admin === true) {
    return 'admin';
  }

  return 'viewer';
};

export const isOwner = (claims: SupportedClaims | null | undefined): boolean => normalizeRoleFromClaims(claims) === 'owner';
export const isAdmin = (claims: SupportedClaims | null | undefined): boolean => {
  const role = normalizeRoleFromClaims(claims);
  return role === 'owner' || role === 'admin';
};
export const isCollaborator = (claims: SupportedClaims | null | undefined): boolean => {
  const role = normalizeRoleFromClaims(claims);
  return role === 'owner' || role === 'admin' || role === 'collaborator';
};
export const isViewer = (claims: SupportedClaims | null | undefined): boolean => normalizeRoleFromClaims(claims) === 'viewer';

export const canManageRoles = (claims: SupportedClaims | null | undefined): boolean => isOwner(claims);
export const canManageSettings = (claims: SupportedClaims | null | undefined): boolean => isAdmin(claims);
export const canEditContent = (claims: SupportedClaims | null | undefined): boolean => isCollaborator(claims);
export const canViewInternalStats = (claims: SupportedClaims | null | undefined): boolean => {
  const role = normalizeRoleFromClaims(claims);
  return role === 'owner' || role === 'admin' || role === 'collaborator' || role === 'viewer';
};

export const roleLabel = (role: AppRole): string => {
  switch (role) {
    case 'owner':
      return 'Owner';
    case 'admin':
      return 'Admin';
    case 'collaborator':
      return 'Collaborator';
    case 'viewer':
      return 'Viewer';
  }
};
