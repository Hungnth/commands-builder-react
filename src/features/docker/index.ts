import { ModulePage } from './pages/ModulePage.tsx';
import { templates } from './data/templates.ts';
import { DockerIcon } from './components/DockerIcon';

export const dockerModule = {
    name: 'Docker',
    path: '/docker',
    icon: DockerIcon,
    element: ModulePage,
    templates: templates,
} as const;
