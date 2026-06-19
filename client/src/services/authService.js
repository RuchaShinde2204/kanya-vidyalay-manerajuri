import api from "./api";

export const authService = {
  login: (payload) => api.post("/auth/login", payload),
  me: () => api.get("/auth/me")
};
