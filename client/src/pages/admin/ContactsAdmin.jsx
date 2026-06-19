import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { adminService } from "../../services/adminService";

export default function ContactsAdmin() {
  const [messages, setMessages] = useState([]);
  const load = () => adminService.contacts().then(({ data }) => setMessages(data));

  useEffect(() => { load().catch(() => setMessages([])); }, []);

  const remove = async (id) => {
    if (!confirm("Delete this message?")) return;
    await adminService.deleteContact(id);
    load();
  };

  return (
    <div>
      <h1 className="text-3xl font-black text-school-ink">Contact Messages</h1>
      <div className="mt-6 grid gap-4">
        {messages.map((message) => (
          <article key={message._id} className="admin-card">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-bold">{message.name}</h2>
                <p className="text-sm text-school-green">{message.email}</p>
                <p className="mt-3 leading-7 text-slate-600">{message.message}</p>
              </div>
              <button onClick={() => remove(message._id)} className="rounded-md p-2 text-red-600 hover:bg-red-50"><Trash2 size={16} /></button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
