import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata = {
    title: 'About Us - AXIOM INFRASTRUCTURE',
    description: 'Learn about AXIOM INFRASTRUCTURE, our vision, mission, and the global infrastructure powering tomorrow.',
};

export default function AboutPage() {
    return (
        <>
            {/* Header */}
            <Section className="pt-32 pb-16">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                        The Foundation of <span className="text-accent-emerald">Global Infrastructure</span>
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        Since 2010, AXIOM INFRASTRUCTURE has been the invisible backbone powering the world's most demanding
                        digital ecosystems. We engineer the infrastructure that moves markets, protects data, and enables
                        breakthroughs that shape our future.
                    </p>
                </div>
            </Section>

            {/* Company Overview */}
            <Section background="surface">
                <div className="space-y-12">
                    <div>
                        <h2 className="text-4xl font-heading font-bold mb-6">Who We Are</h2>
                        <div className="grid md:grid-cols-2 gap-8 text-lg text-text-secondary leading-relaxed">
                            <div>
                                <p className="mb-4">
                                    AXIOM INFRASTRUCTURE is a global technology infrastructure company specializing in distributed
                                    computing, edge networks, and intelligent automation at scale. We operate the critical systems
                                    that process over 50 petabytes of data daily across financial markets, healthcare institutions,
                                    and enterprise applications worldwide.
                                </p>
                                <p>
                                    Our platform serves as the foundation for 500+ enterprise clients, including Fortune 500 companies
                                    in banking, healthcare, e-commerce, and manufacturing. We provide the compute, storage, networking,
                                    and security layer that enables businesses to operate 24/7/365 without compromise.
                                </p>
                            </div>
                            <div>
                                <p className="mb-4">
                                    Unlike traditional cloud providers, AXIOM is purpose-built for mission-critical workloads where
                                    milliseconds matter and downtime is measured in millions. Our distributed architecture spans
                                    150+ edge locations across 6 continents, providing sub-10ms latency to 95% of the global population.
                                </p>
                                <p>
                                    From high-frequency trading systems processing millions of transactions per second to AI research
                                    clusters training foundation models, to healthcare networks managing patient data across borders—if
                                    it demands absolute reliability, it runs on AXIOM.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Key Facts Grid */}
                    <div className="grid md:grid-cols-4 gap-6 pt-8">
                        <Card>
                            <div className="text-3xl font-heading font-bold text-accent-amber mb-2">2010</div>
                            <div className="text-sm text-text-secondary">Founded</div>
                        </Card>
                        <Card>
                            <div className="text-3xl font-heading font-bold text-accent-emerald mb-2">150+</div>
                            <div className="text-sm text-text-secondary">Global Locations</div>
                        </Card>
                        <Card>
                            <div className="text-3xl font-heading font-bold text-accent-amber mb-2">2,500+</div>
                            <div className="text-sm text-text-secondary">Engineers</div>
                        </Card>
                        <Card>
                            <div className="text-3xl font-heading font-bold text-accent-emerald mb-2">$2.8B</div>
                            <div className="text-sm text-text-secondary">Annual Revenue</div>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Vision & Mission */}
            <Section>
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-4xl font-heading font-bold mb-6">Our Vision</h2>
                        <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                            <p>
                                To become the ubiquitous infrastructure layer for human progress—powering breakthroughs in
                                medicine, scientific discovery, artificial intelligence, and global commerce without ever
                                being visible to the end user.
                            </p>
                            <p>
                                We envision a world where infrastructure is invisible, infinitely scalable, and universally
                                accessible. Where a startup in Mumbai has the same compute power as a Silicon Valley giant.
                                Where researchers in developing nations can access supercomputing clusters on demand. Where
                                critical healthcare systems never fail, regardless of geographic or economic constraints.
                            </p>
                            <p>
                                Our north star: democratize enterprise-grade infrastructure while maintaining the highest
                                standards of security, reliability, and performance that Fortune 500 companies demand.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-heading font-bold mb-6">Our Mission</h2>
                        <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                            <p>
                                To design, build, and operate the world's most reliable and performant infrastructure platform,
                                enabling organizations of all sizes to deploy mission-critical applications with confidence.
                            </p>
                            <p>
                                We commit to:
                            </p>
                            <ul className="space-y-2 list-disc list-inside ml-4">
                                <li>Maintaining 99.99% uptime SLAs with financial-backed guarantees</li>
                                <li>Delivering sub-millisecond latency through intelligent edge computing</li>
                                <li>Protecting customer data with military-grade encryption and zero-trust architecture</li>
                                <li>Advancing open-source infrastructure technologies that benefit the entire industry</li>
                                <li>Achieving carbon neutrality through renewable energy and efficiency optimization</li>
                                <li>Providing transparent, predictable pricing without vendor lock-in</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Company Philosophy */}
            <Section background="surface">
                <div>
                    <h2 className="text-4xl font-heading font-bold mb-12 text-center">Engineering Philosophy</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card>
                            <h3 className="text-2xl font-heading font-semibold mb-4">Infrastructure as Code</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Every component of our platform is defined in code, version-controlled, tested, and deployed
                                through automated pipelines. This enables reproducibility, auditability, and rapid iteration
                                without sacrificing stability.
                            </p>
                        </Card>
                        <Card>
                            <h3 className="text-2xl font-heading font-semibold mb-4">Chaos Engineering</h3>
                            <p className="text-text-secondary leading-relaxed">
                                We intentionally inject failures into production systems to validate resilience. Our infrastructure
                                is designed to fail gracefully and recover automatically, ensuring that no single point of failure
                                can compromise service availability.
                            </p>
                        </Card>
                        <Card>
                            <h3 className="text-2xl font-heading font-semibold mb-4">Security by Default</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Security isn't a feature—it's the foundation. Every API call is authenticated, every data transfer
                                encrypted, every access logged. Zero-trust architecture means we never assume trust, we verify everything.
                            </p>
                        </Card>
                        <Card>
                            <h3 className="text-2xl font-heading font-semibold mb-4">Observability First</h3>
                            <p className="text-text-secondary leading-relaxed">
                                You can't optimize what you can't measure. Our platform generates millions of metrics per second,
                                providing real-time insights into performance, usage, and potential issues before they impact customers.
                            </p>
                        </Card>
                        <Card>
                            <h3 className="text-2xl font-heading font-semibold mb-4">API-Driven Everything</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Every feature, every configuration, every deployment action is accessible via API. What you can do
                                in our console, you can do programmatically. This enables full DevOps automation and infrastructure as code.
                            </p>
                        </Card>
                        <Card>
                            <h3 className="text-2xl font-heading font-semibold mb-4">Performance Obsession</h3>
                            <p className="text-text-secondary leading-relaxed">
                                We measure latency in microseconds and optimize for the 99.9th percentile. Every millisecond matters
                                when you're processing financial transactions or serving real-time experiences to millions of users.
                            </p>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Timeline */}
            <Section>
                <h2 className="text-4xl font-heading font-bold mb-12">Our Journey</h2>
                <div className="space-y-8">
                    <div className="border-l-4 border-accent-amber pl-8">
                        <div className="text-2xl font-heading font-bold text-accent-amber mb-2">2010 - The Beginning</div>
                        <p className="text-text-secondary leading-relaxed">
                            Founded by former infrastructure engineers from Google and Amazon, AXIOM started with a simple premise:
                            enterprise infrastructure was too complex, too expensive, and too unreliable. Our first data center in
                            Virginia served 12 customers processing real-time financial data.
                        </p>
                    </div>
                    <div className="border-l-4 border-accent-emerald pl-8">
                        <div className="text-2xl font-heading font-bold text-accent-emerald mb-2">2013 - Global Expansion</div>
                        <p className="text-text-secondary leading-relaxed">
                            Expanded to 25 global locations across North America, Europe, and Asia. Launched our edge computing
                            network, reducing latency by 80% for international customers. Reached 100 enterprise clients including
                            three Fortune 500 companies.
                        </p>
                    </div>
                    <div className="border-l-4 border-accent-amber pl-8">
                        <div className="text-2xl font-heading font-bold text-accent-amber mb-2">2016 - AI Infrastructure</div>
                        <p className="text-text-secondary leading-relaxed">
                            Deployed specialized GPU clusters for machine learning workloads. Became the infrastructure of choice
                            for AI research labs and autonomous vehicle companies. Introduced auto-scaling orchestration that
                            reduced customer infrastructure costs by an average of 40%.
                        </p>
                    </div>
                    <div className="border-l-4 border-accent-emerald pl-8">
                        <div className="text-2xl font-heading font-bold text-accent-emerald mb-2">2019 - Enterprise Dominance</div>
                        <p className="text-text-secondary leading-relaxed">
                            Crossed 500 enterprise clients milestone. Achieved SOC 2 Type II, ISO 27001, and HIPAA compliance
                            certifications. Launched dedicated infrastructure for healthcare and financial services with enhanced
                            regulatory compliance features.
                        </p>
                    </div>
                    <div className="border-l-4 border-accent-amber pl-8">
                        <div className="text-2xl font-heading font-bold text-accent-amber mb-2">2022 - Sustainability First</div>
                        <p className="text-text-secondary leading-relaxed">
                            Achieved carbon neutrality across all data centers through renewable energy partnerships. Introduced
                            carbon-aware workload scheduling that automatically shifts compute to regions with clean energy availability.
                        </p>
                    </div>
                    <div className="border-l-4 border-accent-emerald pl-8">
                        <div className="text-2xl font-heading font-bold text-accent-emerald mb-2">2025 - Present Day</div>
                        <p className="text-text-secondary leading-relaxed">
                            Operating 150+ global locations processing 50PB+ of data daily. Serving 500+ enterprise clients with
                            99.99% uptime. Leading the industry in edge computing, serverless architecture, and AI infrastructure.
                            Revenue: $2.8B. Engineering team: 2,500+ across 40 countries.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Leadership Principles */}
            <Section background="surface">
                <div>
                    <h2 className="text-4xl font-heading font-bold mb-12 text-center">Leadership Principles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card>
                            <h3 className="text-xl font-heading font-semibold mb-3">Customer Obsession</h3>
                            <p className="text-sm text-text-secondary">
                                We start with the customer and work backwards. Every technical decision is evaluated through the
                                lens of customer impact.
                            </p>
                        </Card>
                        <Card>
                            <h3 className="text-xl font-heading font-semibold mb-3">Ownership</h3>
                            <p className="text-sm text-text-secondary">
                                Leaders are owners. They think long-term and don't sacrifice long-term value for short-term results.
                            </p>
                        </Card>
                        <Card>
                            <h3 className="text-xl font-heading font-semibold mb-3">Invent and Simplify</h3>
                            <p className="text-sm text-text-secondary">
                                Innovation is expected. We find ways to simplify complex systems and look for new ideas everywhere.
                            </p>
                        </Card>
                        <Card>
                            <h3 className="text-xl font-heading font-semibold mb-3">Hire and Develop the Best</h3>
                            <p className="text-sm text-text-secondary">
                                We raise the performance bar with every hire. Leaders recognize exceptional talent and develop them.
                            </p>
                        </Card>
                        <Card>
                            <h3 className="text-xl font-heading font-semibold mb-3">Insist on the Highest Standards</h3>
                            <p className="text-sm text-text-secondary">
                                Our standards are relentlessly high. We ensure defects don't propagate and problems are fixed.
                            </p>
                        </Card>
                        <Card>
                            <h3 className="text-xl font-heading font-semibold mb-3">Bias for Action</h3>
                            <p className="text-sm text-text-secondary">
                                Speed matters. Many decisions are reversible and do not need extensive study. We value calculated risk-taking.
                            </p>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Global Presence */}
            <Section>
                <div>
                    <h2 className="text-4xl font-heading font-bold mb-6">Global Presence</h2>
                    <p className="text-xl text-text-secondary mb-12 max-w-3xl">
                        Our infrastructure spans six continents with 150+ edge locations, ensuring low-latency access for
                        95% of the global population.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-2xl font-heading font-semibold mb-4">North America</h3>
                            <ul className="space-y-2 text-text-secondary">
                                <li>• 45 locations across USA and Canada</li>
                                <li>• Primary data centers: Virginia, Oregon, Texas</li>
                                <li>• Tier 4 facilities with N+1 redundancy</li>
                                <li>• Direct connectivity to major ISPs</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-heading font-semibold mb-4">Europe</h3>
                            <ul className="space-y-2 text-text-secondary">
                                <li>• 40 locations across EU and UK</li>
                                <li>• Primary data centers: Frankfurt, London, Amsterdam</li>
                                <li>• GDPR-compliant data residency</li>
                                <li>• Multi-region failover capabilities</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-heading font-semibold mb-4">Asia Pacific</h3>
                            <ul className="space-y-2 text-text-secondary">
                                <li>• 35 locations across APAC region</li>
                                <li>• Primary data centers: Singapore, Tokyo, Sydney</li>
                                <li>• Sub-10ms latency to major cities</li>
                                <li>• Local regulatory compliance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Values */}
            <Section background="surface">
                <div>
                    <h2 className="text-4xl font-heading font-bold mb-12 text-center">Core Values</h2>
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-heading font-semibold mb-4">Reliability is Non-Negotiable</h3>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                When hospitals rely on our infrastructure for patient data, when banks process millions in transactions,
                                when autonomous vehicles make split-second decisions—we don't get to have outages. Our 99.99% uptime
                                SLA isn't a marketing claim; it's backed by financial guarantees and validated by a decade of operational
                                excellence.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-heading font-semibold mb-4">Transparency Builds Trust</h3>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                We publish real-time status pages, detailed postmortems for every incident, and transparent pricing
                                without hidden fees. Our customers deserve to know exactly how their infrastructure operates and what
                                they're paying for.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-heading font-semibold mb-4">Innovation Through Constraints</h3>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                The best solutions emerge when resources are limited. We optimize for efficiency, squeeze every
                                ounce of performance from hardware, and architect systems that do more with less. This discipline
                                translates to lower costs and better performance for our customers.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-heading font-semibold mb-4">Diversity Drives Excellence</h3>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                Our engineering team spans 40 countries, speaks 60 languages, and brings perspectives from finance,
                                academia, startups, and enterprise. This diversity isn't a checkbox—it's our competitive advantage.
                                Better solutions emerge when different viewpoints challenge assumptions.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold mb-6">Join Us in Building Tomorrow</h2>
                    <p className="text-lg text-text-secondary mb-8">
                        Whether you're looking to transform your infrastructure, join our team, or partner with us on
                        breakthrough projects—we'd love to hear from you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/careers" variant="primary">
                            Explore Careers
                        </Button>
                        <Button href="/contact" variant="secondary">
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
