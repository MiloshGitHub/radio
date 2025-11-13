import React from "react";

export default function Exhibition() {
  const images = [
    "https://picsum.photos/id/1015/400/300",
    "https://picsum.photos/id/1021/400/300",
    "https://picsum.photos/id/1035/400/300",
    "https://picsum.photos/id/1043/400/300",
  ];

  return (
    <section className="page exhibition">
      <h2>Exhibition Space</h2>
      <div className="gallery">
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Artwork ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}
