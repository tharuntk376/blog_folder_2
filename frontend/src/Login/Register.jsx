import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/auth/register", form);

      setForm({
        username: "",
        email: "",
        password: ""
      });

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="container-ld min-vh-80 d-flex justify-content-center align-items-center bg-opacity-10 mt-5">
      <div
        className="card shadow-lg border-0 rounded-4"
        style={{ maxWidth: "420px", width: "100%" }}
      >
        <div className="card-header bg-warning text-dark text-center rounded-top-4 py-3">
          <h4 className="fw-bold mb-0">Create Your Account</h4>
          <small>Secure & fast registration</small>
        </div>

        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>
              <input
                type="text"
                name="username"
                className="form-control form-control-lg"
                placeholder="Enter username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                name="password"
                className="form-control form-control-lg"
                placeholder="Minimum 6 characters"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-warning btn-lg w-100 fw-bold">
              Register
            </button>
          </form>
        </div>

        <div className="card-footer text-center bg-light">
          <small>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-warning fw-bold text-decoration-none"
              style={{ cursor: "pointer" }}
            >
              Login
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Register;







// import { useState } from "react";
// import axios from "axios";

// function Register() {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    

//     try {
//       await axios.post("http://localhost:2000/api/auth/register", form);
//       alert("Account created successfully");
//     } catch (err) {
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="container-lg min-vh-80 d-flex justify-content-center align-items-center bg-opacity-10">
//       <div className="card shadow-lg border-0 rounded-4" style={{ maxWidth: "420px", width: "100%" }}>
        
//         <div className="card-header bg-warning text-dark text-center rounded-top-4 py-3">
//           <h4 className="fw-bold mb-0">Create Your Account</h4>
//           <small>Secure & fast registration</small>
//         </div>

//         <div className="card-body p-4">
//           <form onSubmit={handleSubmit}>

//             <div className="mb-3">
//               <label className="form-label fw-semibold">Username</label>
//               <input
//                 type="text"
//                 name="username"
//                 className="form-control form-control-lg"
//                 placeholder="Enter username"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label fw-semibold">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="form-control form-control-lg"
//                 placeholder="Enter email"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label className="form-label fw-semibold">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control form-control-lg"
//                 placeholder="Minimum 6 characters"
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <button className="btn btn-warning btn-lg w-100 fw-bold">
//               Register
//             </button>
//           </form>
//         </div>

//         <div className="card-footer text-center bg-light">
//           <small>
//             Already have an account?{" "}
//             <span className="text-warning fw-bold" style={{ cursor: "pointer" }}>
//               Login
//             </span>
//           </small>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Register;
