import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { type User as FirebaseUser } from "firebase/auth";

type PrivateRouteProps = {
  user: FirebaseUser | null;
  children: ReactNode;
};

export default function PrivateRoute({ user, children }: PrivateRouteProps) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}
