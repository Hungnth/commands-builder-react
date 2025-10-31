import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { RootError } from './layouts/RootError';

// Import tất cả các module
import { gitModule } from '@/features/git';
import { dockerModule } from '@/features/docker';

// Pages
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

/**
 * Danh sách các feature modules
 * Thêm module mới vào đây để tự động tạo route và sidebar item
 */
export const featureModules = [
    gitModule,
    dockerModule
];

/**
 * Tự động tạo routes từ feature modules
 */
const featureRoutes = featureModules.map((module) => ({
    path: module.path,
    element: <module.element />,
}
));

/**
 * Router configuration với dynamic routes
 */
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <RootError />,
        children: [
            { index: true, element: <HomePage /> },
            ...featureRoutes, // Tự động thêm routes từ modules
            { path: 'about', element: <AboutPage /> },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
]);
