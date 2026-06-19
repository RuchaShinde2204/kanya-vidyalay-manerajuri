import { useEffect, useState } from "react";
import GalleryGrid from "../components/GalleryGrid";
import { publicService } from "../services/publicService";
import { galleryCategories } from "../utils/constants";

export default function Gallery() {
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    publicService
      .getGallery(category)
      .then(({ data }) => setImages(data))
      .catch(() => setImages([]));
  }, [category]);

  return (
    <div className="container-page py-12">

      {/* Hero Section */}
      <div className="mb-10 rounded-3xl bg-gradient-to-r from-school-green to-green-700 p-10 text-white shadow-xl">
        <h1 className="text-5xl font-black">School Gallery</h1>

        <p className="mt-4 max-w-3xl text-lg text-green-100">
          Explore memorable moments, school activities, annual functions,
          sports events, cultural programs, achievements, and campus life
          at Kanya Vidyalay Manerajuri.
        </p>
      </div>

      {/* Statistics */}
      <div className="mb-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
          <h2 className="text-4xl font-black text-school-green">
            {images.length}+
          </h2>
          <p className="mt-2 text-slate-600">Photos Available</p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
          <h2 className="text-4xl font-black text-school-green">
            {galleryCategories.length}
          </h2>
          <p className="mt-2 text-slate-600">Categories</p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl">
          <h2 className="text-4xl font-black text-school-green">100%</h2>
          <p className="mt-2 text-slate-600">School Memories</p>
        </div>
      </div>

      {/* Filter */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-school-ink">
            Browse Photos
          </h2>
          <p className="text-slate-500">
            Select a category to view specific photos.
          </p>
        </div>

        <select
          className="max-w-xs rounded-lg border border-slate-300 bg-white px-4 py-3 shadow-sm focus:border-school-green focus:outline-none"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">All Categories</option>

          {galleryCategories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Gallery Grid */}
      <GalleryGrid images={images} />
    </div>
  );
}