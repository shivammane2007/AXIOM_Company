import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
    title: 'Products & Platforms - AXIOM INFRASTRUCTURE',
    description: 'Explore our enterprise-grade infrastructure products and platforms designed for mission-critical workloads.',
};

export default function ProductsPage() {
    const products = [
        {
            name: 'Core Infrastructure Platform',
            category: 'Compute & Storage',
            description: 'Distributed computing infrastructure that scales from single instances to global deployments. Purpose-built for workloads that demand consistent performance and absolute reliability.',
            useCases: [
                'High-frequency trading systems',
                'Real-time analytics pipelines',
                'Microservices architectures',
                'Stateful applications'
            ],
            highlights: [
                'Auto-scaling with pod-to-pod sub-ms networking',
                'NVMe SSDs with 5M IOPS per volume',
                'Kubernetes-native orchestration',
                '99.99% compute uptime SLA'
            ]
        },
        {
            name: 'Edge Network System',
            category: 'Edge Computing',
            description: 'Global edge computing network with 150+ locations providing sub-10ms latency to 95% of users. Deploy serverless functions, CDN, and compute workloads closer to your customers.',
            useCases: [
                'Content delivery and streaming',
                'IoT data processing',
                'Gaming and real-time applications',
                'Edge AI inference'
            ],
            highlights: [
                '150+ global edge locations',
                'Anycast routing for automatic failover',
                'WebAssembly and container support',
                'Real-time log streaming'
            ]
        },
        {
            name: 'Data Pipeline Engine',
            category: 'Data Processing',
            description: 'Real-time data processing platform capable of ingesting millions of events per second. Built on distributed stream processing with exactly-once delivery guarantees.',
            useCases: [
                'Clickstream analytics',
                'Financial transaction processing',
                'Log aggregation and monitoring',
                'Machine learning feature pipelines'
            ],
            highlights: [
                'Schema evolution without downtime',
                'Time-series optimized storage',
                'SQL-like query interface',
                'Integration with Kafka, Kinesis, Pub/Sub'
            ]
        },
        {
            name: 'Security Fabric',
            category: 'Security & Compliance',
            description: 'Enterprise security layer providing zero-trust networking, DDoS protection, WAF, and automated compliance monitoring across your entire infrastructure.',
            useCases: [
                'Zero-trust network architecture',
                'PCI DSS compliance automation',
                'API security and rate limiting',
                'Threat detection and response'
            ],
            highlights: [
                'Automated security policy enforcement',
                'Real-time threat intelligence',
                'mTLS encryption everywhere',
                'SOC 2 Type II certified operations'
            ]
        },
        {
            name: 'Orchestration Hub',
            category: 'Automation',
            description: 'Infrastructure automation platform for provisioning, configuration management, and continuous deployment. Define your entire infrastructure as code and deploy with confidence.',
            useCases: [
                'Multi-cloud infrastructure management',
                'GitOps-driven deployments',
                'Disaster recovery automation',
                'Compliance as code'
            ],
            highlights: [
                'Terraform/Pulumi compatible',
                'Drift detection and auto-remediation',
                'Policy-as-code enforcement',
                'Rollback to any previous state'
            ]
        },
        {
            name: 'Analytics Platform',
            category: 'Business Intelligence',
            description: 'Petabyte-scale data warehouse with SQL interface, designed for analytical workloads. Query billions of rows in seconds with automatic query optimization.',
            useCases: [
                'Business intelligence dashboards',
                'Customer behavior analysis',
                'Financial reporting and forecasting',
                'Machine learning model training'
            ],
            highlights: [
                'Columnar storage with compression',
                'Automatic materialized views',
                'Resource isolation per workload',
                'Integration with BI tools (Tableau, Looker)'
            ]
        }
    ];

    return (
        <>
            {/* Header */}
            <Section className="pt-32 pb-16">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                        Products Built for <span className="text-accent-amber">Mission-Critical</span> Workloads
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        Our platform isn't for hosting blogs. It's engineered for systems where milliseconds cost millions,
                        where downtime isn't an option, and where scale happens overnight. From compute to analytics, every
                        product is battle-tested on the world's most demanding workloads.
                    </p>
                </div>
            </Section>

            {/* Products Grid */}
            <Section background="surface">
                <div className="space-y-16">
                    {products.map((product, index) => (
                        <Card key={product.name} className="hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="text-sm text-accent-emerald font-semibold mb-2">{product.category}</div>
                                    <h2 className="text-3xl font-heading font-bold mb-3">{product.name}</h2>
                                </div>
                                <div className="text-4xl font-heading font-bold text-text-secondary/20">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>

                            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-heading font-semibold mb-3">Use Cases</h3>
                                    <ul className="space-y-2">
                                        {product.useCases.map((useCase) => (
                                            <li key={useCase} className="flex items-start space-x-2">
                                                <span className="text-accent-amber mt-1">•</span>
                                                <span className="text-text-secondary">{useCase}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold mb-3">Technical Highlights</h3>
                                    <ul className="space-y-2">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="flex items-start space-x-2">
                                                <span className="text-accent-emerald mt-1">✓</span>
                                                <span className="text-text-secondary">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-light-border dark:border-dark-border">
                                <div className="flex space-x-4">
                                    <Button href="/contact" variant="primary">
                                        Request Demo
                                    </Button>
                                    <Button href="#" variant="secondary">
                                        View Documentation
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Platform Overview */}
            <Section>
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl font-heading font-bold mb-6">Complete Platform Integration</h2>
                    <p className="text-lg text-text-secondary">
                        All products work together seamlessly through unified APIs, shared authentication, and cross-platform
                        monitoring. Deploy your entire stack with a single command.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Unified Control Plane</h3>
                        <p className="text-text-secondary">
                            Manage all products from a single dashboard. Role-based access control, audit logs, and unified
                            billing across your entire infrastructure.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">API-First Design</h3>
                        <p className="text-text-secondary">
                            Every feature accessible via REST and GraphQL APIs. Client libraries in 10+ languages.
                            Infrastructure as code templates included.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Cross-Product Observability</h3>
                        <p className="text-text-secondary">
                            Unified metrics, logs, and traces across all products. Real-time alerting, anomaly detection,
                            and root cause analysis powered by ML.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* Performance Stats */}
            <Section background="surface">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold mb-12">Platform Performance</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-5xl font-heading font-bold text-accent-amber mb-2">10M+</div>
                            <div className="text-sm text-text-secondary">Requests/Second</div>
                        </div>
                        <div>
                            <div className="text-5xl font-heading font-bold text-accent-emerald mb-2">&lt;1ms</div>
                            <div className="text-sm text-text-secondary">P99 Latency</div>
                        </div>
                        <div>
                            <div className="text-5xl font-heading font-bold text-accent-amber mb-2">50PB+</div>
                            <div className="text-sm text-text-secondary">Data Daily</div>
                        </div>
                        <div>
                            <div className="text-5xl font-heading font-bold text-accent-emerald mb-2">99.99%</div>
                            <div className="text-sm text-text-secondary">Uptime SLA</div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold mb-6">Ready to Deploy?</h2>
                    <p className="text-lg text-text-secondary mb-8">
                        Start with our free tier or schedule a demo to see how AXIOM can transform your infrastructure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact" variant="primary">
                            Schedule Demo
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
