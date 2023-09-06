import { api } from "../services/api";

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await api.post("auth/login/", {
      username: email,
      password: password,
    });
    return request.data;
  } catch (error) {
    return null;
  }
}
