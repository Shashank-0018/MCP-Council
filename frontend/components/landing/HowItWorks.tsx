"use client";

import { motion } from "framer-motion";
import { FileCode, Cpu, Rocket, CheckCircle2 } from "lucide-react";

const steps = [
    {
        icon: FileCode,
        title: "1. Provide API Endpoints",
        description: "Simply input your REST API endpoints with parameters and descriptions. Supports public and authenticated APIs.",
        color: "from-primary to-primary/70",
    },
    {
        icon: Cpu,
        title: "2. Auto-Generate MCP Tools",
        description: "Our system automatically generates MCP tool definitions, handlers, and protocol wrappers following best practices.",
        color: "from-secondary to-secondary/70",
    },
    {
        icon: Rocket,
        title: "3. Deploy & Publish",
        description: "Instantly deploy to our infrastructure, publish to NPM, and register in the MCP Registry. AI-ready in minutes.",
        color: "from-accent to-accent/70",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        How It <span className="gradient-text">Works</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        From API to AI-accessible MCP server in three simple steps
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="max-w-6xl mx-auto space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                {/* Content */}
                                <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                                    <div className="glass-dark p-8 rounded-2xl border border-primary/20">
                                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.color} mb-4`}>
                                            <step.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-lg text-muted-foreground">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Visual */}
                                <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative aspect-square max-w-sm mx-auto"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-3xl opacity-20 rounded-full`} />
                                        <div className="relative glass p-8 rounded-3xl border border-primary/20 flex items-center justify-center h-full">
                                            <step.icon className="w-32 h-32 text-primary/50" strokeWidth={1} />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Connecting Line (not on last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-6 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* End Result */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="glass-dark inline-flex items-center gap-3 px-6 py-4 rounded-full border border-accent/30">
                        <CheckCircle2 className="w-6 h-6 text-accent" />
                        <span className="text-lg font-semibold">
                            Result: Production-ready MCP server accessible by Claude, Cursor, and Gemini
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
