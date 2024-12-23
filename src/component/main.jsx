import React, { useState, useEffect } from "react";


const Main = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80",
      alt: "Luxury car on mountain road",
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80",
      alt: "Red sports car",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80",
      alt: "Classic car",
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
      alt: "Modern SUV",
    },
  ];

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 2000); 

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen bg-cover bg-center">
      <div className="background-container">
        {backgroundImages.map((img, index) => (
          <div
            key={img.id}
            className={`background-image ${
              index === currentImage ? "visible" : ""
            }`}
            style={{
              backgroundImage: `url(${img.url})`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <h1 className="text-5xl font-bold mb-6">Find Your Perfect Ride</h1>
        <p className="text-xl mb-8">
          Rent the car of your dreams with just a few clicks. Choose from a wide
          range of vehicles, including luxury cars, sports cars, and family-friendly
          SUVs. Affordable prices, flexible rental plans, and unmatched customer
          service await you!
        </p>
     
      </div>
      {/* Navigation buttons */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentImage ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentImage(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Main;
