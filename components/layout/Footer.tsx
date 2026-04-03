import Link from 'next/link';

const footerLinks = {
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Leadership', href: '/about#leadership' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
    ],
    solutions: [
        { name: 'Products', href: '/products' },
        { name: 'Services', href: '/services' },
        { name: 'Technology', href: '/technology' },
        { name: 'Case Studies', href: '/case-studies' },
    ],
    resources: [
        { name: 'Documentation', href: '#' },
        { name: 'API Reference', href: '#' },
        { name: 'Support', href: '/contact#support' },
        { name: 'Blog', href: '#' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Compliance', href: '#' },
    ],
};

const socialLinks = [
    {
        name: 'LinkedIn',
        href: '#',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        href: '#',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        name: 'Twitter',
        href: '#',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border">
            <div className="container-custom">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="relative w-8 h-8">
                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                    <polygon
                                        points="50,10 90,30 90,70 50,90 10,70 10,30"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        className="text-accent-amber"
                                    />
                                    <polygon
                                        points="50,25 75,37.5 75,62.5 50,75 25,62.5 25,37.5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        className="text-accent-emerald"
                                    />
                                    <polygon
                                        points="50,40 60,45 60,55 50,60 40,55 40,45"
                                        fill="currentColor"
                                        className="text-accent-amber"
                                    />
                                </svg>
                            </div>
                            <span className="text-xl font-heading font-bold">AXIOM</span>
                        </div>
                        <p className="text-sm text-text-secondary mb-6">
                            Building the infrastructure of tomorrow. Enterprise-grade solutions for the modern digital world.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="text-text-secondary hover:text-accent-amber transition-colors"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-heading font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-text-secondary hover:text-accent-amber transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions Links */}
                    <div>
                        <h3 className="font-heading font-semibold mb-4">Solutions</h3>
                        <ul className="space-y-3">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-text-secondary hover:text-accent-amber transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="font-heading font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-text-secondary hover:text-accent-amber transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-heading font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-text-secondary hover:text-accent-amber transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-light-border dark:border-dark-border">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-text-secondary">
                            © {currentYear} AXIOM INFRASTRUCTURE. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-text-secondary">
                            <span>SOC 2 Type II Certified</span>
                            <span>•</span>
                            <span>ISO 27001 Compliant</span>
                            <span>•</span>
                            <span>GDPR Ready</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
