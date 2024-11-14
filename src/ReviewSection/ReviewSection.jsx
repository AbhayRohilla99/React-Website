// ReviewSection.js
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Bill Mang',
    date: '23 September 2024',
    source: 'Google',
    text: "We were very impressed with Shine. This is our 2nd experience. Their staff were very professional and dedicated. We would certainly use Shine again.",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png' // Placeholder image, replace with actual URL if available
  },
  {
    id: 2,
    name: 'Brian Danielson',
    date: '29 August 2024',
    source: 'Google',
    text: "Hired Shine for a deep clean and they sent Jimmy and Sara who did a fantastic job and are great people. Their office communicated proactively the morning of the appointment and afterwards to ensure satisfaction. Really a great experience!!",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png' // Placeholder image, replace with actual URL if available
  },
  {
    id: 3,
    name: 'Brian Danielson',
    date: '29 August 2024',
    source: 'Google',
    text: "Hired Shine for a deep clean and they sent Jimmy and Sara who did a fantastic job and are great people. Their office communicated proactively the morning of the appointment and afterwards to ensure satisfaction. Really a great experience!!",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png' // Placeholder image, replace with actual URL if available
  },
  {
    id: 4,
    name: 'Brian Danielson',
    date: '29 August 2024',
    source: 'Google',
    text: "Hired Shine for a deep clean and they sent Jimmy and Sara who did a fantastic job and are great people. Their office communicated proactively the morning of the appointment and afterwards to ensure satisfaction. Really a great experience!!",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png' // Placeholder image, replace with actual URL if available
  },
  {
    id: 5,
    name: 'Brian Danielson',
    date: '29 August 2024',
    source: 'Google',
    text: "Hired Shine for a deep clean and they sent Jimmy and Sara who did a fantastic job and are great people. Their office communicated proactively the morning of the appointment and afterwards to ensure satisfaction. Really a great experience!!",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png' // Placeholder image, replace with actual URL if available
  },
  {
    id: 6,
    name: 'Brian Danielson',
    date: '29 August 2024',
    source: 'Google',
    text: "Hired Shine for a deep clean and they sent Jimmy and Sara who did a fantastic job and are great people. Their office communicated proactively the morning of the appointment and afterwards to ensure satisfaction. Really a great experience!!",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png' // Placeholder image, replace with actual URL if available
  },
  {
    id: 7,
    name: 'Brian Danielson',
    date: '29 August 2024',
    source: 'Google',
    text: "Hired Shine for a deep clean and they sent Jimmy and Sara who did a fantastic job and are great people. Their office communicated proactively the morning of the appointment and afterwards to ensure satisfaction. Really a great experience!!",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png' // Placeholder image, replace with actual URL if available
  },
  {
    id: 8,
    name: 'Brian Danielson',
    date: '29 August 2024',
    source: 'Google',
    text: "Hired Shine for a deep clean and they sent Jimmy and Sara who did a fantastic job and are great people. Their office communicated proactively the morning of the appointment and afterwards to ensure satisfaction. Really a great experience!!",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png' // Placeholder image, replace with actual URL if available
  },
  {
    id: 9,
    name: 'Brian Danielson',
    date: '29 August 2024',
    source: 'Google',
    text: "Hired Shine for a deep clean and they sent Jimmy and Sara who did a fantastic job and are great people. Their office communicated proactively the morning of the appointment and afterwards to ensure satisfaction. Really a great experience!!",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png' // Placeholder image, replace with actual URL if available
  },
  {
    id: 10,
    name: 'Brian Danielson',
    date: '29 August 2024',
    source: 'Google',
    text: "Hired Shine for a deep clean and they sent Jimmy and Sara who did a fantastic job and are great people. Their office communicated proactively the morning of the appointment and afterwards to ensure satisfaction. Really a great experience!!",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png' // Placeholder image, replace with actual URL if available
  },
  {
    id: 11,
    name: 'Brian Danielson',
    date: '29 August 2024',
    source: 'Google',
    text: "Hired Shine for a deep clean and they sent Jimmy and Sara who did a fantastic job and are great people. Their office communicated proactively the morning of the appointment and afterwards to ensure satisfaction. Really a great experience!!",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png' // Placeholder image, replace with actual URL if available
  },
  {
    id: 12,
    name: 'Brian Danielson',
    date: '29 August 2024',
    source: 'Google',
    text: "Hired Shine for a deep clean and they sent Jimmy and Sara who did a fantastic job and are great people. Their office communicated proactively the morning of the appointment and afterwards to ensure satisfaction. Really a great experience!!",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png'
  },
  {
    id: 13,
    name: 'Brian Danielson',
    date: '29 August 2024',
    source: 'Google',
    text: "Hired Shine for a deep clean and they sent Jimmy and Sara who did a fantastic job and are great people. Their office communicated proactively the morning of the appointment and afterwards to ensure satisfaction. Really a great experience!!",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png' 
  },
  {
    id: 14,
    name: 'Brian Danielson',
    date: '29 August 2024',
    source: 'Google',
    text: "Hired Shine for a deep clean and they sent Jimmy and Sara who did a fantastic job and are great people. Their office communicated proactively the morning of the appointment and afterwards to ensure satisfaction. Really a great experience!!",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png' 
  },
  {
    id: 15,
    name: 'Brian Danielson',
    date: '29 August 2024',
    source: 'Google',
    text: "Hired Shine for a deep clean and they sent Jimmy and Sara who did a fantastic job and are great people. Their office communicated proactively the morning of the appointment and afterwards to ensure satisfaction. Really a great experience!!",
    verifiedText: "Trustindex verifies that the original source of the review is Google.",
    profilePic: 'review.png' 
  }
  


  
];

const ReviewSection = () => {
  return (
<>
    
    <div className="p-8  mx-auto w-full  text-gray-700 space-y-8 bg-[#F5F5F5] mt-5 ">
    <h1 className='text-center text-[40px]  text-black font-bold'>Read what our clients are saying</h1>
    
      <div className="text-xl font-bold">
        EXCELLENT
      </div>
      <div className="text-md">
        Based on <a href="https://www.trustindex.io/reviews/bookshine.ca" className="text-blue-500 underline">71 reviews</a>
        <img src="logo.svg" className='w-[110px] mt-3' />
      </div>
      

      
     <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="flex items-start space-x-4 border-t border-gray-300 pt-6">
            <img src={review.profilePic} alt={review.name} className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-gray-900 font-semibold">{review.name}</p>
              <p className="text-sm text-gray-500">{review.date}</p>
              <p className="text-sm text-gray-500 italic">{review.verifiedText}</p>
              <p className="mt-2 text-gray-800">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ReviewSection;
