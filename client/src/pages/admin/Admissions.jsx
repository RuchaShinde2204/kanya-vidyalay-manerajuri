import { Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { adminService } from "../../services/adminService";

export default function Admissions() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  const load = () => adminService.admissions(search).then(({ data }) => setItems(data));

  useEffect(() => {
    load().catch(() => setItems([]));
  }, []);

  const remove = async (id) => {
    if (!confirm("Delete this admission application?")) return;
    await adminService.deleteAdmission(id);
    load();
  };

  const updateStatus = async (id, status) => {
  try {
    await adminService.updateAdmissionStatus(id, status);

    setItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, status }
          : item
      )
    );
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div>
      <h1 className="text-3xl font-black text-school-ink">Admissions</h1>
      <form onSubmit={(e) => { e.preventDefault(); load(); }} className="mt-5 flex max-w-xl gap-2">
        <input placeholder="Search by student, parent, phone, grade" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className="btn-primary"><Search size={16} />Search</button>
      </form>
      <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr><th className="p-3">Student</th><th className="p-3">Grade</th><th className="p-3">Parent</th><th className="p-3">Contact</th><th className="p-3">Document</th><th className="p-3">Status</th><th className="p-3">Action</th></tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-3 font-semibold">{item.studentName}</td>
                <td className="p-3">{item.gradeApplyingFor}</td>
                <td className="p-3">{item.parentName}</td>
                <td className="p-3">{item.contactNumber}</td>
                <td className="p-3">
                {item.documentUrl ? (
                  <div className="flex gap-2">
                    <a
                      href={item.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-school-green px-3 py-2 text-sm text-white hover:bg-green-700"
                    >
                      View
                    </a>

                    <a
                      href={item.documentUrl}
                      download
                      className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
                    >
                      Download
                    </a>
                  </div>
                ) : (
                  <span className="text-slate-400">None</span>
                )}
              </td>
                <td className="p-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === "Approved"
                      ? "bg-green-100 text-green-700"
                      : item.status === "Rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.status || "Pending"}
                </span>
              </td>
               <td className="p-3">
                <div className="flex flex-wrap gap-2">

                  <button
                    onClick={() => updateStatus(item._id, "Approved")}
                    className="rounded-md bg-green-600 px-3 py-1 text-xs font-medium text-white hover:bg-green-700"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => updateStatus(item._id, "Rejected")}
                    className="rounded-md bg-red-600 px-3 py-1 text-xs font-medium text-white hover:bg-red-700"
                  >
                    Reject
                  </button>

                  <button
                    onClick={() => remove(item._id)}
                    className="rounded-md p-2 text-red-600 hover:bg-red-50"
                  >
                    <Trash2 size={16} />
                  </button>

                </div>
              </td>
              <td>
              <a
                  href={`https://wa.me/91${item.contactNumber}?text=${encodeURIComponent(
                    `Dear Parent, your child's admission application has been approved by Kanya Vidyalay Manerajuri.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-green-600 px-3 py-1 text-white"
                >
                  WhatsApp
                </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
