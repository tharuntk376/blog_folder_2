import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        form
      );

      // save data in redux store
      dispatch(
        loginSuccess({
          token: res.data.token,
          user: res.data.user,
        })
      );

      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-warning bg-opacity-10">
      <div
        className="card shadow-lg border-0 rounded-4"
        style={{ maxWidth: "420px", width: "100%" }}
      >
        <div className="card-header bg-warning text-dark text-center py-3">
          <h4 className="fw-bold mb-0">Welcome Back</h4>
          <small>Login to continue</small>
        </div>

        <div className="card-body p-4">
          {error && (
            <div className="alert alert-danger text-center py-2">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
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
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="btn btn-warning btn-lg w-100 fw-bold"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        <div className="card-footer text-center bg-light">
          <small>
            Don’t have an account?{" "}
            <Link to="/" className="text-warning fw-bold">
              Register
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Login;





// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// function Login({ setIsAuthenticated }) {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await axios.post(
//         "http://localhost:8000/api/auth/login",
//         form
//       );

//       // save data
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       // 🔑 IMPORTANT
//       setIsAuthenticated(true);

//       navigate("/home");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-warning bg-opacity-10">
//       <div
//         className="card shadow-lg border-0 rounded-4"
//         style={{ maxWidth: "420px", width: "100%" }}
//       >
//         <div className="card-header bg-warning text-dark text-center py-3">
//           <h4 className="fw-bold mb-0">Welcome Back</h4>
//           <small>Login to continue</small>
//         </div>

//         <div className="card-body p-4">
//           {error && (
//             <div className="alert alert-danger text-center py-2">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label fw-semibold">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="form-control form-control-lg"
//                 value={form.email}
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
//                 value={form.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <button
//               className="btn btn-warning btn-lg w-100 fw-bold"
//               disabled={loading}
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>
//         </div>

//         <div className="card-footer text-center bg-light">
//           <small>
//             Don’t have an account?{" "}
//             <Link to="/" className="text-warning fw-bold">
//               Register
//             </Link>
//           </small>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
