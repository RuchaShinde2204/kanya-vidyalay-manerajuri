import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./layouts/AdminLayout";
import PublicLayout from "./layouts/PublicLayout";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Admissions from "./pages/admin/Admissions";
import ContactsAdmin from "./pages/admin/ContactsAdmin";
import Dashboard from "./pages/admin/Dashboard";
import EventsAdmin from "./pages/admin/EventsAdmin";
import GalleryAdmin from "./pages/admin/GalleryAdmin";
import Login from "./pages/admin/Login";
import NoticesAdmin from "./pages/admin/NoticesAdmin";

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />
      </Route>
      <Route path="/admin/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/admissions" element={<Admissions />} />
          <Route path="/admin/events" element={<EventsAdmin />} />
          <Route path="/admin/gallery" element={<GalleryAdmin />} />
          <Route path="/admin/notices" element={<NoticesAdmin />} />
          <Route path="/admin/contacts" element={<ContactsAdmin />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
