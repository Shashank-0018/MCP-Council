# Supabase Authentication Setup Guide

## 📋 Prerequisites

-  A Supabase account (free tier works!)
- Google Cloud Console project (for Google OAuth)

---

## 1️⃣ Create Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Click "New Project"
3. Fill in:
   - Project name: `mcp-council`
   - Database password: (generate a strong one)
   - Region: Choose closest to your users
4. Click "Create new project" and wait ~2 minutes

---

## 2️⃣ Get Supabase Credentials

1. In your Supabase project dashboard, click "Settings" (gear icon)
2. Go to "API" section
3. Copy the following values:

   - **Project URL**: `https://xxxxxxxxxxxxx.supabase.co`
   - **anon/public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

---

## 3️⃣ Setup Google OAuth (Optional but Recommended)

### A. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project or select existing
3. Enable "Google+ API"

### B. Create OAuth Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. Application type: "Web application"
4. Name: `MCP-Council`
5. Authorized JavaScript origins:
   ```
   http://localhost:3000
   http://localhost:3001
   ```
6. Authorized redirect URIs:
   ```
   https://yourproject.supabase.co/auth/v1/callback
   ```
7. Copy **Client ID** and **Client Secret**

### C. Configure in Supabase

1. In Supabase dashboard, go to "Authentication" → "Providers"
2. Find "Google" and click to expand
3. Enable "Google enabled"
4. Paste your **Client ID** and **Client Secret**
5. Click "Save"

---

## 4️⃣ Configure Environment Variables

1. In your `frontend/` directory, create `.env.local`:

```bash
# Copy from ENV_TEMPLATE.md
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

2. Replace with YOUR actual values from step 2

---

## 5️⃣ Setup Database Tables (Coming in Phase 1)

Once you're ready to store user projects:

```sql
-- Run in Supabase SQL Editor

-- Projects table
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own projects
CREATE POLICY "Users can view own projects"
  ON projects FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can insert their own projects
CREATE POLICY "Users can insert own projects"
  ON projects FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

---

## 6️⃣ Test Authentication

1. **Start dev server**:
   ```bash
   cd frontend
   npm run dev
   ```

2. **Test email/password**:
   - Go to http://localhost:3000/auth/signup
   - Create account with email
   - Check Supabase dashboard → Authentication → Users  3. **Test Google OAuth**:
   - Go to http://localhost:3000/auth/login
   - Click "Continue with Google"
   - Authorize with your Google account
   - Should redirect to `/dashboard`

---

## 7️⃣ Configure Email Templates (Optional)

In Supabase dashboard:
1. Go to "Authentication" → "Email Templates"
2. Customize:
   - Confirmation email
   - Magic link email
   - Reset password email

---

## 🚀 You're Ready!

Authentication is now fully integrated:

- ✅ Email/Password signup & login
- ✅ Google OAuth
- ✅ Protected dashboard route
- ✅ Session management
- ✅ Sign out functionality

---

## 🔧 Troubleshooting

### "Missing Supabase environment variables"
- Make sure `.env.local` exists in `frontend/` directory
- Variables must start with `NEXT_PUBLIC_`
- Restart dev server after adding env vars

### Google OAuth redirect not working
- Check redirect URI matches exactly in both Google Console and Supabase
- Ensure Google Provider is enabled in Supabase

### Can't sign up - email not verified
- In Supabase dashboard → Authentication → Providers → Email
- Disable "Confirm email" for development (re-enable for production!)

---

## 📚 Next Steps

- Add password reset functionality
- Create user profile page
- Build out dashboard features
- Add more OAuth providers (GitHub, etc.)

---

Built with Supabase Auth + Next.js 16 🔐
