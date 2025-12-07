"use client";

import { motion } from "framer-motion";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Card } from "@/components/ui/card";
import { Sparkles, Target, Lightbulb, Users, Rocket, Code2, Zap, Globe } from "lucide-react";

const mission = {
    title: "Our Mission",
    description: "Democratize AI-accessible APIs by automating the entire pipeline from REST API to deployed MCP server. We believe every API should be accessible to AI assistants without days of manual integration work.",
    icon: Target,
};

const vision = {
    title: "Our Vision",
    description: "A world where any developer can make their API AI-accessible in minutes, not days. Where the barrier between human-made APIs and AI capabilities is seamlessly bridged through automation.",
    icon: Lightbulb,
};

const techStack = [
    { name: "Model Context Protocol", description: "MCP 2024-11-05 specification", icon: Sparkles },
    { name: "TypeScript", description: "Type-safe server generation", icon: Code2 },
    { name: "Express.js", description: "HTTP API layer", icon: Zap },
    { name: "Next.js", description: "Modern web platform", icon: Globe },
];

const roadmap = [
    {
        phase: "Phase 1",
        title: "MVP - Public APIs",
        status: "In Progress",
        description: "Google Login, API Documentation, MCP Wrappers, Deployment, NPM Publishing, MCP Registry Integration",
        active: true,
    },
    {
        phase: "Phase 2",
        title: "Authenticated APIs",
        status: "Planned",
        description: "Support for API keys, OAuth, and custom authentication methods",
        active: false,
    },
    {
        phase: "Phase 3",
        title: "Credits System",
        status: "Planned",
        description: "Introduce credit-based pricing model for MCP tool creation and hosting",
        active: false,
    },
    {
        phase: "Phase 4",
        title: "Custom API Builder",
        status: "Planned",
        description: "Build your own APIs directly in the platform, then convert to MCP",
        active: false,
    },
    {
        phase: "Phase 5",
        title: "AI Auto-Generation",
        status: "Future",
        description: "Paste any API documentation URL → AI generates complete MCP server automatically",
        active: false,
    },
];

export default function AboutPage() {
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                            <Users className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">About MCP-Council</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Building the <span className="gradient-text">Future</span> of
                            <br />
                            AI-Accessible APIs
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            We're on a mission to eliminate the friction between REST APIs and AI assistants
                            through complete automation.
                        </p>
                    </motion.div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24">
                        {[mission, vision].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                            >
                                <Card className="glass-dark p-8 h-full border-primary/10">
                                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 mb-6">
                                        <item.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Technology Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-24"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">
                                Built on <span className="gradient-text">Battle-Tested</span> Technology
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Production-ready patterns from 47+ API endpoints
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {techStack.map((tech, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                >
                                    <Card className="glass-dark p-6 text-center border-primary/10 hover:border-primary/30 transition-all">
                                        <tech.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                                        <h3 className="font-bold mb-2">{tech.name}</h3>
                                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Roadmap */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">
                                <span className="gradient-text">Roadmap</span> to the Future
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Our multi-phase journey to revolutionize API accessibility
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-6">
                            {roadmap.map((phase, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                >
                                    <Card
                                        className={`p-6 border-primary/10 ${phase.active
                                                ? "glass-dark border-primary/30 glow-primary"
                                                : "glass-dark"
                                            }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${phase.active
                                                        ? "bg-gradient-to-br from-primary to-primary/70"
                                                        : "bg-muted/20"
                                                    }`}
                                            >
                                                <Rocket
                                                    className={`w-6 h-6 ${phase.active ? "text-white" : "text-muted-foreground"
                                                        }`}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-xl font-bold">{phase.phase}</h3>
                                                    <span
                                                        className={`text-xs px-2 py-1 rounded-full ${phase.active
                                                                ? "bg-primary/20 text-primary"
                                                                : "bg-muted/20 text-muted-foreground"
                                                            }`}
                                                    >
                                                        {phase.status}
                                                    </span>
                                                </div>
                                                <h4 className="font-semibold mb-2">{phase.title}</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    {phase.description}
                                                </p>
                                            </div>
                                        </div>
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
