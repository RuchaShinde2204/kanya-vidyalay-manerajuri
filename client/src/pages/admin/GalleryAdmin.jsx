import { Upload, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { adminService } from "../../services/adminService";
import { publicService } from "../../services/publicService";
import { galleryCategories } from "../../utils/constants";

export default function GalleryAdmin() {
  const [images, setImages] = useState([]);
  const [form, setForm] = useState({ category: "Campus", image: null });

  const load = () => publicService.getGallery().then(({ data }) => setImages(data));
  useEffect(() => { load().catch(() => setImages([])); }, []);

  const submit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("category", form.category);
    data.append("image", form.image);
    await adminService.uploadGallery(data);
    setForm({ category: "Campus", image: null });
    e.target.reset();
    load();
  };

  const remove = async (id) => {
    if (!confirm("Delete this gallery image?")) return;
    await adminService.deleteGallery(id);
    load();
  };

  return (
    <div>
      <h1 className="text-3xl font-black text-school-ink">Gallery Management</h1>
      <form onSubmit={submit} className="admin-card mt-5 grid gap-4 md:grid-cols-[220px_1fr_auto] md:items-end">
        <label>Category<select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>{galleryCategories.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label>Image<input type="file" accept="image/*" onChange={(e) => setForm({ ...form, image: e.target.files[0] })} required /></label>
        <button className="btn-primary"><Upload size={16} />Upload</button>
      </form>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image) => (
          <figure key={image._id} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <img src={image.imageUrl} alt={image.category} className="h-48 w-full object-cover" />
            <figcaption className="flex items-center justify-between p-3 text-sm font-semibold">
              {image.category}
              <button onClick={() => remove(image._id)} className="rounded-md p-2 text-red-600 hover:bg-red-50"><Trash2 size={16} /></button>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
