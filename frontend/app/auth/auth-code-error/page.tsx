"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";

export default function AuthCodeErrorPage() {
    return (
        <main className="min-h-screen flex items-center justify-center p-4">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 via-primary/10 to-secondary/10" />

            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-destructive/20 rounded-full blur-3xl"
                animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Error Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md relative z-10"
            >
                <Card className="glass-dark p-8 border-destructive/20 text-center">
                    <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="w-8 h-8 text-destructive" />
                    </div>

                    <h1 className="text-3xl font-bold mb-3">Authentication Error</h1>

                    <p className="text-muted-foreground mb-6">
                        We couldn't complete the authentication process. This could be due to:
                    </p>

                    <ul className="text-left text-sm text-muted-foreground mb-8 space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-destructive mt-1">•</span>
                            <span>The authorization code has expired</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-destructive mt-1">•</span>
                            <span>OAuth provider configuration issue</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-destructive mt-1">•</span>
                            <span>Missing Supabase environment variables</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-destructive mt-1">•</span>
                            <span>Network connectivity issue</span>
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                            variant="outline"
                            className="flex-1"
                            asChild
                        >
                            <a href="/auth/login">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Try Again
                            </a>
                        </Button>
                        <Button
                            className="flex-1"
                            asChild
                        >
                            <a href="/">
                                <Home className="w-4 h-4 mr-2" />
                                Go Home
                            </a>
                        </Button>
                    </div>

                    <div className="mt-6 p-4 bg-muted/20 rounded-lg text-left">
                        <p className="text-xs font-semibold mb-2">For Developers:</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Check <code className="bg-muted/30 px-1 rounded">.env.local</code> exists with correct Supabase credentials</li>
                            <li>• Verify OAuth redirect URI in Supabase matches your app URL</li>
                            <li>• Check browser console for detailed error messages</li>
                        </ul>
                    </div>
                </Card>
            </motion.div>
        </main>
    );
}
