import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ClientReviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      id: 1,
      name: "Shirley Tymchuk",
      date: "10 November 2023",
      rating: 5,
      review:
        "This company is top notch! They are very professional, use a nice platform for cleaning...",
    },
    {
      id: 2,
      name: "Michael Pare",
      date: "13 October 2023",
      rating: 5,
      review: "The cleaner was awesome and did a fantastic job!",
    },
    {
      id: 3,
      name: "Julia Montanaro",
      date: "30 September 2023",
      rating: 5,
      review: "The cleaning job is second to none. Extremely thorough!",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-[#F5F7FA]">
      <h2 className="text-3xl font-bold text-center mb-6">
        Read what our clients are saying
      </h2>

<div className="flex gap-[30px] w-full justify-center mx-auto items-center ">
      <div className=" mb-6 ">
        <div className="text-center">
          <h3 className="text-xl font-bold">EXCELLENT</h3>
          <div className="text-yellow-400 text-2xl">★★★★★</div>
          <p className="text-sm">Based on 71 reviews</p>
          <div className="text-blue-600 text-3xl">Google</div>
        </div>
      </div>

      <div className=" md:w-3/5 mx-auto">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="p-4">
              <div className="border rounded-lg p-6 bg-white shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="ml-4">
                    <h4 className="font-bold">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="text-yellow-400">{"★".repeat(review.rating)}</div>
                <p className="text-gray-700 mt-4">{review.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </div>
  );
};

// Custom navigation buttons
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
      style={{ zIndex: 1 }}
    >
      <FaChevronLeft size={20} />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
      style={{ zIndex: 1 }}
    >
      <FaChevronRight size={20} />
    </button>
  );
};

export default ClientReviews;
