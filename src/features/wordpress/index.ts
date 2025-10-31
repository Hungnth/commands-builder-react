import { WordPressPage } from './pages/WordPressPage.tsx';
import { wpTemplates } from './data/wpTemplates.ts';
import { WordPressIcon } from './components/WordPressIcon.tsx';

/**
 * Git Module Configuration
 */
export const wordpressModule = {
    name: 'WordPress',
    path: '/wordpress',
    icon: WordPressIcon,
    element: WordPressPage,
    templates: wpTemplates,
} as const;
