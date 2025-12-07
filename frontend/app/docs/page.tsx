"use client";

import { motion } from "framer-motion";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    BookOpen,
    Rocket,
    Code2,
    Puzzle,
    Terminal,
    FileCode,
    ArrowRight,
    ExternalLink
} from "lucide-react";

const docSections = [
    {
        title: "Getting Started",
        icon: Rocket,
        description: "Learn the basics and create your first MCP server",
        gradient: "from-primary/20 to-primary/5",
        topics: [
            "Quick Start Guide",
            "Understanding MCP Protocol",
            "Your First API Conversion",
            "Testing with Claude/Cursor",
        ],
    },
    {
        title: "API Integration",
        icon: Code2,
        description: "Convert your REST APIs into MCP servers",
        gradient: "from-secondary/20 to-secondary/5",
        topics: [
            "Public API Setup",
            "Authentication Methods",
            "Parameter Mapping",
            "Error Handling",
        ],
    },
    {
        title: "MCP Tools",
        icon: Puzzle,
        description: "Understand tool definitions and handlers",
        gradient: "from-accent/20 to-accent/5",
        topics: [
            "Tool Schema Definition",
            "JSON Schema Parameters",
            "Handler Implementation",
            "Best Practices",
        ],
    },
    {
        title: "Deployment",
        icon: Terminal,
        description: "Deploy and publish your MCP servers",
        gradient: "from-primary/20 to-primary/5",
        topics: [
            "Automated Deployment",
            "NPM Publishing",
            "MCP Registry",
            "Custom Domains",
        ],
    },
    {
        title: "Examples",
        icon: FileCode,
        description: "Real-world examples and templates",
        gradient: "from-secondary/20 to-secondary/5",
        topics: [
            "PokeAPI Integration",
            "GitHub API Server",
            "Weather API MCP",
            "Custom Tool Templates",
        ],
    },
    {
        title: "API Reference",
        icon: BookOpen,
        description: "Complete API documentation",
        gradient: "from-accent/20 to-accent/5",
        topics: [
            "REST API Endpoints",
            "MCP Protocol Methods",
            "Tool Registration",
            "Webhook Integration",
        ],
    },
];

const quickLinks = [
    {
        title: "MCP Specification",
        description: "Official Model Context Protocol docs",
        href: "https://modelcontextprotocol.io",
        external: true,
    },
    {
        title: "GitHub Repository",
        description: "View source code and contribute",
        href: "#github",
        external: false,
    },
    {
        title: "Framework Guide",
        description: "Complete conversion framework",
        href: "#framework",
        external: false,
    },
    {
        title: "Community Discord",
        description: "Get help and share ideas",
        href: "#discord",
        external: false,
    },
];

export default function DocsPage() {
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
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Documentation</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Everything You Need to{" "}
                            <span className="gradient-text">Build</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Comprehensive guides, examples, and API references to help you convert
                            any API into an MCP server.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="glow-primary">
                                <Rocket className="mr-2 w-5 h-5" />
                                Quick Start
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline">
                                <Code2 className="mr-2 w-5 h-5" />
                                View Examples
                            </Button>
                        </div>
                    </motion.div>

                    {/* Documentation Sections */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 max-w-7xl mx-auto">
                        {docSections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Card className="glass-dark p-6 h-full border-primary/10 hover:border-primary/30 transition-all group cursor-pointer">
                                    <div
                                        className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${section.gradient} mb-4`}
                                    >
                                        <section.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {section.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {section.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {section.topics.map((topic, topicIdx) => (
                                            <li
                                                key={topicIdx}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                                            >
                                                <div className="w-1 h-1 rounded-full bg-primary" />
                                                {topic}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-24"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">
                                <span className="gradient-text">Quick</span> Links
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Essential resources for MCP development
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {quickLinks.map((link, idx) => (
                                <motion.a
                                    key={idx}
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                >
                                    <Card className="glass-dark p-6 border-primary/10 hover:border-primary/30 transition-all group cursor-pointer">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                                    {link.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {link.description}
                                                </p>
                                            </div>
                                            {link.external ? (
                                                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                            ) : (
                                                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            )}
                                        </div>
                                    </Card>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Coming Soon Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Card className="glass p-8 border-accent/30 text-center">
                            <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-3">
                                Full Documentation Coming Soon
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                We're actively writing comprehensive documentation. In the meantime,
                                check out our Framework Guide in the GitHub repository for detailed
                                implementation patterns.
                            </p>
                            <Button variant="outline">
                                View Framework Guide
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Card>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
