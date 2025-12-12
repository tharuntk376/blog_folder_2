import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css"; // custom styles

const Card = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/reviews");
        setReviews(response.data || []);
      } catch (error) {
        console.log("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">Customer Reviews</h2>

      {reviews.length > 0 ? (
        <div
          id="reviewCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="d-flex justify-content-center">
                  <div className="review-card shadow rounded-4 bg-white text-center p-4">
                    <img
                      src={review.profile_image}
                      alt={review.name}
                      className="review-avatar"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/150?text=No+Image";
                      }}
                    />

                    <h5 className="fw-bold mt-3">{review.name}</h5>
                    <p className="text-muted">{review.message}</p>
                    <small className="text-secondary">
                      {new Date(review.created_at).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#reviewCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#reviewCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      ) : (
        <p className="text-center">Loading reviews...</p>
      )}
    </div>
  );
};

export default Card;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Card = () => {
//   const [reviews, setReviews] = useState([]);

//   // Fetch reviews from backend API
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/api/reviews");
//         setReviews(response.data);
//       } catch (error) {
//         console.log("Error fetching reviews:", error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   return (
//     <div className="container my-5">
//       <h2 className="text-center fw-bold mb-4">Customer Reviews</h2>

//       <div className="row g-4">
//         {reviews.length > 0 ? (
//           reviews.map((review) => (
//             <div key={review._id} className="col-12 col-md-6 col-lg-4">
//               <div className="p-4 shadow rounded-4 text-center bg-white">
//                 <img
//                   src={review.profile_image}
//                   alt={review.name}
//                   className="rounded-circle"
//                   style={{
//                     width: "90px",
//                     height: "90px",
//                     objectFit: "cover",
//                     border: "3px solid #0d6efd",
//                   }}
//                 />

//                 <h5 className="mt-3 fw-bold">{review.name}</h5>
//                 <p className="text-muted">{review.message}</p>

//                 <small className="text-secondary">
//                   {new Date(review.created_at).toLocaleDateString()}
//                 </small>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center">Loading reviews...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../components/Card.css";
// import { useState,useEffect } from "react";
// import axios from "axios";

// const Card = () => {
//  const [reviews, setReviews] = useState([]);

//  useEffect(() => {
//     // Fetch reviews from an API or use static data
//     const fetchReviews = async () => {
//       // Example static data
//       const reponse =await axios.get("http://localhost:8000/api/reviews");
//       setReviews(reponse.data);
//     };

//     fetchReviews();
//   }, []);

//   return (
//     <div className="container my-5">
//       <h2 className="text-center fw-bold mb-4">What Customers Say</h2>

//       <div className="row g-4">
//           <div className="col-12 col-md-6 col-lg-3">
//             <div className="review-card p-4 shadow rounded-4 text-center">
//               <img
//                 src="https://i.ibb.co/4W2DGKm/user.png"
//                 className="review-img"
//               />
//               <h5 className="mt-3 fw-bold">Customer Name</h5>
//               <p className="text-muted">Customer review message goes here.</p>
//             </div>
//           </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
