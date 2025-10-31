import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Sidebar } from './Sidebar';
import { ThemeToggle } from './ThemeToggle';

/**
 * Header Component - Navigation bar
 */
export function Header() {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 flex md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0">
                            <Sidebar />
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="flex flex-1 items-center justify-between space-x-2">
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold">
                            ⚡ Command Builder
                        </span>
                    </Link>

                    <nav className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" asChild>
                            <Link to="/about">About</Link>
                        </Button>
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
