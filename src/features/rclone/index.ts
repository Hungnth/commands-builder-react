import { ModulePage } from './pages/ModulePage.tsx';
import { templates } from './data/templates.ts';
import { RcloneIcon } from './components/RcloneIcon.tsx';

/**
 * Git Module Configuration
 */
export const rcloneModule = {
    name: 'Rclone',
    path: '/rclone',
    icon: RcloneIcon,
    element: ModulePage,
    templates: templates,
} as const;
