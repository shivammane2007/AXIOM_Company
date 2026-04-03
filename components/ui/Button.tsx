import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    href?: string;
    className?: string;
    onClick?: () => void;
}

export default function Button({
    children,
    variant = 'primary',
    href,
    className = '',
    onClick
}: ButtonProps) {
    const baseStyles = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
    const combinedStyles = `${baseStyles} ${className} inline-block text-center`;

    if (href) {
        const isExternal = href.startsWith('http') || href.startsWith('//');
        if (isExternal) {
            return (
                <a href={href} className={combinedStyles} target="_blank" rel="noopener noreferrer">
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedStyles}>
            {children}
        </button>
    );
}
