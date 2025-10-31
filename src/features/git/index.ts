import { ModulePage } from './pages/ModulePage.tsx';
import { templates } from './data/templates.ts';
import { GitIcon } from './components/GitIcon';

/**
 * Git Module Configuration
 */
export const gitModule = {
    name: 'Git',
    path: '/git',
    icon: GitIcon,
    element: ModulePage,
    templates: templates,
} as const;
