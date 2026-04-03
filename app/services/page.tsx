import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
    title: 'Services & Solutions - AXIOM INFRASTRUCTURE',
    description: 'Enterprise services for cloud infrastructure, AI, cybersecurity, and digital transformation.',
};

export default function ServicesPage() {
    return (
        <>
            {/* Header */}
            <Section className="pt-32 pb-16">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                        Enterprise Services <span className="text-accent-emerald">That Scale</span>
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        Beyond providing infrastructure, we partner with you to architect, optimize, and operate mission-critical
                        systems. Our services team brings decades of collective experience running infrastructure at Fortune 500 scale.
                    </p>
                </div>
            </Section>

            {/* Cloud Infrastructure */}
            <Section background="surface">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <div className="text-sm text-accent-amber font-semibold mb-2">SERVICE 01</div>
                        <h2 className="text-4xl font-heading font-bold mb-6">Cloud Infrastructure Services</h2>
                        <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                            Migrate from legacy data centers to modern cloud infrastructure without downtime. Our team has migrated
                            over 500 enterprise workloads, including monolithic applications, distributed databases, and real-time
                            trading systems.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-heading font-semibold mb-2">Target Audience</h3>
                                <p className="text-text-secondary">
                                    CIOs and infrastructure teams at enterprises running on-premises data centers, looking to modernize
                                    without risking business continuity. Ideal for financial services, healthcare, and regulated industries.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold mb-2">Business Value</h3>
                                <p className="text-text-secondary">
                                    Average savings of 40% on infrastructure costs within first year. Improved agility enables 10x faster
                                    deployments. Reduced capital expenditure frees budget for innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-heading font-semibold mb-4">Key Deliverables</h3>
                        <Card className="mb-4">
                            <h4 className="font-heading font-semibold mb-2">Assessment & Strategy</h4>
                            <ul className="text-sm text-text-secondary space-y-1">
                                <li>• Comprehensive infrastructure audit</li>
                                <li>• TCO analysis and ROI projections</li>
                                <li>• Migration roadmap with risk mitigation</li>
                                <li>• Technology stack recommendations</li>
                            </ul>
                        </Card>
                        <Card className="mb-4">
                            <h4 className="font-heading font-semibold mb-2">Migration Execution</h4>
                            <ul className="text-sm text-text-secondary space-y-1">
                                <li>• Zero-downtime data migration</li>
                                <li>• Application refactoring for cloud-native</li>
                                <li>• Disaster recovery setup and testing</li>
                                <li>• Performance optimization and tuning</li>
                            </ul>
                        </Card>
                        <Card>
                            <h4 className="font-heading font-semibold mb-2">Ongoing Optimization</h4>
                            <ul className="text-sm text-text-secondary space-y-1">
                                <li>• Cost optimization and right-sizing</li>
                                <li>• Security posture continuous improvement</li>
                                <li>• Capacity planning and forecasting</li>
                                <li>• 24/7 infrastructure monitoring</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* AI & Machine Learning */}
            <Section>
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="order-2 lg:order-1">
                        <h3 className="font-heading font-semibold mb-4">AI Infrastructure Capabilities</h3>
                        <div className="space-y-4">
                            <Card>
                                <h4 className="font-heading font-semibold mb-2">Training Infrastructure</h4>
                                <p className="text-sm text-text-secondary">
                                    GPU clusters optimized for distributed training. Support for PyTorch, TensorFlow, JAX. Automatic
                                    checkpointing and fault tolerance. Train models 3x faster than commodity cloud.
                                </p>
                            </Card>
                            <Card>
                                <h4 className="font-heading font-semibold mb-2">Inference at Scale</h4>
                                <p className="text-sm text-text-secondary">
                                    Deploy models to edge locations for sub-20ms inference. Auto-scaling based on traffic. Model versioning
                                    and A/B testing built-in. Serve millions of predictions per second.
                                </p>
                            </Card>
                            <Card>
                                <h4 className="font-heading font-semibold mb-2">MLOps Platform</h4>
                                <p className="text-sm text-text-secondary">
                                    End-to-end ML lifecycle management. Experiment tracking, model registry, automated retraining.
                                    Data versioning and feature stores. Compliance and governance for regulated industries.
                                </p>
                            </Card>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="text-sm text-accent-emerald font-semibold mb-2">SERVICE 02</div>
                        <h2 className="text-4xl font-heading font-bold mb-6">AI & Machine Learning Infrastructure</h2>
                        <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                            Build, train, and deploy machine learning models at scale. We provide the specialized infrastructure for
                            AI workloads—from training foundation models to real-time inference serving billions of predictions daily.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-heading font-semibold mb-2">Target Audience</h3>
                                <p className="text-text-secondary">
                                    Data science teams, AI research labs, and companies building ML-powered products. Ideal for autonomous
                                    vehicles, recommendation systems, fraud detection, and computer vision applications.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold mb-2">Business Value</h3>
                                <p className="text-text-secondary">
                                    Accelerate time-to-production for ML models by 60%. Reduce infrastructure costs by eliminating idle
                                    GPU time. Enable data scientists to focus on modeling instead of infrastructure management.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Cybersecurity */}
            <Section background="surface">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <div className="text-sm text-accent-amber font-semibold mb-2">SERVICE 03</div>
                        <h2 className="text-4xl font-heading font-bold mb-6">Enterprise Cybersecurity</h2>
                        <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                            Protect your infrastructure with defense-in-depth security architecture. Our security team implements
                            zero-trust networking, continuous compliance monitoring, and automated threat response.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-heading font-semibold mb-2">Target Audience</h3>
                                <p className="text-text-secondary">
                                    CISOs and security teams at enterprises handling sensitive data. Essential for financial services,
                                    healthcare (HIPAA), and companies subject to SOC 2, ISO 27001, or PCI DSS compliance requirements.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-heading font-semibold mb-2">Business Value</h3>
                                <p className="text-text-secondary">
                                    Reduce security incidents by 85% through proactive threat detection. Achieve compliance certifications
                                    90 days faster with automation. Avoid average breach cost of $4.24M through prevention.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-heading font-semibold mb-4">Security Services</h3>
                        <div className="space-y-3">
                            <Card>
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-amber/10 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-semibold mb-1">Zero-Trust Architecture</h4>
                                        <p className="text-sm text-text-secondary">
                                            Implement least-privilege access, micro-segmentation, and continuous verification. No implicit trust zones.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-emerald/10 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-accent-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-semibold mb-1">Threat Detection & Response</h4>
                                        <p className="text-sm text-text-secondary">
                                            AI-powered anomaly detection, real-time alerting, and automated incident response playbooks.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-amber/10 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-accent-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-semibold mb-1">Compliance Automation</h4>
                                        <p className="text-sm text-text-secondary">
                                            Continuous compliance monitoring for SOC 2, ISO 27001, HIPAA, PCI DSS. Automated evidence collection.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Network Infrastructure */}
            <Section>
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="text-sm text-accent-emerald font-semibold mb-2">SERVICE 04</div>
                    <h2 className="text-4xl font-heading font-bold mb-6">Network Infrastructure Solutions</h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        Build globally distributed networks with software-defined networking, CDN, and edge computing. Deliver content
                        and applications with single-digit millisecond latency worldwide.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">SD-WAN</h3>
                        <p className="text-text-secondary mb-4">
                            Connect global offices and data centers with software-defined networking. Dynamic path selection,
                            encryption, and WAN optimization built-in.
                        </p>
                        <ul className="text-sm text-text-secondary space-y-1">
                            <li>• Multi-cloud connectivity</li>
                            <li>• Automatic failover</li>
                            <li>• Traffic shaping and QoS</li>
                            <li>• Centralized management</li>
                        </ul>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Global CDN</h3>
                        <p className="text-text-secondary mb-4">
                            Distribute content across 150+ edge locations. Automatic caching, image optimization, and video
                            streaming acceleration.
                        </p>
                        <ul className="text-sm text-text-secondary space-y-1">
                            <li>• HTTP/3 and QUIC support</li>
                            <li>• DDoS protection included</li>
                            <li>• Real-time analytics</li>
                            <li>• Custom SSL certificates</li>
                        </ul>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Edge Computing</h3>
                        <p className="text-text-secondary mb-4">
                            Run compute workloads at the edge for ultra-low latency. Deploy serverless functions, containers,
                            or VMs closer to users.
                        </p>
                        <ul className="text-sm text-text-secondary space-y-1">
                            <li>• Sub-10ms latency</li>
                            <li>• Auto-scaling globally</li>
                            <li>• WebAssembly support</li>
                            <li>• IoT device integration</li>
                        </ul>
                    </Card>
                </div>
            </Section>

            {/* Enterprise Consulting */}
            <Section background="surface">
                <div className="max-w-4xl mx-auto">
                    <div className="text-sm text-accent-amber font-semibold mb-2 text-center">SERVICE 05</div>
                    <h2 className="text-4xl font-heading font-bold mb-6 text-center">Enterprise Consulting</h2>
                    <p className="text-lg text-text-secondary mb-12 text-center leading-relaxed">
                        Strategic guidance from architects who've built infrastructure at Google, Amazon, and Microsoft scale.
                        We help you make the right technical decisions for your business context.
                    </p>

                    <div className="space-y-6">
                        <Card>
                            <div className="grid md:grid-cols-4 gap-6">
                                <div className="md:col-span-1">
                                    <h3 className="font-heading font-semibold">Architecture Design</h3>
                                </div>
                                <div className="md:col-span-3">
                                    <p className="text-text-secondary mb-3">
                                        Design scalable, resilient architectures for your specific requirements. We create detailed blueprints
                                        covering compute, storage, networking, security, and disaster recovery.
                                    </p>
                                    <div className="text-sm text-text-secondary">
                                        Deliverables: Architecture diagrams, technology selection rationale, capacity planning models,
                                        cost projections, migration roadmap
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="grid md:grid-cols-4 gap-6">
                                <div className="md:col-span-1">
                                    <h3 className="font-heading font-semibold">Performance Engineering</h3>
                                </div>
                                <div className="md:col-span-3">
                                    <p className="text-text-secondary mb-3">
                                        Identify bottlenecks, optimize database queries, tune application code, and architect for scale.
                                        We've improved system throughput by 10-50x through systematic optimization.
                                    </p>
                                    <div className="text-sm text-text-secondary">
                                        Deliverables: Performance audit report, optimization recommendations, load testing results,
                                        benchmarking analysis
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="grid md:grid-cols-4 gap-6">
                                <div className="md:col-span-1">
                                    <h3 className="font-heading font-semibold">DevOps Transformation</h3>
                                </div>
                                <div className="md:col-span-3">
                                    <p className="text-text-secondary mb-3">
                                        Implement CI/CD pipelines, infrastructure as code, automated testing, and observability. Transform
                                        deployment velocity from weeks to minutes while improving reliability.
                                    </p>
                                    <div className="text-sm text-text-secondary">
                                        Deliverables: CI/CD implementation, IaC templates, monitoring setup, runbooks and documentation,
                                        team training
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold mb-6">Let's Build Together</h2>
                    <p className="text-lg text-text-secondary mb-8">
                        Our services team is ready to partner with you on your infrastructure transformation. Schedule a consultation
                        to discuss your specific requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact" variant="primary">
                            Schedule Consultation
                        </Button>
                        <Button href="/case-studies" variant="secondary">
                            View Case Studies
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
