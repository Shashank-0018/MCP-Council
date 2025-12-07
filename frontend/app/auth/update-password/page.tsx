"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Lock, CheckCircle2, AlertCircle } from "lucide-react";
import { updatePassword } from "@/app/settings/actions";

export default function UpdatePasswordPage() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleSubmit = async (formData: FormData) => {
        setLoading(true);
        setMessage(null);

        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirm_password") as string;

        if (password !== confirmPassword) {
            setMessage({ type: 'error', text: 'Passwords do not match' });
            setLoading(false);
            return;
        }

        const result = await updatePassword(formData);

        if (result?.error) {
            setMessage({ type: 'error', text: result.error });
        } else {
            setMessage({ type: 'success', text: result.message || 'Password updated!' });
            // Redirect to settings after 2 seconds
            setTimeout(() => {
                window.location.href = '/settings';
            }, 2000);
        }

        setLoading(false);
    };

    return (
        <main className="min-h-screen flex items-center justify-center p-4">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />

            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl"
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

            {/* Update Password Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md relative z-10"
            >
                <Card className="glass-dark p-8 border-primary/20">
                    {/* Logo */}
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold gradient-text">MCP-Council</span>
                    </div>

                    <h1 className="text-3xl font-bold text-center mb-2">Set Your Password</h1>
                    <p className="text-center text-muted-foreground mb-8">
                        Choose a strong password for your account
                    </p>

                    {/* Message */}
                    {message && (
                        <div
                            className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${message.type === 'success'
                                    ? 'bg-accent/10 border border-accent/30'
                                    : 'bg-destructive/10 border border-destructive/30'
                                }`}
                        >
                            {message.type === 'success' ? (
                                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            ) : (
                                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                            )}
                            <p
                                className={`text-sm ${message.type === 'success' ? 'text-accent' : 'text-destructive'
                                    }`}
                            >
                                {message.text}
                            </p>
                        </div>
                    )}

                    {/* Password Form */}
                    <form action={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium mb-2">
                                New Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    minLength={6}
                                    className="w-full pl-10 pr-4 py-2 bg-muted/10 border border-primary/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="••••••••"
                                />
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Must be at least 6 characters
                            </p>
                        </div>

                        <div>
                            <label htmlFor="confirm_password" className="block text-sm font-medium mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    id="confirm_password"
                                    name="confirm_password"
                                    type="password"
                                    required
                                    minLength={6}
                                    className="w-full pl-10 pr-4 py-2 bg-muted/10 border border-primary/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full glow-primary"
                            size="lg"
                            disabled={loading}
                        >
                            {loading ? 'Updating...' : 'Update Password'}
                        </Button>
                    </form>

                    {message?.type === 'success' && (
                        <p className="text-center text-sm text-muted-foreground mt-4">
                            Redirecting to settings...
                        </p>
                    )}
                </Card>
            </motion.div>
        </main>
    );
}
