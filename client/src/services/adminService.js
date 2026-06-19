import api from "./api";

export const adminService = {
  stats: () => api.get("/dashboard/stats"),
  admissions: (search = "") => api.get(`/admissions${search ? `?search=${search}` : ""}`),
  deleteAdmission: (id) => api.delete(`/admissions/${id}`),
  contacts: () => api.get("/contacts"),
  deleteContact: (id) => api.delete(`/contacts/${id}`),
  createNotice: (payload) => api.post("/notices", payload),
  updateNotice: (id, payload) => api.put(`/notices/${id}`, payload),
  deleteNotice: (id) => api.delete(`/notices/${id}`),
  createEvent: (formData) => api.post("/events", formData, { headers: { "Content-Type": "multipart/form-data" } }),
  updateEvent: (id, formData) => api.put(`/events/${id}`, formData, { headers: { "Content-Type": "multipart/form-data" } }),
  deleteEvent: (id) => api.delete(`/events/${id}`),
  uploadGallery: (formData) => api.post("/gallery", formData, { headers: { "Content-Type": "multipart/form-data" } }),
  deleteGallery: (id) => api.delete(`/gallery/${id}`),
  updateAdmissionStatus: (id, status) =>
  api.patch(`/admissions/${id}/status`, { status })
};
