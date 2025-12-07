"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function updateProfile(formData: FormData) {
    const supabase = await createClient();

    const data = {
        data: {
            full_name: formData.get("full_name") as string,
        },
    };

    const { error } = await supabase.auth.updateUser(data);

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/settings");
    return { success: true };
}

export async function sendPasswordSetupEmail(email: string) {
    const supabase = await createClient();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/update-password`,
    });

    if (error) {
        return { error: error.message };
    }

    return { success: true, message: "Password setup email sent! Check your inbox." };
}

export async function updatePassword(formData: FormData) {
    const supabase = await createClient();

    const newPassword = formData.get("password") as string;

    const { error } = await supabase.auth.updateUser({
        password: newPassword,
    });

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/settings");
    return { success: true, message: "Password updated successfully!" };
}
