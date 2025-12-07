import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, LogOut, Settings } from "lucide-react";
import { signOut } from "../auth/actions";

export default async function DashboardPage() {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        redirect("/auth/login");
    }

    return (
        <main className="min-h-screen p-8">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold">Dashboard</h1>
                            <p className="text-muted-foreground">Welcome back, {user.email}</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button variant="outline" asChild>
                            <a href="/settings">
                                <Settings className="w-4 h-4 mr-2" />
                                Settings
                            </a>
                        </Button>
                        <form action={signOut}>
                            <Button variant="outline" type="submit">
                                <LogOut className="w-4 h-4 mr-2" />
                                Sign Out
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card className="glass-dark p-6 border-primary/10">
                        <div className="text-muted-foreground text-sm mb-1">API Endpoints</div>
                        <div className="text-3xl font-bold">0</div>
                        <div className="text-xs text-muted-foreground mt-1">
                            Create your first endpoint
                        </div>
                    </Card>

                    <Card className="glass-dark p-6 border-primary/10">
                        <div className="text-muted-foreground text-sm mb-1">MCP Tools</div>
                        <div className="text-3xl font-bold">0</div>
                        <div className="text-xs text-muted-foreground mt-1">
                            No tools generated yet
                        </div>
                    </Card>

                    <Card className="glass-dark p-6 border-primary/10">
                        <div className="text-muted-foreground text-sm mb-1">Deployments</div>
                        <div className="text-3xl font-bold">0</div>
                        <div className="text-xs text-muted-foreground mt-1">
                            Deploy your first server
                        </div>
                    </Card>
                </div>

                {/* Welcome Message */}
                <Card className="glass-dark p-8 border-accent/20 text-center">
                    <Sparkles className="w-16 h-16 text-accent mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-3">
                        Welcome to <span className="gradient-text">MCP-Council</span>!
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        You're all set! This dashboard will soon allow you to manage your API
                        endpoints, generate MCP tools, and deploy servers. Stay tuned for Phase 1 features.
                    </p>
                    <Button className="glow-primary">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Create Your First API Tool
                    </Button>
                </Card>

                {/* User Info (Debug) */}
                <Card className="glass-dark p-6 border-primary/10 mt-8">
                    <h3 className="font-bold mb-4">Session Info</h3>
                    <div className="space-y-2 text-sm font-mono">
                        <div>
                            <span className="text-muted-foreground">User ID:</span> {user.id}
                        </div>
                        <div>
                            <span className="text-muted-foreground">Email:</span> {user.email}
                        </div>
                        <div>
                            <span className="text-muted-foreground">Provider:</span>{" "}
                            {user.app_metadata.provider}
                        </div>
                        <div>
                            <span className="text-muted-foreground">Created:</span>{" "}
                            {new Date(user.created_at).toLocaleDateString()}
                        </div>
                    </div>
                </Card>
            </div>
        </main>
    );
}
