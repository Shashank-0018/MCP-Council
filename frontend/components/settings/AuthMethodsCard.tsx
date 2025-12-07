"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Key, CheckCircle2, XCircle, Mail, AlertCircle } from "lucide-react";
import { sendPasswordSetupEmail } from "@/app/settings/actions";

export default function AuthMethodsCard({
    userEmail,
    hasEmailPassword,
    hasGoogle,
}: {
    userEmail: string;
    hasEmailPassword: boolean;
    hasGoogle: boolean;
}) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleSetupPassword = async () => {
        setLoading(true);
        setMessage(null);

        const result = await sendPasswordSetupEmail(userEmail);

        if (result?.error) {
            setMessage({ type: 'error', text: result.error });
        } else {
            setMessage({ type: 'success', text: result.message || 'Email sent!' });
        }

        setLoading(false);
    };

    return (
        <Card className="glass-dark p-6 border-primary/10">
            <div className="flex items-center gap-3 mb-6">
                <Key className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">Authentication Methods</h2>
            </div>

            {message && (
                <div
                    className={`mb-4 p-4 rounded-lg flex items-start gap-3 ${message.type === 'success'
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

            <div className="space-y-4">
                {/* Email/Password Method */}
                <div className="flex items-center justify-between p-4 bg-muted/10 rounded-lg border border-primary/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <div className="font-medium">Email & Password</div>
                            <div className="text-sm text-muted-foreground">
                                Sign in with your email and password
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {hasEmailPassword ? (
                            <>
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                <span className="text-sm font-medium text-accent">Connected</span>
                            </>
                        ) : (
                            <>
                                <XCircle className="w-5 h-5 text-muted-foreground" />
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={handleSetupPassword}
                                    disabled={loading}
                                >
                                    {loading ? 'Sending...' : 'Add Password'}
                                </Button>
                            </>
                        )}
                    </div>
                </div>

                {/* Google Method */}
                <div className="flex items-center justify-between p-4 bg-muted/10 rounded-lg border border-primary/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                        </div>
                        <div>
                            <div className="font-medium">Google</div>
                            <div className="text-sm text-muted-foreground">
                                Sign in with your Google account
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        {hasGoogle ? (
                            <>
                                <CheckCircle2 className="w-5 h-5 text-accent" />
                                <span className="text-sm font-medium text-accent">Connected</span>
                            </>
                        ) : (
                            <>
                                <XCircle className="w-5 h-5 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">Not Connected</span>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Tip - Now accurate! */}
            {!hasEmailPassword && (
                <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/30">
                    <p className="text-sm text-accent">
                        <strong>💡 Tip:</strong> Add a password to enable signing in with email when Google is unavailable.
                    </p>
                </div>
            )}
        </Card>
    );
}
