"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, CheckCircle2, AlertCircle } from "lucide-react";
import { updateProfile } from "@/app/settings/actions";

export default function ProfileForm({ user }: { user: any }) {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleSubmit = async (formData: FormData) => {
        setLoading(true);
        setMessage(null);

        const result = await updateProfile(formData);

        if (result?.error) {
            setMessage({ type: 'error', text: result.error });
        } else {
            setMessage({ type: 'success', text: 'Profile updated successfully!' });
        }

        setLoading(false);
    };

    return (
        <>
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

            <form action={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="full_name" className="block text-sm font-medium mb-2">
                        Full Name
                    </label>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            id="full_name"
                            name="full_name"
                            type="text"
                            defaultValue={user.user_metadata?.full_name || ''}
                            className="w-full pl-10 pr-4 py-2 bg-muted/10 border border-primary/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Enter your full name"
                        />
                    </div>
                </div>

                <Button type="submit" disabled={loading} className="glow-primary">
                    {loading ? 'Saving...' : 'Save Changes'}
                </Button>
            </form>
        </>
    );
}
