import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");

  // Load gallery
  const fetchGallery = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/gallery");
      setImages(response.data);
    } catch (error) {
      console.log("Error loading gallery:", error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Upload image
  const handleUpload = async () => {
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);

    try {
      await axios.post("http://localhost:8000/api/gallery/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Uploaded!");
      setFile(null);
      setTitle("");

      // Load gallery again (NO RELOAD)
      fetchGallery();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="fw-bold text-center mb-4">Image Gallery</h2>

      {/* Upload Form */}
      <div className="card p-4 shadow-sm mb-5">
        <h4 className="fw-bold">Upload Image</h4>

        <input
          type="text"
          className="form-control my-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="file"
          className="form-control my-2"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button className="btn btn-primary" onClick={handleUpload}>
          Upload
        </button>
      </div>

      {/* Gallery */}
      <div className="row g-4">
        {images.map((img) => (
          <div key={img._id} className="col-6 col-md-4 col-lg-3">
            <div className="card shadow-sm border-0 rounded-4">
              <img
                src={img.image_url}
                className="card-img-top rounded-4"
                style={{ height: "220px", objectFit: "cover" }}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=Image+Not+Found";
                }}
              />
              <div className="card-body text-center">
                <h6 className="fw-bold">{img.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && <p className="text-center">No images found.</p>}
    </div>
  );
};

export default Gallery;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Gallery = () => {
//   const [images, setImages] = useState([]);
// const [file, setFile] = useState(null);
// const [title, setTitle] = useState("");

//   useEffect(() => {
//     const fetchGallery = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/api/gallery");
//         setImages(response.data);
//       } catch (error) {
//         console.log("Error loading gallery:", error);
//       }
//     };

//     fetchGallery();
//   }, []);

//   return (
//     <div className="container my-5">
//       <h2 className="fw-bold text-center mb-4">Image Gallery</h2>
// <input type="file" className="my-5" placeholder="Upload an image" />

//       <div className="row g-4">
//         {images.map((img) => (
//           <div key={img._id} className="col-6 col-md-4 col-lg-3">
//             <div className="card shadow-sm border-0 rounded-4">
//               <img
//                 src={img.image_url}
//                 className="card-img-top rounded-4"
//                 style={{ height: "220px", objectFit: "cover" }}
//               />
//               <div className="card-body text-center">
//                 <h6 className="fw-bold">{img.title}</h6>
//                 <p className="text-muted">{img.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {images.length === 0 && <p className="text-center">No images found.</p>}


//     </div>
//   );
// };

// export default Gallery;
