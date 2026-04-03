import { ReactNode } from 'react';

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
        return (
            <a href={href} className={combinedStyles}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={combinedStyles}>
            {children}
        </button>
    );
}
