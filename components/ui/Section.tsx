import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    background?: 'default' | 'surface';
    noPadding?: boolean;
}

export default function Section({
    children,
    className = '',
    background = 'default',
    noPadding = false
}: SectionProps) {
    const bgClass = background === 'surface'
        ? 'bg-light-surface dark:bg-dark-surface'
        : '';

    const paddingClass = noPadding ? '' : 'section-padding';

    return (
        <section className={`${bgClass} ${paddingClass} ${className} will-change-transform`}>
            <div className="container-custom">
                {children}
            </div>
        </section>
    );
}
