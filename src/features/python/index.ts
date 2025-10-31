import { ModulePage } from './pages/ModulePage.tsx';
import { templates } from './data/templates.ts';
import { PythonIcon } from './components/PythonIcon.tsx';

/**
 * Git Module Configuration
 */
export const pythonModule = {
    name: 'Python',
    path: '/python',
    icon: PythonIcon,
    element: ModulePage,
    templates: templates,
} as const;
