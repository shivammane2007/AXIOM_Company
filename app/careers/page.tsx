import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
    title: 'Careers & Culture - AXIOM INFRASTRUCTURE',
    description: 'Join our team and help build the infrastructure that powers tomorrow\'s most important applications.',
};

export default function CareersPage() {
    const jobListings = [
        {
            title: 'Senior Site Reliability Engineer',
            department: 'Engineering',
            location: 'San Francisco, CA / Remote',
            level: 'Senior (L5)',
            responsibilities: [
                'Design and maintain distributed systems at global scale',
                'Build automation for deployment, monitoring, and incident response',
                'On-call rotation for production infrastructure',
                'Mentor junior engineers and drive technical excellence'
            ]
        },
        {
            title: 'Staff Software Engineer - Distributed Systems',
            department: 'Engineering',
            location: 'New York, NY / Remote',
            level: 'Staff (L6)',
            responsibilities: [
                'Architect next-generation infrastructure components',
                'Lead cross-team technical initiatives',
                'Drive performance optimization across the platform',
                'Contribute to open source projects'
            ]
        },
        {
            title: 'Security Engineer',
            department: 'Security',
            location: 'Austin, TX / Remote',
            level: 'Mid-Senior (L4-L5)',
            responsibilities: [
                'Implement zero-trust security architecture',
                'Conduct security audits and penetration testing',
                'Build automated compliance monitoring systems',
                'Respond to security incidents and vulnerabilities'
            ]
        },
        {
            title: 'Machine Learning Infrastructure Engineer',
            department: 'ML Platform',
            location: 'Seattle, WA / Remote',
            level: 'Senior (L5)',
            responsibilities: [
                'Build GPU cluster orchestration systems',
                'Optimize ML training and inference pipelines',
                'Develop MLOps tooling and platforms',
                'Support data science teams with infrastructure'
            ]
        },
        {
            title: 'Product Manager - Infrastructure Platform',
            department: 'Product',
            location: 'San Francisco, CA',
            level: 'Senior (L5)',
            responsibilities: [
                'Define product strategy and roadmap',
                'Work with engineering to prioritize features',
                'Engage with customers to understand requirements',
                'Drive product launches and adoption'
            ]
        },
        {
            title: 'Technical Writer',
            department: 'Documentation',
            location: 'Remote',
            level: 'Mid (L4)',
            responsibilities: [
                'Create comprehensive API documentation',
                'Write tutorials and getting-started guides',
                'Maintain technical blog and case studies',
                'Collaborate with engineers on documentation'
            ]
        }
    ];

    return (
        <>
            {/* Header */}
            <Section className="pt-32 pb-16">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                        Build Infrastructure That <span className="text-accent-amber">Matters</span>
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        Join a team of world-class engineers building the infrastructure that powers hospitals, banks, and the
                        applications that billions of people depend on every day. Your work will have real impact.
                    </p>
                </div>
            </Section>

            {/* Engineering Culture */}
            <Section background="surface">
                <h2 className="text-4xl font-heading font-bold mb-12">Engineering Culture</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Ownership & Autonomy</h3>
                        <p className="text-text-secondary">
                            You own your projects from conception to production. We hire smart people and trust them to make
                            decisions. Minimal bureaucracy, maximum impact.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Technical Excellence</h3>
                        <p className="text-text-secondary">
                            We obsess over performance, reliability, and code quality. Your pull requests will be reviewed by
                            engineers who care deeply about craft. Learn from the best.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Impact at Scale</h3>
                        <p className="text-text-secondary">
                            Your code will run on systems processing 50PB+ of data daily, serving millions of requests per second.
                            See the impact of your work immediately.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Work-Life Balance</h3>
                        <p className="text-text-secondary">
                            We build reliable systems so you don't get paged at 3 AM. Reasonable on-call rotations, flexible hours,
                            and unlimited PTO (actually encouraged).
                        </p>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Remote-First</h3>
                        <p className="text-text-secondary">
                            Work from anywhere. We have offices in SF, NY, Seattle, Austin, and London, but 60% of our team is
                            fully remote. Async communication is our default.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="text-xl font-heading font-semibold mb-3">Diversity Matters</h3>
                        <p className="text-text-secondary">
                            40 countries, 60 languages, every background imaginable. Diverse teams build better products. We actively
                            work to create an inclusive environment.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* Work Ethics */}
            <Section>
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-4xl font-heading font-bold mb-6">How We Work</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-heading font-semibold mb-2">Blameless Culture</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    Mistakes happen. We learn from them through detailed postmortems focused on systemic improvements,
                                    not finger-pointing. Psychological safety enables innovation.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-semibold mb-2">Data-Driven Decisions</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    Opinions backed by metrics. We instrument everything, run A/B tests, and let data guide our
                                    technical choices. Intuition is valuable, but measurement is truth.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-semibold mb-2">Documentation First</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    Write the docs before the code. Design docs for big features. Architecture decision records for
                                    why we made choices. Knowledge sharing scales teams.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-semibold mb-2">Progressive Delivery</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    Ship small changes frequently. Canary deployments, feature flags, and automated rollbacks mean
                                    we can deploy to production 50+ times per day with confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-heading font-bold mb-6">Our Hiring Philosophy</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-heading font-semibold mb-2">T-Shaped Engineers</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    Deep expertise in one area, broad knowledge across the stack. We value generalists who can learn
                                    quickly over specialists who can't adapt.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-semibold mb-2">Problem Solvers</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    We care more about how you approach problems than specific technologies you've used. Show us your
                                    thinking process, not just the answer.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-semibold mb-2">Communication Skills</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    Writing code is 20% of the job. The rest is communicating with teammates, documenting decisions,
                                    and explaining technical concepts to non-technical stakeholders.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-heading font-semibold mb-2">No Ping-Pong Tables</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    We compete on compensation, growth opportunities, and meaningful work—not office perks. Though
                                    we do have good coffee.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Benefits */}
            <Section background="surface">
                <h2 className="text-4xl font-heading font-bold mb-12 text-center">Benefits & Perks</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <h3 className="font-heading font-semibold mb-2">Competitive Compensation</h3>
                        <p className="text-sm text-text-secondary">
                            Top-of-market salaries + equity. Annual refresh grants. Transparent compensation bands.
                            We publish salary ranges in job postings.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="font-heading font-semibold mb-2">Health & Wellness</h3>
                        <p className="text-sm text-text-secondary">
                            100% company-paid health, dental, vision for you and dependents. Mental health support.
                            $500/month wellness stipend.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="font-heading font-semibold mb-2">Unlimited PTO</h3>
                        <p className="text-sm text-text-secondary">
                            Actually unlimited, actually encouraged. Minimum 3 weeks recommended. Company-wide shutdown weeks.
                            Sabbaticals after 4 years.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="font-heading font-semibold mb-2">Learning & Development</h3>
                        <p className="text-sm text-text-secondary">
                            $5,000/year learning budget. Conference attendance fully paid. Internal training programs.
                            Mentorship from senior engineers.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="font-heading font-semibold mb-2">Remote Work Setup</h3>
                        <p className="text-sm text-text-secondary">
                            $2,000 home office stipend. Latest MacBook Pro or Linux workstation. Coworking space reimbursement.
                            High-speed internet allowance.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="font-heading font-semibold mb-2">Parental Leave</h3>
                        <p className="text-sm text-text-secondary">
                            20 weeks fully paid for all parents. Flexible return-to-work schedule. Childcare stipend.
                            Parenting support groups.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="font-heading font-semibold mb-2">401(k) Matching</h3>
                        <p className="text-sm text-text-secondary">
                            6% match, immediate vesting. Financial planning services. Investment advisory included.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="font-heading font-semibold mb-2">Relocation Assistance</h3>
                        <p className="text-sm text-text-secondary">
                            Up to $15,000 relocation package. Visa sponsorship available. Immigration attorney support.
                        </p>
                    </Card>
                    <Card>
                        <h3 className="font-heading font-semibold mb-2">Equipment & Software</h3>
                        <p className="text-sm text-text-secondary">
                            Any tools you need to be productive. Cloud resources for side projects. Open source contribution time.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* Career Growth */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold mb-12 text-center">Career Growth Paths</h2>
                    <p className="text-lg text-text-secondary mb-12 text-center">
                        We support both individual contributor (IC) and management tracks. You choose your path.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <h3 className="text-2xl font-heading font-semibold mb-6">Technical Track</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-amber/20 flex items-center justify-center font-heading font-bold">L3</div>
                                    <div>
                                        <div className="font-semibold">Software Engineer</div>
                                        <div className="text-sm text-text-secondary">Feature development, code reviews</div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-amber/30 flex items-center justify-center font-heading font-bold">L4</div>
                                    <div>
                                        <div className="font-semibold">Senior Software Engineer</div>
                                        <div className="text-sm text-text-secondary">Own components, mentor juniors</div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-amber/40 flex items-center justify-center font-heading font-bold">L5</div>
                                    <div>
                                        <div className="font-semibold">Staff Engineer</div>
                                        <div className="text-sm text-text-secondary">Cross-team technical leadership</div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-amber/50 flex items-center justify-center font-heading font-bold">L6</div>
                                    <div>
                                        <div className="font-semibold">Principal Engineer</div>
                                        <div className="text-sm text-text-secondary">Company-wide technical strategy</div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-amber flex items-center justify-center font-heading font-bold text-black">L7</div>
                                    <div>
                                        <div className="font-semibold">Distinguished Engineer</div>
                                        <div className="text-sm text-text-secondary">Industry-recognized expert</div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <h3 className="text-2xl font-heading font-semibold mb-6">Management Track</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-emerald/30 flex items-center justify-center font-heading font-bold">M4</div>
                                    <div>
                                        <div className="font-semibold">Engineering Manager</div>
                                        <div className="text-sm text-text-secondary">Lead 5-8 engineer team</div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-emerald/40 flex items-center justify-center font-heading font-bold">M5</div>
                                    <div>
                                        <div className="font-semibold">Senior Engineering Manager</div>
                                        <div className="text-sm text-text-secondary">Multiple teams, 15-25 people</div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-emerald/50 flex items-center justify-center font-heading font-bold">M6</div>
                                    <div>
                                        <div className="font-semibold">Director of Engineering</div>
                                        <div className="text-sm text-text-secondary">Department-level leadership</div>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-emerald flex items-center justify-center font-heading font-bold text-black">M7</div>
                                    <div>
                                        <div className="font-semibold">VP of Engineering</div>
                                        <div className="text-sm text-text-secondary">Division or product area</div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Job Listings */}
            <Section background="surface">
                <h2 className="text-4xl font-heading font-bold mb-12 text-center">Open Positions</h2>
                <div className="space-y-6">
                    {jobListings.map((job) => (
                        <Card key={job.title} className="hover:shadow-xl transition-shadow">
                            <div className="flex flex-col md:flex-row justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-heading font-semibold mb-2">{job.title}</h3>
                                    <div className="flex flex-wrap gap-3 text-sm">
                                        <span className="text-accent-amber">{job.department}</span>
                                        <span className="text-text-secondary">•</span>
                                        <span className="text-text-secondary">{job.location}</span>
                                        <span className="text-text-secondary">•</span>
                                        <span className="text-text-secondary">{job.level}</span>
                                    </div>
                                </div>
                                <Button href="/contact" variant="primary" className="mt-4 md:mt-0">
                                    Apply Now
                                </Button>
                            </div>
                            <div>
                                <h4 className="font-heading font-semibold mb-2">Key Responsibilities</h4>
                                <ul className="text-sm text-text-secondary space-y-1">
                                    {job.responsibilities.map((resp, idx) => (
                                        <li key={idx}>• {resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold mb-6">Ready to Join Us?</h2>
                    <p className="text-lg text-text-secondary mb-8">
                        If you're passionate about building infrastructure that matters, we'd love to hear from you.
                        Don't see a perfect match? Send us your resume anyway—we're always looking for exceptional talent.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact" variant="primary">
                            Submit Application
                        </Button>
                        <Button href="#" variant="secondary">
                            View All Openings
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
