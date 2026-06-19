import { Pencil, Save, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { adminService } from "../../services/adminService";
import { publicService } from "../../services/publicService";

const initial = { title: "", description: "" };

export default function NoticesAdmin() {
  const [notices, setNotices] = useState([]);
  const [form, setForm] = useState(initial);
  const [editing, setEditing] = useState(null);

  const load = () => publicService.getNotices().then(({ data }) => setNotices(data));
  useEffect(() => { load().catch(() => setNotices([])); }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (editing) await adminService.updateNotice(editing, form);
    else await adminService.createNotice(form);
    setForm(initial);
    setEditing(null);
    load();
  };

  const edit = (notice) => {
    setEditing(notice._id);
    setForm({ title: notice.title, description: notice.description });
  };

  const remove = async (id) => {
    if (!confirm("Delete this notice?")) return;
    await adminService.deleteNotice(id);
    load();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
      <form onSubmit={submit} className="admin-card">
        <h1 className="text-2xl font-black">{editing ? "Edit Notice" : "Create Notice"}</h1>
        <div className="mt-5 grid gap-4">
          <label>Title<input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></label>
          <label>Description<textarea rows="5" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required /></label>
          <button className="btn-primary"><Save size={16} />Save Notice</button>
        </div>
      </form>
      <div>
        <h2 className="text-2xl font-black">Notices</h2>
        <div className="mt-4 grid gap-4">
          {notices.map((notice) => (
            <article key={notice._id} className="admin-card">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold">{notice.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{notice.description}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => edit(notice)} className="rounded-md p-2 text-school-green hover:bg-school-mist"><Pencil size={16} /></button>
                  <button onClick={() => remove(notice._id)} className="rounded-md p-2 text-red-600 hover:bg-red-50"><Trash2 size={16} /></button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
