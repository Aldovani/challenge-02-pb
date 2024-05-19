import { ClerkProvider as ClerkProviderLib } from "@clerk/clerk-react";

type ClerkProviderProps = {
  children: React.ReactNode;
};

export function ClerkProvider({ children }: ClerkProviderProps) {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  return (
    <ClerkProviderLib publishableKey={PUBLISHABLE_KEY}>
      {children}
    </ClerkProviderLib>
  );
}
