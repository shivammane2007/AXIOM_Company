'use client';

import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        inquiryType: 'sales',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form handling would go here
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! Our team will contact you within 24 hours.');
    };

    const offices = [
        {
            city: 'San Francisco',
            address: '123 Market Street, Suite 500',
            state: 'CA 94103',
            country: 'United States',
            phone: '+1 (415) 555-0100',
            email: 'sf@axiom-infra.com'
        },
        {
            city: 'New York',
            address: '350 Fifth Avenue, Floor 42',
            state: 'NY 10118',
            country: 'United States',
            phone: '+1 (212) 555-0200',
            email: 'ny@axiom-infra.com'
        },
        {
            city: 'London',
            address: '1 Canada Square, Level 30',
            state: 'E14 5AB',
            country: 'United Kingdom',
            phone: '+44 20 7946 0300',
            email: 'london@axiom-infra.com'
        },
        {
            city: 'Singapore',
            address: '1 Raffles Place, Tower 2, Level 50',
            state: '048616',
            country: 'Singapore',
            phone: '+65 6789 0400',
            email: 'sg@axiom-infra.com'
        }
    ];

    return (
        <>
            {/* Header */}
            <Section className="pt-32 pb-16">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                        Let's Build <span className="text-accent-emerald">Together</span>
                    </h1>
                    <p className="text-xl text-text-secondary leading-relaxed">
                        Whether you're exploring infrastructure modernization, evaluating our platform, or ready to migrate—our
                        team is here to help. Schedule a consultation or reach out for partnership opportunities.
                    </p>
                </div>
            </Section>

            {/* Contact Form */}
            <Section background="surface">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-heading font-bold mb-6">Enterprise Contact Form</h2>
                        <p className="text-text-secondary mb-8">
                            Fill out the form and our solutions team will respond within 24 hours. For immediate assistance,
                            call our 24/7 support line at +1 (800) 555-AXIOM.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block font-semibold mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg focus:outline-none focus:ring-2 focus:ring-accent-amber"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block font-semibold mb-2">Business Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg focus:outline-none focus:ring-2 focus:ring-accent-amber"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="block font-semibold mb-2">Company Name *</label>
                                <input
                                    type="text"
                                    id="company"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg focus:outline-none focus:ring-2 focus:ring-accent-amber"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>

                            <div>
                                <label htmlFor="inquiryType" className="block font-semibold mb-2">Inquiry Type *</label>
                                <select
                                    id="inquiryType"
                                    className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg focus:outline-none focus:ring-2 focus:ring-accent-amber"
                                    value={formData.inquiryType}
                                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                                >
                                    <option value="sales">Sales Inquiry</option>
                                    <option value="partnership">Partnership Opportunity</option>
                                    <option value="support">Technical Support</option>
                                    <option value="careers">Careers</option>
                                    <option value="press">Press & Media</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block font-semibold mb-2">Message *</label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg focus:outline-none focus:ring-2 focus:ring-accent-amber resize-none"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell us about your infrastructure needs, challenges, or goals..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn-primary w-full"
                            >
                                Submit Inquiry
                            </button>

                            <p className="text-xs text-text-secondary">
                                By submitting this form, you agree to our Privacy Policy and Terms of Service.
                                We will never share your information with third parties.
                            </p>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <Card>
                            <h3 className="text-xl font-heading font-semibold mb-4">Sales Inquiries</h3>
                            <p className="text-text-secondary mb-4">
                                Speak with our solutions team about enterprise pricing, custom deployments, or migration planning.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-start space-x-2">
                                    <span className="text-accent-amber">📞</span>
                                    <span>+1 (800) 555-2500 (24/7)</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-accent-amber">✉️</span>
                                    <span>sales@axiom-infra.com</span>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-xl font-heading font-semibold mb-4">Partnership Opportunities</h3>
                            <p className="text-text-secondary mb-4">
                                Interested in becoming a technology partner, reseller, or systems integrator? Let's collaborate.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-start space-x-2">
                                    <span className="text-accent-emerald">🤝</span>
                                    <span>partnerships@axiom-infra.com</span>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-xl font-heading font-semibold mb-4">Technical Support</h3>
                            <p className="text-text-secondary mb-4">
                                Existing customers: Access 24/7 support through your customer portal or call the priority support line.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-start space-x-2">
                                    <span className="text-accent-amber">🛠️</span>
                                    <span>support@axiom-infra.com</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-accent-amber">🔐</span>
                                    <a href="#" className="text-accent-emerald hover:underline">Customer Portal Login</a>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Global Offices */}
            <Section>
                <h2 className="text-4xl font-heading font-bold mb-12 text-center">Global Offices</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offices.map((office) => (
                        <Card key={office.city}>
                            <h3 className="text-xl font-heading font-semibold mb-3">{office.city}</h3>
                            <div className="text-sm text-text-secondary space-y-2">
                                <p>{office.address}</p>
                                <p>{office.state}</p>
                                <p>{office.country}</p>
                                <p className="pt-2 border-t border-light-border dark:border-dark-border mt-3">
                                    {office.phone}
                                </p>
                                <p className="text-accent-emerald">{office.email}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Support Information */}
            <Section background="surface">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold mb-12 text-center">Support & Resources</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="text-center">
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="font-heading font-semibold mb-2">Documentation</h3>
                            <p className="text-sm text-text-secondary mb-4">
                                Comprehensive guides, API references, and tutorials
                            </p>
                            <a href="#" className="text-accent-emerald hover:underline text-sm">
                                View Docs →
                            </a>
                        </Card>
                        <Card className="text-center">
                            <div className="text-4xl mb-4">💬</div>
                            <h3 className="font-heading font-semibold mb-2">Community Forum</h3>
                            <p className="text-sm text-text-secondary mb-4">
                                Connect with developers and get help from the community
                            </p>
                            <a href="#" className="text-accent-emerald hover:underline text-sm">
                                Join Forum →
                            </a>
                        </Card>
                        <Card className="text-center">
                            <div className="text-4xl mb-4">🎓</div>
                            <h3 className="font-heading font-semibold mb-2">Training</h3>
                            <p className="text-sm text-text-secondary mb-4">
                                Live workshops and certification programs
                            </p>
                            <a href="#" className="text-accent-emerald hover:underline text-sm">
                                Browse Courses →
                            </a>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Legal & Compliance */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold mb-6">Legal & Compliance</h2>
                    <p className="text-lg text-text-secondary mb-8">
                        For legal inquiries, compliance documentation, or security-related questions, contact our dedicated teams.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <h3 className="font-heading font-semibold mb-3">Legal Department</h3>
                            <p className="text-sm text-text-secondary mb-3">
                                Contract negotiations, terms of service, privacy policy, data processing agreements
                            </p>
                            <p className="text-sm text-accent-emerald">legal@axiom-infra.com</p>
                        </Card>
                        <Card>
                            <h3 className="font-heading font-semibold mb-3">Compliance Team</h3>
                            <p className="text-sm text-text-secondary mb-3">
                                SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR compliance documentation and audits
                            </p>
                            <p className="text-sm text-accent-emerald">compliance@axiom-infra.com</p>
                        </Card>
                        <Card>
                            <h3 className="font-heading font-semibold mb-3">Security Response</h3>
                            <p className="text-sm text-text-secondary mb-3">
                                Report security vulnerabilities, request penetration test reports
                            </p>
                            <p className="text-sm text-accent-emerald">security@axiom-infra.com</p>
                        </Card>
                        <Card>
                            <h3 className="font-heading font-semibold mb-3">Press & Media</h3>
                            <p className="text-sm text-text-secondary mb-3">
                                Press releases, media inquiries, analyst relations, speaking opportunities
                            </p>
                            <p className="text-sm text-accent-emerald">press@axiom-infra.com</p>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <Section background="surface">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-lg text-text-secondary mb-8">
                        Join 500+ enterprises who trust AXIOM INFRASTRUCTURE for their most critical workloads.
                        Start your transformation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="#" variant="primary">
                            Schedule Demo
                        </Button>
                        <Button href="/about" variant="secondary">
                            Learn More
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
