import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

type PrivateRouterProps = {
  children: React.ReactNode;
};

export function PrivateRouter({ children }: PrivateRouterProps) {
  const { isSignedIn, isLoaded } = useAuth();
  if (!isLoaded) return null; 
  if (!isSignedIn) return <Navigate to="sing-in" />;

  return <>{children}</>;
}
