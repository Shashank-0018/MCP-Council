"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, BookOpen } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10" />
                <motion.div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass-dark p-12 rounded-3xl border border-primary/20 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to <span className="gradient-text">Automate</span> Your API?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Join the future of AI-accessible APIs. Transform your REST endpoints
                            into production-ready MCP servers in minutes.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <Button size="lg" className="text-lg px-8 glow-primary group">
                                Start Building Free
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8">
                                <BookOpen className="mr-2 w-5 h-5" />
                                Read the Docs
                            </Button>
                        </div>

                        {/* Social Proof / Links */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Github className="w-4 h-4" />
                                <span>Open Source</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>•</span>
                                <span>No Credit Card Required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>•</span>
                                <span>Free Tier Available</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
