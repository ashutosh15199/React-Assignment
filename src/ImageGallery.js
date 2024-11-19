import React, { useState } from "react";

const images = [
  { src: "/image/AZIZI IMAGE .jpg", name: "AZIZI IMAGE" },
  { src: "/image/Aqua arc BNW.jpg", name: "Aqua Arc BNW" },
  { src: "/image/Copy of AZIZI IMAGE .jpg", name: "Copy of AZIZI IMAGE" },
  { src: "/image/Copy of Aqua arc BNW.jpg", name: "Copy of Aqua Arc BNW" },
  { src: "/image/Copy of DAMAC image.jpg", name: "Copy of DAMAC IMAGE" },
  { src: "/image/Copy of Danube image .jpg", name: "Copy of Danube IMAGE" },
  { src: "/image/Copy of EMAAR IMAGE.jpg", name: "Copy of EMAAR IMAGE" },
  { src: "/image/Copy of Ellington Belgrove image.jpg", name: "Ellington Belgrove" },
  { src: "/image/Copy of Prestige One - Seaside.jpg", name: "Prestige One" },
  { src: "/image/DAMAC image.jpg", name: "DAMAC IMAGE" },
  { src: "/image/Danube image .jpg", name: "Danube IMAGE" },
  { src: "/image/EMAAR IMAGE.jpg", name: "EMAAR IMAGE" },
  { src: "/image/Ellington Belgrove image.jpg", name: "Ellington Belgrove" },
  { src: "/image/Prestige One - Seaside.jpg", name: "Prestige One Seaside" },
  { src: "/image/SAMANA IBIZA image.jpg", name: "SAMANA IBIZA" },
  { src: "/image/SOBHA IMAGE.jpg", name: "SOBHA IMAGE" },
  { src: "/image/Copy of SAMANA IBIZA image.jpg", name: "Copy of SAMANA IBIZA" },
  { src: "/image/Copy of SOBHA IMAGE.jpg", name: "Copy of SOBHA IMAGE" },
];

const ITEMS_PER_PAGE = 6;

const ImageGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = images.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center m-auto min-h-screen bg-black w-full text-white px-4 py-6">
      <p className="text-xs tracking-wide text-yellow-500 text-center">CHOOSE YOUR DEVELOPERS</p>
      <h1 className="text-3xl tracking-wide font-normal mt-2 text-center">TOP DEVELOPERS</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {currentImages.map((img, index) => (
          <div
            key={index}
            className="relative group w-full sm:w-64 h-56 sm:h-56 border-[1px] border-yellow-500 cursor-pointer overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.name}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-[1.01]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black rounded-md p-2 opacity-60 group-hover:opacity-40 transition-opacity duration-300">
              <p className="text-white text-sm font-[500] break-words text-center z-50">
                {img.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={` bg-yellow-500 p-2 rounded-[2px] max-h-[32px] flex items-center justify-center ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          &lt;
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={` bg-yellow-500 p-2 rounded-[2px] max-h-[32px] flex items-center justify-center ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;