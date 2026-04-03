'use client';

import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Navbar from '@/components/layout/Navbar';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('@/components/layout/Footer'), {
    loading: () => <div className="h-20" />, // Minimal loading placeholder
    ssr: true, // Keep it SSR'd for SEO but chunked for JS
});

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
