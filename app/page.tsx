import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Image from 'next/image';

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
                    <div className="relative overflow-hidden group rounded-2xl border border-white/10 shadow-2xl">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/images/infrastructure-stats.png"
                                alt="Global Infrastructure Network"
                                fill
                                className="object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg/60 z-10" />
                        </div>
                        
                        {/* Status UI Overlay */}
                        <div className="absolute top-6 right-6 z-30 flex items-center space-x-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                            <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                            <span className="text-[10px] font-bold tracking-widest text-accent-emerald uppercase">Live Feed</span>
                        </div>

                        <div className="relative z-20 aspect-square p-12 flex flex-col items-center justify-center backdrop-blur-[2px]">
                            <div className="text-center animate-heartbeat">
                                <div className="text-7xl font-heading font-bold mb-2 text-white dual-glow tracking-tighter">10M+</div>
                                <div className="text-xl font-medium text-accent-emerald/90 tracking-wide uppercase text-sm mb-6">Requests Per Second</div>
                                
                                <div className="flex items-center justify-center space-x-4 opacity-70">
                                    <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-white/30" />
                                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-secondary">Global Peak Capacity</div>
                                    <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-white/30" />
                                </div>
                            </div>
                        </div>

                        {/* Scanner Line Effect */}
                        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden opacity-20">
                            <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-accent-emerald/20 to-transparent absolute top-0 left-0 -translate-y-full animate-[scan_4s_linear_infinite]" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Enterprise Ecosystem Section */}
            <Section className="relative overflow-hidden">
                {/* Background Technical Radar Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none z-0">
                    <svg viewBox="0 0 1000 1000" className="w-full h-full animate-[spin_60s_linear_infinite]">
                        <circle cx="500" cy="500" r="100" stroke="currentColor" fill="none" strokeWidth="1" />
                        <circle cx="500" cy="500" r="200" stroke="currentColor" fill="none" strokeWidth="1" />
                        <circle cx="500" cy="500" r="300" stroke="currentColor" fill="none" strokeWidth="1" />
                        <circle cx="500" cy="500" r="400" stroke="currentColor" fill="none" strokeWidth="1" />
                        <line x1="500" y1="100" x2="500" y2="900" stroke="currentColor" strokeWidth="1" />
                        <line x1="100" y1="500" x2="900" y2="500" stroke="currentColor" strokeWidth="1" />
                    </svg>
                </div>

                <div className="relative z-10 text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">The AXIOM Ecosystem</h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Our infrastructure is more than just hardware. It's an intelligent, global software-defined fabric 
                        engineered for the absolute edge of possibility.
                    </p>
                </div>

                <div className="relative z-10 grid md:grid-cols-3 gap-8">
                    <Card className="group hover:border-accent-amber transition-all duration-300">
                        <div className="mb-6 w-12 h-12 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber group-hover:bg-accent-amber group-hover:text-black transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-heading font-semibold mb-3">Global Anycast</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Distributed global traffic management using BGP anycast routing across 300+ edge locations 
                            to ensure sub-50ms latency for 99% of the world.
                        </p>
                    </Card>

                    <Card className="group hover:border-accent-emerald transition-all duration-300">
                        <div className="mb-6 w-12 h-12 rounded-lg bg-accent-emerald/10 flex items-center justify-center text-accent-emerald group-hover:bg-accent-emerald group-hover:text-black transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-heading font-semibold mb-3">AI-Orchestration</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Proprietary machine learning models continuously optimize workload placement, predicting 
                            regional demand spikes before they happen and auto-healing infrastructure.
                        </p>
                    </Card>

                    <Card className="group hover:border-accent-amber transition-all duration-300">
                        <div className="mb-6 w-12 h-12 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber group-hover:bg-accent-amber group-hover:text-black transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-heading font-semibold mb-3">Quantum-Safe</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            Hardware-root-of-trust with post-quantum cryptography standards (NIST-ready) to protect 
                            your most sensitive data from next-generation security threats.
                        </p>
                    </Card>
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
