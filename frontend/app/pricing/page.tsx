"use client";

import { motion } from "framer-motion";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles, Zap, Crown, ArrowRight } from "lucide-react";

const pricingTiers = [
    {
        name: "Free",
        description: "Perfect for trying out MCP-Council",
        price: "$0",
        period: "forever",
        icon: Sparkles,
        features: [
            "Up to 3 public API endpoints",
            "Basic MCP server generation",
            "Community support",
            "Standard deployment",
            "NPM package publishing",
            "MCP Registry listing",
        ],
        cta: "Get Started Free",
        popular: false,
        gradient: "from-muted/20 to-muted/5",
    },
    {
        name: "Pro",
        description: "For developers building production tools",
        price: "$29",
        period: "per month",
        icon: Zap,
        features: [
            "Unlimited public API endpoints",
            "Authenticated API support",
            "Priority deployment",
            "Advanced MCP features",
            "Custom domain support",
            "Priority support",
            "Analytics dashboard",
            "Auto-sync with API changes",
        ],
        cta: "Start Pro Trial",
        popular: true,
        gradient: "from-primary/20 to-primary/5",
    },
    {
        name: "Enterprise",
        description: "For teams and organizations",
        price: "Custom",
        period: "contact us",
        icon: Crown,
        features: [
            "Everything in Pro",
            "Dedicated infrastructure",
            "SLA guarantees",
            "Custom authentication flows",
            "White-label deployment",
            "Dedicated support engineer",
            "Custom integrations",
            "Team collaboration",
            "Advanced security",
        ],
        cta: "Contact Sales",
        popular: false,
        gradient: "from-secondary/20 to-secondary/5",
    },
];

const faqs = [
    {
        question: "What is a credit?",
        answer: "In Phase 3, we'll introduce a credit system where 1 credit = 1 MCP tool created. The Free tier will include monthly credits, while Pro and Enterprise offer unlimited tools.",
    },
    {
        question: "Can I upgrade or downgrade anytime?",
        answer: "Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the start of your next billing cycle.",
    },
    {
        question: "What happens to my deployed servers if I downgrade?",
        answer: "Your existing MCP servers remain deployed and functional. However, you won't be able to create new tools beyond your tier limit.",
    },
    {
        question: "Do you offer educational or nonprofit discounts?",
        answer: "Yes! We offer special pricing for students, educators, and nonprofit organizations. Contact us for details.",
    },
];

export default function PricingPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <div className="pt-32 pb-24">
                <div className="container mx-auto px-4">
                    {/* Hero */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center mb-20"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Simple, <span className="gradient-text">Transparent</span> Pricing
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Start free, scale as you grow. No hidden fees, no surprises.
                        </p>
                    </motion.div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
                        {pricingTiers.map((tier, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="relative"
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <Card
                                    className={`p-8 h-full ${tier.popular
                                            ? "glass-dark border-primary glow-primary"
                                            : "glass-dark border-primary/10"
                                        }`}
                                >
                                    <div
                                        className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${tier.gradient} mb-6`}
                                    >
                                        <tier.icon className="w-8 h-8 text-primary" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                                    <p className="text-muted-foreground mb-6">{tier.description}</p>

                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-bold">{tier.price}</span>
                                            <span className="text-muted-foreground">/{tier.period}</span>
                                        </div>
                                    </div>

                                    <Button
                                        className={`w-full mb-8 ${tier.popular ? "glow-primary" : ""
                                            }`}
                                        variant={tier.popular ? "default" : "outline"}
                                    >
                                        {tier.cta}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>

                                    <ul className="space-y-3">
                                        {tier.features.map((feature, featureIdx) => (
                                            <li key={featureIdx} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Phase Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto mb-24"
                    >
                        <Card className="glass p-8 border-accent/30 text-center">
                            <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-3">
                                Phase 1: Free for Everyone
                            </h3>
                            <p className="text-muted-foreground">
                                During our MVP phase, all features are completely free as we build
                                and refine the platform. Paid tiers will be introduced in Phase 3
                                with grandfather pricing for early adopters.
                            </p>
                        </Card>
                    </motion.div>

                    {/* FAQs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">
                                Frequently Asked <span className="gradient-text">Questions</span>
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-6">
                            {faqs.map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                >
                                    <Card className="glass-dark p-6 border-primary/10">
                                        <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                                        <p className="text-muted-foreground">{faq.answer}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
