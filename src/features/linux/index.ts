import { ModulePage } from './pages/ModulePage.tsx';
import { templates } from './data/templates.ts';
import { LinuxIcon } from './components/LinuxIcon.tsx';

/**
 * Git Module Configuration
 */
export const linuxModule = {
    name: 'Linux',
    path: '/linux',
    icon: LinuxIcon,
    element: ModulePage,
    templates: templates,
} as const;
