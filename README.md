# EMG Educational App

## Environment Setup

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Get your Supabase credentials:
   - Go to your Supabase project dashboard
   - Navigate to Project Settings > API
   - Copy the Project URL and paste it as `VITE_SUPABASE_URL`
   - Copy the `anon` public key and paste it as `VITE_SUPABASE_ANON_KEY`

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## Security Notes

- Never commit the `.env` file to version control
- Keep your environment variables secure
- The `anon` key is meant for public client-side access but should still be kept out of version control
- Never expose the service role key as it has full admin access