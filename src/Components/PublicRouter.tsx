import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

type PublicRouterProps = {
  children: React.ReactNode;
};

export function PublicRouter({ children }: PublicRouterProps) {
  const { isSignedIn, isLoaded } = useAuth();
  if (!isLoaded) return null;
  if (isSignedIn) return <Navigate to="/" />;

  return <>{children}</>;
}
