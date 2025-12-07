import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    User,
    Mail,
    Shield,
    Key,
    Calendar,
    CheckCircle2,
    AlertCircle,
    LogOut,
} from "lucide-react";
import { signOut } from "../auth/actions";
import ProfileForm from "@/components/settings/ProfileForm";
import AuthMethodsCard from "@/components/settings/AuthMethodsCard";

export default async function SettingsPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/auth/login");
    }

    // Fetch profile data from profiles table
    const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

    // Determine which auth methods are connected
    const identities = user.identities || [];
    const hasGoogle = identities.some(id => id.provider === 'google');

    // Now we can reliably check if password exists from profiles table!
    const hasEmailPassword = profile?.has_password ?? false;

    return (
        <main className="min-h-screen p-8">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">Account Settings</h1>
                            <p className="text-muted-foreground">Manage your profile and security</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button variant="outline" asChild>
                            <a href="/dashboard">Dashboard</a>
                        </Button>
                        <form action={signOut}>
                            <Button variant="outline" type="submit">
                                <LogOut className="w-4 h-4 mr-2" />
                                Sign Out
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Profile Information */}
                    <Card className="glass-dark p-6 border-primary/10">
                        <div className="flex items-center gap-3 mb-6">
                            <User className="w-5 h-5 text-primary" />
                            <h2 className="text-xl font-bold">Profile Information</h2>
                        </div>

                        <ProfileForm user={user} />
                    </Card>

                    {/* Account Details */}
                    <Card className="glass-dark p-6 border-primary/10">
                        <div className="flex items-center gap-3 mb-6">
                            <Shield className="w-5 h-5 text-primary" />
                            <h2 className="text-xl font-bold">Account Details</h2>
                        </div>

                        <div className="grid gap-4">
                            <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                                <Mail className="w-5 h-5 text-primary" />
                                <div className="flex-1">
                                    <div className="text-sm text-muted-foreground">Email</div>
                                    <div className="font-medium">{user.email}</div>
                                </div>
                                {user.email_confirmed_at && (
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                )}
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                                <Key className="w-5 h-5 text-primary" />
                                <div className="flex-1">
                                    <div className="text-sm text-muted-foreground">User ID</div>
                                    <div className="font-mono text-sm">{user.id}</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-lg">
                                <Calendar className="w-5 h-5 text-primary" />
                                <div className="flex-1">
                                    <div className="text-sm text-muted-foreground">Account Created</div>
                                    <div className="font-medium">
                                        {new Date(user.created_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Authentication Methods */}
                    <AuthMethodsCard
                        userEmail={user.email!}
                        hasEmailPassword={hasEmailPassword}
                        hasGoogle={hasGoogle}
                    />

                    {/* Debug: Show Profile Data */}
                    <Card className="glass-dark p-6 border-accent/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Key className="w-5 h-5 text-accent" />
                            <h2 className="text-xl font-bold">Debug: Profile & Auth Data</h2>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold mb-2">Profile Table:</h3>
                                <pre className="text-xs font-mono bg-muted/20 p-4 rounded overflow-x-auto">
                                    {JSON.stringify(profile, null, 2)}
                                </pre>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-2">Auth Identities:</h3>
                                <pre className="text-xs font-mono bg-muted/20 p-4 rounded overflow-x-auto">
                                    {JSON.stringify(user.identities, null, 2)}
                                </pre>
                            </div>

                            <div className="text-sm">
                                <p><strong>has_password (from profiles):</strong> {hasEmailPassword ? '✅ true' : '❌ false'}</p>
                                <p><strong>hasGoogle (from identities):</strong> {hasGoogle ? '✅ true' : '❌ false'}</p>
                            </div>
                        </div>
                    </Card>

                    {/* Danger Zone */}
                    <Card className="glass-dark p-6 border-destructive/20">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertCircle className="w-5 h-5 text-destructive" />
                            <h2 className="text-xl font-bold">Danger Zone</h2>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">
                            Permanently delete your account and all associated data. This action cannot be undone.
                        </p>

                        <Button variant="destructive" disabled>
                            Delete Account
                        </Button>
                        <p className="text-xs text-muted-foreground mt-2">
                            Account deletion coming soon
                        </p>
                    </Card>
                </div>
            </div>
        </main>
    );
}
