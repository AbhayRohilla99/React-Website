import React, { useState, useRef } from 'react';
import Slider from "react-slick";
import { FaSearchPlus, FaShareAlt, FaExpand, FaTimes, FaArrowLeft, FaArrowRight, FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

// Custom Previous Arrow
const PrevArrow = ({ className, style, onClick }) => (
    <div 
        className={`${className} z-50`} 
        style={{ ...style, display: "block", left: "-25px", color: "black" }} 
        onClick={onClick}>
        <FaArrowLeft size={24} />
    </div>
);

// Custom Next Arrow
const NextArrow = ({ className, style, onClick }) => (
    <div 
        className={`${className} z-50`} 
        style={{ ...style, display: "block", right: "-25px", color: "black" }} 
        onClick={onClick}>
        <FaArrowRight size={24} />
    </div>
);

const Division = () => {

    const [isOpen, setIsOpen] = useState(false); 
    const [currentImage, setCurrentImage] = useState(0); 
    const [isZoomed, setIsZoomed] = useState(false); 
    const [showShareOptions, setShowShareOptions] = useState(false); 
    const imageRef = useRef(null); 
 const items = new Array(8).fill("sec");  

    
    const openModal = (index) => {
        setCurrentImage(index);
        setIsOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setIsOpen(false);
        setIsZoomed(false);  
    };

   
    const sliderSettings = {
        initialSlide: currentImage,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,  // Custom previous arrow
        nextArrow: <NextArrow />,  // Custom next arrow
    };

    
    const handleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    
    const handleExpand = () => {
        if (imageRef.current) {
            if (imageRef.current.requestFullscreen) {
                imageRef.current.requestFullscreen();
            } else if (imageRef.current.mozRequestFullScreen) { 
                imageRef.current.mozRequestFullScreen();
            } else if (imageRef.current.webkitRequestFullscreen) {
                imageRef.current.webkitRequestFullscreen();
            } else if (imageRef.current.msRequestFullscreen) { 
                imageRef.current.msRequestFullscreen();
            }
        }
    };

    // Toggle social share options
    const toggleShareOptions = () => {
        setShowShareOptions(!showShareOptions);
    };

    return (
        <>
    <div className="flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Show Your Space Some Love.</h1>
      <p className="text-gray-600 text-lg">
        We take care of each home as if it were our own. All our team members passed
       
      </p>
      <span className='text-gray-600 text-lg'>background checks, are friendly and reliable.</span>
    </div>
            {/* Image Grid */}
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 mt-10">
                {items.map((item, index) => (
                    <div key={index} className='lg:w-[20%]'>
                        <img
                            src={`/${item}${index + 1}.jpeg`}
                            alt={`${item}${index + 1}`}
                            className="shadow-lg cursor-pointer"
                            onClick={() => openModal(index)}  
                        />
                    </div>
                ))}
            </div>

            
            {isOpen && (
                <div className="fixed top-24 inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[1000]">
                    <div className="relative bg-white max-lg: w-full p-5 rounded-lg">
                        
                        <div className="absolute top-2 right-4 flex space-x-4 text-black">
                            <button className="text-black" onClick={handleZoom}>
                                <FaSearchPlus size={24} />
                            </button>
                            <button className="text-black" onClick={handleExpand}>
                                <FaExpand size={24} />
                            </button>
                            <button className="text-black" onClick={toggleShareOptions}>
                                <FaShareAlt size={24} />
                            </button>
                            <button className="text-black" onClick={closeModal}>
                                <FaTimes size={24} />
                            </button>
                        </div>

                       
                        {showShareOptions && (
                            <div className="absolute top-12 right-4 flex space-x-2 text-black">
                                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                    <FaFacebook size={24} />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                    <FaInstagram size={24} />
                                </a>
                                <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
                                    <FaWhatsapp size={24} />
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                                    <FaTwitter size={24} />
                                </a>
                            </div>
                        )}

                       
                        <Slider {...sliderSettings}>
                            {items.map((item, index) => (
                                <div key={index} className="flex justify-center items-center">
                                    <img
                                        ref={imageRef} 
                                        src={`/${item}${index + 1}.jpeg`}
                                        alt={`${item}${index + 1}`}
                                        className={`w-full h-auto object-contain ${isZoomed ? 'scale-150' : 'scale-100'} transition-transform duration-300 ease-in-out max-h-[80vh]`}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}
        </>
    );
};

export default Division;
