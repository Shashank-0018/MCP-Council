"use client";

import { motion } from "framer-motion";
import {
    Zap,
    Lock,
    Boxes,
    Code2,
    Globe,
    Shield,
    Sparkles,
    RefreshCw
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
    {
        icon: Zap,
        title: "Full Automation",
        description: "Zero manual coding required. From API input to deployed server, everything is automated.",
        gradient: "from-primary/20 to-primary/5",
    },
    {
        icon: Code2,
        title: "Production Framework",
        description: "Built on battle-tested patterns from 47+ API endpoints. Enterprise-grade reliability.",
        gradient: "from-secondary/20 to-secondary/5",
    },
    {
        icon: Globe,
        title: "Multi-Platform Support",
        description: "Works seamlessly with Claude Desktop, Cursor AI, Gemini CLI, and more.",
        gradient: "from-accent/20 to-accent/5",
    },
    {
        icon: Lock,
        title: "Authenticated APIs",
        description: "Support for API keys, OAuth, and custom authentication methods (Coming in Phase 2).",
        gradient: "from-primary/20 to-primary/5",
    },
    {
        icon: Boxes,
        title: "NPM Package Generation",
        description: "Automatically publish to NPM with versioning and documentation.",
        gradient: "from-secondary/20 to-secondary/5",
    },
    {
        icon: Shield,
        title: "MCP Registry Integration",
        description: "Instant registration in the official Model Context Protocol Registry.",
        gradient: "from-accent/20 to-accent/5",
    },
    {
        icon: Sparkles,
        title: "AI-Powered Auto-Generation",
        description: "Phase 5: Just paste a URL - AI analyzes docs and generates complete MCP server.",
        gradient: "from-primary/20 to-primary/5",
    },
    {
        icon: RefreshCw,
        title: "Continuous Deployment",
        description: "Update your API? Your MCP server updates automatically with CI/CD pipelines.",
        gradient: "from-secondary/20 to-secondary/5",
    },
];

export default function Features() {
    return (
        <section className="relative py-24">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Powerful <span className="gradient-text">Features</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Everything you need to transform any API into an AI-accessible MCP server
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="glass-dark p-6 h-full border-primary/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
                                >
                                    <feature.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                                </motion.div>
                                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Phase Roadmap Teaser */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <div className="glass max-w-4xl mx-auto p-8 rounded-2xl border border-primary/20">
                        <h3 className="text-2xl font-bold mb-4">
                            Multi-Phase <span className="gradient-text">Roadmap</span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { phase: "Phase 1", status: "MVP - Public APIs", active: true },
                                { phase: "Phase 2", status: "Auth APIs", active: false },
                                { phase: "Phase 3", status: "Credits System", active: false },
                                { phase: "Phase 4", status: "Custom API Builder", active: false },
                                { phase: "Phase 5", status: "AI Auto-Generation", active: false },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`px-4 py-2 rounded-lg border ${item.active
                                            ? "bg-primary/20 border-primary glow-primary"
                                            : "bg-muted/20 border-muted"
                                        }`}
                                >
                                    <div className="text-sm font-bold">{item.phase}</div>
                                    <div className="text-xs text-muted-foreground">{item.status}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
