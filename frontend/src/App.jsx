import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Home from "./components/Home";

function App() {
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/home" /> : <Register />
          }
        />

        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/home" /> : <Login />
          }
        />

        <Route
          path="/home"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Register from "./Login/Register";
// import Login from "./Login/Login";
// import Home from "./components/Home";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token);
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={isAuthenticated ? <Navigate to="/home" /> : <Register />}
//         />

//         <Route
//           path="/login"
//           element={
//             isAuthenticated ? (
//               <Navigate to="/home" />
//             ) : (
//               <Login setIsAuthenticated={setIsAuthenticated} />
//             )
//           }
//         />

//         <Route
//           path="/home"
//           element={
//             isAuthenticated ? (
//               <Home setIsAuthenticated={setIsAuthenticated} />
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




