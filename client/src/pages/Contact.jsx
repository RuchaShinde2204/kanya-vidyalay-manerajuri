import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { publicService } from "../services/publicService";
import { schoolInfo } from "../utils/constants";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    await publicService.submitContact(form);
    setStatus("Message sent successfully.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container-page py-12">
      <h1 className="text-4xl font-black text-school-ink">Contact</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section className="space-y-5">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="flex gap-3"><MapPin className="text-school-green" />{schoolInfo.address}</p>
            <p className="mt-3 flex gap-3"><Phone className="text-school-green" />{schoolInfo.phone}</p>
            <p className="mt-3 flex gap-3"><Mail className="text-school-green" />{schoolInfo.email}</p>
          </div>
          <iframe title="School location" src={schoolInfo.mapEmbed} className="h-80 w-full rounded-lg border-0" loading="lazy" />
        </section>
        <form onSubmit={submit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Send Message</h2>
          <div className="mt-5 grid gap-4">
            <label>Name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></label>
            <label>Email<input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></label>
            <label>Message<textarea rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required /></label>
            <button className="btn-primary" type="submit"><Send size={16} />Send</button>
            {status && <p className="text-sm font-semibold text-school-green">{status}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
