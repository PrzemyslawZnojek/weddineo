import { AuthService } from './auth.service';
export * from './auth.service';
import { VersionService } from './version.service';
export * from './version.service';

export const APIS = [VersionService, AuthService];
