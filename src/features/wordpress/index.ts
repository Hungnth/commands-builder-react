import { ModulePage } from './pages/ModulePage.tsx';
import { templates } from './data/templates.ts';
import { WordPressIcon } from './components/WordPressIcon.tsx';

/**
 * Module Configuration
 */
export const wordpressModule = {
    name: 'WordPress',
    path: '/wordpress',
    icon: WordPressIcon,
    element: ModulePage,
    templates: templates,
} as const;
