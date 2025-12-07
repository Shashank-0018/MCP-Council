"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Play,
    Code2,
    Sparkles,
    CheckCircle2,
    Copy,
    ExternalLink
} from "lucide-react";

const exampleAPI = {
    name: "getPokemonByName",
    endpoint: "https://pokeapi.co/api/v2/pokemon/{name}",
    method: "GET",
    description: "Get information about a Pokemon by its name",
    parameters: [
        { name: "name", type: "string", required: true, description: "Pokemon name or ID" }
    ],
};

const generatedTool = `{
  "name": "getPokemonByName",
  "description": "Get information about a Pokemon by its name",
  "inputSchema": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "description": "Pokemon name or ID"
      }
    },
    "required": ["name"]
  }
}`;

const generatedHandler = `export const getPokemonByNameHandler = async (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ 
      error: "Missing parameter: name" 
    });
  }
  
  try {
    const response = await axios.get(
      \`https://pokeapi.co/api/v2/pokemon/\${name}\`
    );
    return res.json(response.data);
  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch from PokeAPI"
    });
  }
};`;

const deploymentSteps = [
    { step: "Validate API endpoint", status: "complete", time: "0.2s" },
    { step: "Generate MCP tool definition", status: "complete", time: "0.1s" },
    { step: "Create Express handler", status: "complete", time: "0.1s" },
    { step: "Build MCP protocol wrapper", status: "complete", time: "0.3s" },
    { step: "Deploy to infrastructure", status: "complete", time: "45s" },
    { step: "Publish to NPM", status: "complete", time: "12s" },
    { step: "Register in MCP Registry", status: "complete", time: "3s" },
];

export default function PlaygroundPage() {
    const [copied, setCopied] = useState<string | null>(null);

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

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
                            <Play className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Interactive Demo</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">Experience</span> the Magic
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            See how MCP-Council transforms a simple API endpoint into a
                            production-ready MCP server in real-time.
                        </p>
                    </motion.div>

                    {/* Demo Flow */}
                    <div className="max-w-6xl mx-auto space-y-12">
                        {/* Input API */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                                    1
                                </div>
                                Input: Public API
                            </h2>
                            <Card className="glass-dark p-6 border-primary/10">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-sm font-semibold text-muted-foreground mb-2">
                                            API Endpoint
                                        </div>
                                        <div className="font-mono text-sm bg-muted/20 p-3 rounded border border-primary/10">
                                            {exampleAPI.endpoint}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-muted-foreground mb-2">
                                            Method
                                        </div>
                                        <div className="inline-flex px-3 py-1 rounded bg-accent/20 text-accent text-sm font-mono">
                                            {exampleAPI.method}
                                        </div>
                                    </div>
                                    <div className="md:col-span-2">
                                        <div className="text-sm font-semibold text-muted-foreground mb-2">
                                            Description
                                        </div>
                                        <p className="text-sm">{exampleAPI.description}</p>
                                    </div>
                                    <div className="md:col-span-2">
                                        <div className="text-sm font-semibold text-muted-foreground mb-2">
                                            Parameters
                                        </div>
                                        <div className="space-y-2">
                                            {exampleAPI.parameters.map((param, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center gap-3 text-sm bg-muted/10 p-2 rounded"
                                                >
                                                    <code className="font-mono text-primary">{param.name}</code>
                                                    <span className="text-muted-foreground">•</span>
                                                    <span className="text-muted-foreground">{param.type}</span>
                                                    {param.required && (
                                                        <>
                                                            <span className="text-muted-foreground">•</span>
                                                            <span className="text-accent text-xs">required</span>
                                                        </>
                                                    )}
                                                    <span className="text-muted-foreground ml-auto">
                                                        {param.description}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Processing */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-sm font-bold">
                                    2
                                </div>
                                Processing: Auto-Generation
                            </h2>
                            <Card className="glass-dark p-6 border-secondary/10">
                                <div className="space-y-3">
                                    {deploymentSteps.map((step, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                                            className="flex items-center gap-3"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-accent" />
                                            <span className="flex-1">{step.step}</span>
                                            <span className="text-sm text-muted-foreground font-mono">
                                                {step.time}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6 border-t border-primary/10 flex items-center justify-between">
                                    <span className="font-semibold">Total Time:</span>
                                    <span className="text-2xl font-bold text-accent">~61 seconds</span>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Output */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold">
                                    3
                                </div>
                                Output: Production MCP Server
                            </h2>

                            <div className="space-y-6">
                                {/* Tool Definition */}
                                <Card className="glass-dark border-accent/10">
                                    <div className="p-4 border-b border-primary/10 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Code2 className="w-4 h-4 text-accent" />
                                            <span className="font-semibold">Tool Definition (JSON)</span>
                                        </div>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => copyToClipboard(generatedTool, "tool")}
                                        >
                                            {copied === "tool" ? (
                                                <CheckCircle2 className="w-4 h-4" />
                                            ) : (
                                                <Copy className="w-4 h-4" />
                                            )}
                                        </Button>
                                    </div>
                                    <pre className="p-4 overflow-x-auto">
                                        <code className="text-sm font-mono">{generatedTool}</code>
                                    </pre>
                                </Card>

                                {/* Handler Code */}
                                <Card className="glass-dark border-accent/10">
                                    <div className="p-4 border-b border-primary/10 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Code2 className="w-4 h-4 text-accent" />
                                            <span className="font-semibold">Handler (TypeScript)</span>
                                        </div>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => copyToClipboard(generatedHandler, "handler")}
                                        >
                                            {copied === "handler" ? (
                                                <CheckCircle2 className="w-4 h-4" />
                                            ) : (
                                                <Copy className="w-4 h-4" />
                                            )}
                                        </Button>
                                    </div>
                                    <pre className="p-4 overflow-x-auto">
                                        <code className="text-sm font-mono">{generatedHandler}</code>
                                    </pre>
                                </Card>

                                {/* Deployment Info */}
                                <Card className="glass-dark p-6 border-accent/10">
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div>
                                            <div className="text-sm font-semibold text-muted-foreground mb-2">
                                                NPM Package
                                            </div>
                                            <code className="text-sm">@mcp-council/pokeapi-mcp</code>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-muted-foreground mb-2">
                                                Deployment URL
                                            </div>
                                            <code className="text-sm">mcp-council.io/api/pokemon</code>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-muted-foreground mb-2">
                                                MCP Registry
                                            </div>
                                            <a
                                                href="#"
                                                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                                            >
                                                View Listing
                                                <ExternalLink className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mt-20 text-center"
                    >
                        <Card className="glass-dark p-12 max-w-3xl mx-auto border-primary/20">
                            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
                            <h3 className="text-3xl font-bold mb-4">
                                Ready to Build Your Own?
                            </h3>
                            <p className="text-lg text-muted-foreground mb-8">
                                Transform your API into an MCP server in minutes, just like this example.
                            </p>
                            <Button size="lg" className="glow-primary">
                                Start Building Now
                            </Button>
                        </Card>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
