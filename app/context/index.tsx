import React, { createContext, useState } from "react";
import { AuthProviderProps, ContextProps, UserProps } from "./interface";
import { LoginRequest } from "./loginRequest";

export const AuthContext = createContext<ContextProps>({} as ContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps | null>();

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);

    const payload = { token: response.token, email };
    setUser(payload);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
