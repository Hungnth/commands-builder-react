import { ModulePage } from './pages/ModulePage.tsx';
import { templates } from './data/templates.ts';
import { SSHIcon } from './components/SSHIcon.tsx';

/**
 * Git Module Configuration
 */
export const sshModule = {
    name: 'SSH',
    path: '/ssh',
    icon: SSHIcon,
    element: ModulePage,
    templates: templates,
} as const;
