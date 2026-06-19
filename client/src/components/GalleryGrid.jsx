import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function GalleryGrid({ images }) {
  if (!images?.length) {
    return (
      <p className="rounded-xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
        No gallery images available yet.
      </p>
    );
  }

  return (
    <PhotoProvider>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <PhotoView key={image._id} src={image.imageUrl}>
            <figure
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              <div className="overflow-hidden">
                <img
                  src={image.imageUrl}
                  alt={image.category}
                  className="
                    h-64
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              <figcaption className="flex items-center justify-between p-4">
                <span
                  className="
                    rounded-full
                    bg-green-100
                    px-3
                    py-1
                    text-sm
                    font-semibold
                    text-school-green
                    transition-all
                    duration-300
                    group-hover:bg-school-green
                    group-hover:text-white
                  "
                >
                  {image.category}
                </span>

                <span className="text-xs text-slate-400">
                  Click to view
                </span>
              </figcaption>
            </figure>
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
}