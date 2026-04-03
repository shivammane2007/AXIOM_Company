import type { Metadata } from 'next';
import { Inter, DM_Sans } from 'next/font/google';
import './globals.css';
import ClientLayout from '@/components/layout/ClientLayout';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
    preload: true,
});

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
    variable: '--font-dm-sans',
    display: 'swap',
    preload: true,
});

export const metadata: Metadata = {
    title: 'AXIOM INFRASTRUCTURE - Enterprise Technology Solutions',
    description: 'Building the infrastructure of tomorrow. Enterprise-grade cloud, AI, and security solutions for global organizations.',
    keywords: ['enterprise infrastructure', 'cloud solutions', 'AI technology', 'cybersecurity', 'data processing'],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${dmSans.variable}`} suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              })();
            `,
                    }}
                />
            </head>
            <body className="antialiased">
                <ClientLayout>
                    {children}
                </ClientLayout>
            </body>
        </html>
    );
}
