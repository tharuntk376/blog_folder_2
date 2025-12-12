import React, { useState,useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [reviews, setReviews] = useState([]);

  fetchReviews = async() => {
  const response = await axios.get('http://localhost:8000/api/reviews')
  setReviews(response.data);
  };

  useEffect(() => {
    // Fetch existing reviews from an API or local storage (Static Example)
    fetchReviews();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted (Static Example)");
  };

  return (
<>


    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-4 p-4" style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h3 className="text-center mb-3 fw-bold">Customer Review</h3>

        <form onSubmit={handleSubmit}>
          
          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Message */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Your Review</label>
            <textarea
              className="form-control rounded-3"
              rows="4"
              placeholder="Write your review..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* Profile Image */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Profile Image URL</label>
            <input
              type="text"
              className="form-control rounded-3"
              placeholder="Paste image link"
              value={profileImage}
              onChange={(e) => setProfileImage(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100 rounded-3">
            Submit Review
          </button>
        </form>
      </div>
    </div>
    {
        reviews.map((reviews)=>{
{/* <Card reviews={reviews}/> */}
        })

    }
</>

  );
};

export default Form;
