import { createAuthClient } from "better-auth/react";

const DEMO_MODE = process.env.NEXT_PUBLIC_DEMO_MODE === "true";

const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
});

const demoSession = {
  data: {
    user: {
      id: "demo-user",
      name: "Demo User",
      email: "demo@supoclip.local",
      image: null,
    },
    session: {
      id: "demo-session",
      token: "demo-token",
      expiresAt: new Date(Date.now() + 86400000).toISOString(),
    },
  },
  isPending: false,
  error: null,
};

export const signIn = authClient.signIn;
export const signUp = authClient.signUp;
export const signOut = DEMO_MODE ? async () => {} : authClient.signOut;
export const useSession = DEMO_MODE ? () => demoSession : authClient.useSession;
