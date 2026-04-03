'use client';

import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
