import { Pencil, Save, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { adminService } from "../../services/adminService";
import { publicService } from "../../services/publicService";

const initial = { title: "", description: "", date: "", location: "", category: "School Event", image: null };

export default function EventsAdmin() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState(initial);
  const [editing, setEditing] = useState(null);

  const load = () => publicService.getEvents().then(({ data }) => setEvents(data));
  useEffect(() => { load().catch(() => setEvents([])); }, []);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.files ? e.target.files[0] : e.target.value });
  const toFormData = () => {
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => value && data.append(key, value));
    return data;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (editing) await adminService.updateEvent(editing, toFormData());
    else await adminService.createEvent(toFormData());
    setForm(initial);
    setEditing(null);
    load();
  };

  const edit = (event) => {
    setEditing(event._id);
    setForm({ title: event.title, description: event.description, date: event.date?.slice(0, 10), location: event.location, category: event.category, image: null });
  };

  const remove = async (id) => {
    if (!confirm("Delete this event?")) return;
    await adminService.deleteEvent(id);
    load();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
      <form onSubmit={submit} className="admin-card">
        <h1 className="text-2xl font-black">{editing ? "Edit Event" : "Create Event"}</h1>
        <div className="mt-5 grid gap-4">
          <label>Title<input name="title" value={form.title} onChange={change} required /></label>
          <label>Description<textarea name="description" value={form.description} onChange={change} required /></label>
          <label>Date<input type="date" name="date" value={form.date} onChange={change} required /></label>
          <label>Location<input name="location" value={form.location} onChange={change} required /></label>
          <label>Category<input name="category" value={form.category} onChange={change} /></label>
          <label>Image<input type="file" name="image" onChange={change} accept="image/*" /></label>
          <button className="btn-primary"><Save size={16} />Save Event</button>
        </div>
      </form>
      <div>
        <h2 className="text-2xl font-black">Events</h2>
        <div className="mt-4 grid gap-4">
          {events.map((event) => (
            <article key={event._id} className="admin-card flex flex-col gap-4 md:flex-row md:items-center">
              {event.imageUrl && <img src={event.imageUrl} alt={event.title} className="h-24 w-32 rounded-md object-cover" />}
              <div className="flex-1">
                <h3 className="font-bold">{event.title}</h3>
                <p className="text-sm text-slate-500">{new Date(event.date).toLocaleDateString()} · {event.location}</p>
              </div>
              <button onClick={() => edit(event)} className="btn-secondary"><Pencil size={16} />Edit</button>
              <button onClick={() => remove(event._id)} className="rounded-md p-2 text-red-600 hover:bg-red-50"><Trash2 size={18} /></button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
