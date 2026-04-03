import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
    title: 'Technology & Engineering - AXIOM INFRASTRUCTURE',
    description: 'Deep dive into our technology stack, architecture philosophy, and engineering principles.',
};

export default function TechnologyPage() {
    return (
        <>
            {/* Header */}
            <Section className="pt-32 pb-16">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                        Technology That <span className="text-accent-amber">Powers Giants</span>
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        From distributed systems to database internals, our engineering team obsesses over every microsecond.
                        Here's a transparent look at the technology stack and principles that enable 99.99% uptime at global scale.
                    </p>
                </div>
            </Section>

            {/* Tech Stack */}
            <Section background="surface">
                <h2 className="text-4xl font-heading font-bold mb-12">Technology Stack</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Core Infrastructure</h3>
                        <ul className="text-text-secondary space-y-2 text-sm">
                            <li><strong>Compute:</strong> Kubernetes, containerd, Firecracker microVMs</li>
                            <li><strong>Orchestration:</strong> Custom scheduler on top of K8s</li>
                            <li><strong>Networking:</strong> Cilium with eBPF, DPDK for packet processing</li>
                            <li><strong>Storage:</strong> Ceph distributed storage, NVMe over Fabrics</li>
                        </ul>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Data Layer</h3>
                        <ul className="text-text-secondary space-y-2 text-sm">
                            <li><strong>Databases:</strong> PostgreSQL, CockroachDB, Redis Cluster</li>
                            <li><strong>Time-Series:</strong> InfluxDB, TimescaleDB</li>
                            <li><strong>Streaming:</strong> Apache Kafka, Redpanda</li>
                            <li><strong>Analytics:</strong> ClickHouse, Apache Druid</li>
                        </ul>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Observability</h3>
                        <ul className="text-text-secondary space-y-2 text-sm">
                            <li><strong>Metrics:</strong> Prometheus, Thanos, Grafana</li>
                            <li><strong>Logging:</strong> Loki, ElasticSearch</li>
                            <li><strong>Tracing:</strong> Jaeger, OpenTelemetry</li>
                            <li><strong>APM:</strong> Custom distributed tracing system</li>
                        </ul>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Security</h3>
                        <ul className="text-text-secondary space-y-2 text-sm">
                            <li><strong>Encryption:</strong> AES-256, TLS 1.3, mTLS everywhere</li>
                            <li><strong>Auth:</strong> OAuth 2.0, OIDC, SAML 2.0</li>
                            <li><strong>Secrets:</strong> HashiCorp Vault with HSM backend</li>
                            <li><strong>Network:</strong> Istio service mesh, network policies</li>
                        </ul>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Languages & Frameworks</h3>
                        <ul className="text-text-secondary space-y-2 text-sm">
                            <li><strong>Backend:</strong> Go, Rust, Python</li>
                            <li><strong>Frontend:</strong> TypeScript, React, Next.js</li>
                            <li><strong>IaC:</strong> Terraform, Pulumi, Ansible</li>
                            <li><strong>Testing:</strong> pytest, Go testing, k6 for load tests</li>
                        </ul>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">CI/CD & GitOps</h3>
                        <ul className="text-text-secondary space-y-2 text-sm">
                            <li><strong>CI:</strong> GitHub Actions, custom build system</li>
                            <li><strong>CD:</strong> Argo CD, Flux for GitOps</li>
                            <li><strong>Artifact Storage:</strong> Harbor container registry</li>
                            <li><strong>Deployment:</strong> Blue-green, canary, progressive delivery</li>
                        </ul>
                    </Card>
                </div>
            </Section>

            {/* Architecture Philosophy */}
            <Section>
                <h2 className="text-4xl font-heading font-bold mb-12">Architecture Philosophy</h2>
                <div className="space-y-8">
                    <Card>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-2xl font-heading font-semibold mb-3 text-accent-amber">Distributed by Default</h3>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-text-secondary mb-4 leading-relaxed">
                                    Every service is designed to run across multiple availability zones and regions. We use consensus
                                    algorithms (Raft, Paxos) for coordination and replicate data across geographically distributed
                                    clusters. Single points of failure are architectural bugs.
                                </p>
                                <p className="text-text-secondary leading-relaxed">
                                    Our distributed databases maintain strong consistency through multi-version concurrency control
                                    and distributed transactions. Network partitions are handled gracefully with automatic failover
                                    and data reconciliation.
                                </p>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-2xl font-heading font-semibold mb-3 text-accent-emerald">Microservices at Scale</h3>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-text-secondary mb-4 leading-relaxed">
                                    Our platform comprises 500+ microservices, each owned by a specific team. Services communicate
                                    via gRPC for internal calls and RESTful APIs for external interfaces. Service mesh (Istio) handles
                                    routing, load balancing, circuit breaking, and mutual TLS.
                                </p>
                                <p className="text-text-secondary leading-relaxed">
                                    We enforce strict API contracts with versioning and backward compatibility guarantees. Every service
                                    exposes health checks, metrics, and distributed tracing. Deployment is fully automated with progressive
                                    rollouts monitored by SLI/SLO metrics.
                                </p>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-2xl font-heading font-semibold mb-3 text-accent-amber">Event-Driven Architecture</h3>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-text-secondary mb-4 leading-relaxed">
                                    State changes propagate through event streams (Kafka), enabling real-time processing and eventual
                                    consistency. Services subscribe to events rather than making synchronous calls, reducing coupling
                                    and improving resilience.
                                </p>
                                <p className="text-text-secondary leading-relaxed">
                                    Event sourcing provides complete audit trails and enables time-travel debugging. CQRS (Command Query
                                    Responsibility Segregation) optimizes read and write paths independently. Stream processing with
                                    exactly-once semantics ensures data integrity.
                                </p>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-2xl font-heading font-semibold mb-3 text-accent-emerald">Immutable Infrastructure</h3>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-text-secondary mb-4 leading-relaxed">
                                    Infrastructure is declared in code (Terraform, Pulumi) and never modified in place. Changes trigger
                                    new deployments with old versions kept for instant rollback. Container images are immutable and
                                    cryptographically signed.
                                </p>
                                <p className="text-text-secondary leading-relaxed">
                                    This eliminates configuration drift, makes reproducibility trivial, and enables safe experimentation.
                                    Disaster recovery is simplified—spin up infrastructure from  code in any region within minutes.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </Section>

            {/* Security & Compliance */}
            <Section background="surface">
                <h2 className="text-4xl font-heading font-bold mb-6">Security & Compliance</h2>
                <p className="text-lg text-text-secondary mb-12 max-w-3xl">
                    Security isn't bolted on—it's the foundation. Every design decision considers security implications first.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-heading font-semibold mb-6">Security Measures</h3>
                        <div className="space-y-4">
                            <Card>
                                <h4 className="font-heading font-semibold mb-2">Zero-Trust Networking</h4>
                                <p className="text-sm text-text-secondary">
                                    No implicit trust between services. Every request authenticated and authorized. Principle of least
                                    privilege enforced through network policies and RBAC.
                                </p>
                            </Card>
                            <Card>
                                <h4 className="font-heading font-semibold mb-2">Encryption Everywhere</h4>
                                <p className="text-sm text-text-secondary">
                                    Data encrypted at rest (AES-256) and in transit (TLS 1.3). Database-level encryption with per-tenant
                                    keys. Hardware security modules (HSM) for key management.
                                </p>
                            </Card>
                            <Card>
                                <h4 className="font-heading font-semibold mb-2">Vulnerability Management</h4>
                                <p className="text-sm text-text-secondary">
                                    Automated scanning of container images and dependencies. Patch management with 24-hour SLA for critical
                                    CVEs. Regular penetration testing by external firms.
                                </p>
                            </Card>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-heading font-semibold mb-6">Compliance Certifications</h3>
                        <div className="space-y-4">
                            <Card>
                                <h4 className="font-heading font-semibold mb-2">SOC 2 Type II</h4>
                                <p className="text-sm text-text-secondary">
                                    Audited annually for security, availability, processing integrity, confidentiality, and privacy.
                                    Reports available to customers under NDA.
                                </p>
                            </Card>
                            <Card>
                                <h4 className="font-heading font-semibold mb-2">ISO 27001:2013</h4>
                                <p className="text-sm text-text-secondary">
                                    Information security management system certified globally. Covers risk management, asset management,
                                    access control, and incident response.
                                </p>
                            </Card>
                            <Card>
                                <h4 className="font-heading font-semibold mb-2">HIPAA & PCI DSS</h4>
                                <p className="text-sm text-text-secondary">
                                    HIPAA-compliant infrastructure for healthcare data. PCI DSS Level 1 for payment card processing.
                                    Dedicated compliance team and automated monitoring.
                                </p>
                            </Card>
                            <Card>
                                <h4 className="font-heading font-semibold mb-2">GDPR Ready</h4>
                                <p className="text-sm text-text-secondary">
                                    EU data residency, right to deletion, data portability, breach notification procedures. DPA available
                                    for EU customers.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Performance Engineering */}
            <Section>
                <h2 className="text-4xl font-heading font-bold mb-12">Performance Engineering</h2>
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-heading font-semibold mb-6">Latency Optimization</h3>
                        <p className="text-text-secondary mb-6 leading-relaxed">
                            We measure latency in microseconds and optimize for the 99.9th percentile (P999). Tail latency matters
                            because your slowest requests define user experience.
                        </p>
                        <div className="space-y-3">
                            <div className="p-4 bg-light-surface dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-heading font-semibold">API Response Time (P50)</span>
                                    <span className="text-accent-amber font-bold">&lt;5ms</span>
                                </div>
                                <div className="text-sm text-text-secondary">Median latency for API calls</div>
                            </div>
                            <div className="p-4 bg-light-surface dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-heading font-semibold">API Response Time (P99)</span>
                                    <span className="text-accent-emerald font-bold">&lt;50ms</span>
                                </div>
                                <div className="text-sm text-text-secondary">99th percentile latency</div>
                            </div>
                            <div className="p-4 bg-light-surface dark:bg-dark-surface rounded-lg border border-light-border dark:border-dark-border">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-heading font-semibold">Database Query (P99)</span>
                                    <span className="text-accent-amber font-bold">&lt;10ms</span>
                                </div>
                                <div className="text-sm text-text-secondary">Distributed SQL queries</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-heading font-semibold mb-6">Scalability Approach</h3>
                        <p className="text-text-secondary mb-6 leading-relaxed">
                            Built to scale horizontally from day one. Add capacity by adding nodes—no architectural rewrites required.
                        </p>
                        <Card className="mb-4">
                            <h4 className="font-heading font-semibold mb-2">Auto-Scaling</h4>
                            <p className="text-sm text-text-secondary">
                                Scales based on CPU, memory, request rate, or custom metrics. Predictive scaling uses ML to anticipate
                                traffic spikes. Scales from zero to millions of requests in seconds.
                            </p>
                        </Card>
                        <Card className="mb-4">
                            <h4 className="font-heading font-semibold mb-2">Load Balancing</h4>
                            <p className="text-sm text-text-secondary">
                                Multi-tier load balancing with global anycast, regional load distribution, and pod-to-pod intelligent
                                routing. Automatic health checks and circuit breaking.
                            </p>
                        </Card>
                        <Card>
                            <h4 className="font-heading font-semibold mb-2">Caching Strategy</h4>
                            <p className="text-sm text-text-secondary">
                                Multi-layer caching: CDN edge cache, Redis cluster, application-level cache. Cache invalidation through
                                event streams. 95%+ cache hit rates.
                            </p>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* DevOps & Automation */}
            <Section background="surface">
                <h2 className="text-4xl font-heading font-bold mb-12">DevOps & Automation</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-4">Continuous Integration</h3>
                        <ul className="text-sm text-text-secondary space-y-2">
                            <li>• Automated testing on every commit</li>
                            <li>• Unit tests, integration tests, E2E tests</li>
                            <li>• Code coverage minimum 80%</li>
                            <li>• Security scanning and lint checks</li>
                            <li>• Build artifacts in &lt;5 minutes</li>
                        </ul>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-4">Continuous Deployment</h3>
                        <ul className="text-sm text-text-secondary space-y-2">
                            <li>• GitOps workflow with Argo CD</li>
                            <li>• Progressive delivery (canary, blue-green)</li>
                            <li>• Automated rollback on SLO violation</li>
                            <li>• Deploy to production 50+ times/day</li>
                            <li>• Mean time to deployment: 12 minutes</li>
                        </ul>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-4">Infrastructure as Code</h3>
                        <ul className="text-sm text-text-secondary space-y-2">
                            <li>• 100% of infrastructure in Git</li>
                            <li>• Terraform for cloud resources</li>
                            <li>• Helm charts for Kubernetes</li>
                            <li>• Automated drift detection</li>
                            <li>• Disaster recovery in &lt;30 minutes</li>
                        </ul>
                    </Card>
                </div>
            </Section>

            {/* Engineering Culture */}
            <Section>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-heading font-bold mb-6">Engineering Culture</h2>
                    <p className="text-lg text-text-secondary mb-12 leading-relaxed">
                        We hire the best engineers and give them autonomy, ownership, and the tools to excel. Innovation happens
                        when smart people have freedom to experiment.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        <Card>
                            <h3 className="font-heading font-semibold mb-2">Blameless Postmortems</h3>
                            <p className="text-sm text-text-secondary">
                                Every incident gets a detailed postmortem focused on learning, not blame. We share failures publicly
                                to help the entire industry improve.
                            </p>
                        </Card>
                        <Card>
                            <h3 className="font-heading font-semibold mb-2">20% Time for Innovation</h3>
                            <p className="text-sm text-text-secondary">
                                Engineers spend one day per week on projects outside their core responsibilities. Many production
                                features started as 20% projects.
                            </p>
                        </Card>
                        <Card>
                            <h3 className="font-heading font-semibold mb-2">Open Source First</h3>
                            <p className="text-sm text-text-secondary">
                                We contribute to and sponsor open source projects we depend on. Engineers are encouraged to open source
                                internal tools that benefit the community.
                            </p>
                        </Card>
                        <Card>
                            <h3 className="font-heading font-semibold mb-2">Continuous Learning</h3>
                            <p className="text-sm text-text-secondary">
                                $5,000 annual learning budget per engineer. Conference attendance, online courses, books, and certifications
                                fully funded.
                            </p>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section background="surface">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold mb-6">Join Our Engineering Team</h2>
                    <p className="text-lg text-text-secondary mb-8">
                        We're always looking for talented engineers who want to work on infrastructure that powers the world's
                        most demanding applications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/careers" variant="primary">
                            View Open Positions
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
