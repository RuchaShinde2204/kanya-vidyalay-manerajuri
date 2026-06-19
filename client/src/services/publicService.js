import api from "./api";

export const publicService = {
  getNotices: () => api.get("/notices"),
  getEvents: () => api.get("/events"),
  getUpcomingEvents: () => api.get("/events/upcoming"),
  getPastEvents: () => api.get("/events/past"),
  getGallery: (category = "") => api.get(`/gallery${category ? `?category=${category}` : ""}`),
  submitContact: (payload) => api.post("/contacts", payload),
  submitAdmission: (formData) => api.post("/admissions", formData, { headers: { "Content-Type": "multipart/form-data" } })
};
