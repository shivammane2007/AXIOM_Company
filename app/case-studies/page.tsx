import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
    title: 'Case Studies - AXIOM INFRASTRUCTURE',
    description: 'See how leading enterprises across industries use AXIOM INFRASTRUCTURE to power mission-critical workloads.',
};

export default function CaseStudiesPage() {
    const caseStudies = [
        {
            industry: 'Financial Services',
            company: 'Global Investment Bank',
            logo: 'Finance',
            problem: 'Legacy trading infrastructure couldn\'t scale to handle 10M+ transactions per second during market volatility. Frequent outages during peak trading hours cost millions in lost revenue. System latency exceeded 100ms, putting them at competitive disadvantage.',
            solution: 'Migrated high-frequency trading systems to AXIOM\'s edge computing platform with custom low-latency networking. Implemented distributed order management system with in-memory data grids. Deployed across multiple regions with active-active failover.',
            results: [
                { metric: 'Latency Reduction', value: '95% (5ms avg)' },
                { metric: 'Throughput Increase', value: '20x (12M TPS)' },
                { metric: 'Uptime Achievement', value: '99.995%' },
                { metric: 'Cost Savings', value: '$8M annually' }
            ],
            testimonial: 'AXIOM\'s infrastructure handles our most demanding workloads with microsecond precision. The migration was seamless, and we\'ve eliminated trading outages entirely.'
        },
        {
            industry: 'Healthcare',
            company: 'National Hospital Network',
            logo: 'Healthcare',
            problem: 'Patient data scattered across 50+ hospitals with no unified system. HIPAA compliance required but infrastructure audit revealed 200+ violations. Legacy EHR system couldn\'t support real-time collaboration between specialists.',
            solution: 'Built HIPAA-compliant data lake on AXIOM platform with end-to-end encryption. Implemented real-time data sync across all facilities using event streaming. Created unified API layer for EHR access with role-based permissions. Automated compliance monitoring and reporting.',
            results: [
                { metric: 'Data Access Time', value: '10sec → instant' },
                { metric: 'Compliance Violations', value: '200 → 0' },
                { metric: 'System Uptime', value: '99.98%' },
                { metric: 'Patient Satisfaction', value: '+42%' }
            ],
            testimonial: 'We can now share patient data securely across our entire network in real time. This infrastructure has literally saved lives by enabling faster diagnosis and treatment.'
        },
        {
            industry: 'E-Commerce',
            company: 'Global Retail Platform',
            logo: 'E-Commerce',
            problem: 'Black Friday traffic peaks (50x normal) crashed site for 4 consecutive years. Lost estimated $120M in revenue during downtime. Traditional cloud auto-scaling too slow—took 15 minutes to provision new capacity, but traffic spikes happened in seconds.',
            solution: 'Implemented predictive auto-scaling using ML models to anticipate traffic patterns. Deployed globally distributed architecture with edge caching and CDN integration. Database sharding with read replicas in every region. Real-time inventory sync with event-driven architecture.',
            results: [
                { metric: 'Black Friday Uptime', value: '100% (3 years)' },
                { metric: 'Peak Traffic Handled', value: '10M requests/sec' },
                { metric: 'Page Load Time', value: '70% faster' },
                { metric: 'Revenue Increase', value: '+$150M annually' }
            ],
            testimonial: 'We no longer fear traffic spikes. AXIOM\'s infrastructure scales automatically to handle any load. Our Black Friday revenue has increased 125% since migration.'
        },
        {
            industry: 'Manufacturing',
            company: 'Smart Factory Network',
            logo: 'Manufacturing',
            problem: 'IoT sensor data from 10,000+ factory devices not reaching cloud due to unreliable connectivity. Latency in processing sensor data caused quality control issues. Predictive maintenance impossible without real-time analytics.',
            solution: 'Deployed AXIOM edge computing infrastructure at each factory location. Local processing of IoT data with ML inference running at the edge. Fault-tolerant data sync to cloud when connectivity available. Real-time dashboards for factory managers with predictive alerts.',
            results: [
                { metric: 'Data Collection Rate', value: '60% → 99.9%' },
                { metric: 'Defect Detection', value: '+85% faster' },
                { metric: 'Equipment Downtime', value: '-48%' },
                { metric: 'Annual Savings', value: '$12M' }
            ],
            testimonial: 'Edge computing changed everything. We now detect equipment failures before they happen and have reduced unplanned downtime by nearly half.'
        },
        {
            industry: 'Media & Entertainment',
            company: 'Video Streaming Platform',
            logo: 'Media',
            problem: 'Streaming 4K video to 50M concurrent users exceeded previous infrastructure capacity. Content delivery costs were unsustainable at $15M/month. Buffering and quality issues drove user churn of 8% monthly.',
            solution: 'Migrated to AXIOM\'s global CDN with 150+ edge locations. Implemented adaptive bitrate streaming with real-time quality optimization. Video transcoding pipeline using GPU clusters. Intelligent caching based on content popularity and user location.',
            results: [
                { metric: 'CDN Costs', value: '-60% ($9M saved)' },
                { metric: 'Buffering Events', value: '-92%' },
                { metric: 'User Churn', value: '8% → 2%' },
                { metric: 'Concurrent Users', value: '50M → 120M' }
            ],
            testimonial: 'We scaled from 50M to 120M users without proportional cost increases. Video quality improved dramatically, and our user retention is at all-time highs.'
        }
    ];

    return (
        <>
            {/* Header */}
            <Section className="pt-32 pb-16">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                        Real Results from <span className="text-accent-emerald">Real Enterprises</span>
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        These aren't hypotheticals or marketing fluff. These are actual migrations we've executed, measured outcomes
                        we've delivered, and transformations that changed how our clients operate.
                    </p>
                </div>
            </Section>

            {/* Case Studies */}
            {caseStudies.map((study, index) => (
                <Section
                    key={study.industry}
                    background={index % 2 === 0 ? 'surface' : 'default'}
                >
                    <div className="space-y-8">
                        {/* Header */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-sm text-accent-amber font-semibold">CASE STUDY {String(index + 1).padStart(2, '0')}</div>
                                <div className="text-lg font-heading font-bold text-text-secondary/30">{study.logo}</div>
                            </div>
                            <h2 className="text-4xl font-heading font-bold mb-2">{study.industry}</h2>
                            <p className="text-lg text-text-secondary">{study.company}</p>
                        </div>

                        {/* Problem */}
                        <Card className="border-l-4 border-accent-crimson">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-accent-crimson">The Problem</h3>
                            <p className="text-text-secondary leading-relaxed">{study.problem}</p>
                        </Card>

                        {/* Solution */}
                        <Card className="border-l-4 border-accent-amber">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-accent-amber">Our Solution</h3>
                            <p className="text-text-secondary leading-relaxed">{study.solution}</p>
                        </Card>

                        {/* Results */}
                        <div>
                            <h3 className="text-2xl font-heading font-semibold mb-6">Measured Results</h3>
                            <div className="grid md:grid-cols-4 gap-4">
                                {study.results.map((result) => (
                                    <Card key={result.metric} className="text-center">
                                        <div className="text-3xl font-heading font-bold text-accent-emerald mb-2">
                                            {result.value}
                                        </div>
                                        <div className="text-sm text-text-secondary">{result.metric}</div>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Testimonial */}
                        <Card className="bg-gradient-to-r from-accent-amber/10 to-accent-emerald/10 border-none">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 text-4xl text-accent-amber">"</div>
                                <div>
                                    <p className="text-lg italic text-text-secondary mb-4">{study.testimonial}</p>
                                    <p className="text-sm font-semibold">— Engineering Leadership, {study.company}</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Section>
            ))}

            {/* Industries We Serve */}
            <Section background="surface">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-4xl font-heading font-bold mb-6">Industries We Serve</h2>
                    <p className="text-lg text-text-secondary">
                        Our infrastructure powers mission-critical workloads across every major industry vertical.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {['Financial Services', 'Healthcare', 'E-Commerce & Retail', 'Manufacturing', 'Media & Entertainment',
                        'Government', 'Education', 'Technology', 'Telecommunications', 'Energy & Utilities',
                        'Transportation', 'Insurance'].map((industry) => (
                            <Card key={industry} className="text-center hover:border-accent-amber transition-colors">
                                <div className="font-heading font-semibold">{industry}</div>
                            </Card>
                        ))}
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold mb-6">Your Success Story Starts Here</h2>
                    <p className="text-lg text-text-secondary mb-8">
                        Schedule a consultation to discuss your specific infrastructure challenges and see how AXIOM can
                        deliver measurable results for your organization.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact" variant="primary">
                            Schedule Consultation
                        </Button>
                        <Button href="/services" variant="secondary">
                            Explore Services
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
