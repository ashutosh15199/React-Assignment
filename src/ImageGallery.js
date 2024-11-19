import React, { useState } from "react";

const images = [
  { src: "/image/AZIZI IMAGE .jpg", name: "Azizi Developments" },
  { src: "/image/Aqua arc BNW.jpg", name: "BnW Developments" },
  { src: "/image/Copy of DAMAC image.jpg", name: "Damac Properties" },
  { src: "/image/Copy of EMAAR IMAGE.jpg", name: "Emaar Properties" },
  { src: "/image/Copy of Danube image .jpg", name: "Danube Properties" },
  { src: "/image/SOBHA IMAGE.jpg", name: "Sobha Realty" },
  { src: "/image/Copy of Ellington Belgrove image.jpg", name: "Ellington Properties" },
  { src: "/image/Prestige One - Seaside.jpg", name: "Prestige One Developments" },
  { src: "/image/SAMANA IBIZA image.jpg", name: "Samana Developer" },
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
      <p className="text-xs tracking-wide text-[var(--primary-color)] text-center">CHOOSE YOUR DEVELOPERS</p>
      <h1 className="text-3xl tracking-wide font-normal mt-2 text-center">TOP DEVELOPERS</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {currentImages.map((img, index) => (
          <div
            key={index}
            className="relative group w-full sm:w-64 h-56 sm:h-56 border-[1px] border-[var(--primary-color)]  cursor-pointer overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.name}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-[1.05] filter brightness-90 contrast-120 saturate-120"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black p-2 opacity-60 group-hover:bg-opacity-40 transition-opacity duration-300 backdrop-blur-sm z-10">
            <div className="flex items-center justify-center absolute inset-0">
              <p className="!text-white w-[115px] text-base font-[600] break-words text-center z-50">
                {img.name}
              </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-2">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`bg-[var(--primary-color)] p-2 rounded-[4px] max-h-[36px] flex items-center justify-center hover:opacity-80 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          &lt;
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`bg-[var(--primary-color)] p-2 rounded-[4px] max-h-[36px] flex items-center justify-center hover:opacity-80 ${
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