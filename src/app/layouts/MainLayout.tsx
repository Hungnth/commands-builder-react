import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

/**
 * Main Layout - Layout chính cho toàn bộ ứng dụng
 */
export function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <div className="flex flex-1">
                {/* Sidebar - Hidden on mobile */}
                <div className="hidden md:block">
                    <Sidebar />
                </div>

                {/* Main Content */}
                <main className="flex-1 p-6 lg:p-8">
                    <div className="max-w-full">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
