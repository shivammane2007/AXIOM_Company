import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <Section className="relative overflow-hidden min-h-[90vh] flex items-center" noPadding>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg opacity-50"></div>
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, var(--border-color) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border-color) 1px, transparent 1px)
            `,
                        backgroundSize: '40px 40px',
                    }}
                ></div>

                <div className="container-custom relative z-10 py-32">
                    <div className="max-w-5xl">
                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                            Building the
                            <span className="block text-accent-amber">Infrastructure</span>
                            <span className="block">of Tomorrow</span>
                        </h1>

                        {/* Value Proposition */}
                        <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl leading-relaxed">
                            Powering the world's most demanding enterprises with unparalleled cloud infrastructure,
                            intelligent automation, and fortress-grade security. From Fortune 500 companies to
                            innovative startups, we deliver the foundation for digital transformation.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="/contact" variant="primary">
                                Schedule Enterprise Demo
                            </Button>
                            <Button href="/services" variant="secondary">
                                View Our Solutions
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-light-border dark:border-dark-border">
                            <div>
                                <div className="text-4xl font-heading font-bold text-accent-amber mb-2">99.99%</div>
                                <div className="text-sm text-text-secondary">Uptime SLA</div>
                            </div>
                            <div>
                                <div className="text-4xl font-heading font-bold text-accent-emerald mb-2">500+</div>
                                <div className="text-sm text-text-secondary">Enterprise Clients</div>
                            </div>
                            <div>
                                <div className="text-4xl font-heading font-bold text-accent-amber mb-2">50PB+</div>
                                <div className="text-sm text-text-secondary">Data Processed</div>
                            </div>
                            <div>
                                <div className="text-4xl font-heading font-bold text-accent-emerald mb-2">24/7</div>
                                <div className="text-sm text-text-secondary">Global Support</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </Section>

            {/* Trust Section */}
            <Section background="surface">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto">
                        From financial institutions to global healthcare providers, the world's most critical
                        infrastructure runs on AXIOM.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['Finance', 'Healthcare', 'E-Commerce', 'Manufacturing', 'Media', 'Government', 'Education', 'Technology'].map((industry) => (
                            <div key={industry} className="p-6 rounded-lg border border-light-border dark:border-dark-border hover:border-accent-amber transition-colors">
                                <div className="text-lg font-heading font-semibold">{industry}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Why Choose AXIOM */}
            <Section>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                            Why Global Enterprises Choose AXIOM
                        </h2>
                        <p className="text-lg text-text-secondary mb-8">
                            We don't just provide infrastructure—we architect ecosystems that scale with your ambition.
                            Our platform is engineered for mission-critical workloads where failure is not an option.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-amber/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-heading font-semibold mb-2">Lightning Performance</h3>
                                    <p className="text-text-secondary">Sub-millisecond latency with edge computing across 150+ global locations.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-emerald/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-accent-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-heading font-semibold mb-2">Enterprise Security</h3>
                                    <p className="text-text-secondary">Zero-trust architecture with end-to-end encryption and compliance automation.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-amber/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-heading font-semibold mb-2">Infinite Scale</h3>
                                    <p className="text-text-secondary">Auto-scaling infrastructure that grows from startup to enterprise without rewrites.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent-amber/20 to-accent-emerald/20 p-12 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl font-heading font-bold mb-4">10M+</div>
                                <div className="text-xl text-text-secondary">Requests Per Second</div>
                                <div className="mt-8 text-sm text-text-secondary">
                                    Peak capacity handled by our infrastructure
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section background="surface">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Ready to Transform Your Infrastructure?
                    </h2>
                    <p className="text-lg text-text-secondary mb-8">
                        Join the Fortune 500 companies that trust AXIOM INFRASTRUCTURE for their most critical workloads.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact" variant="primary">
                            Start Your Migration
                        </Button>
                        <Button href="/about" variant="secondary">
                            Learn More About Us
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
