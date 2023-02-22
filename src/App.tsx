import buffer from "buffer";
globalThis.Buffer = buffer.Buffer;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import ErrorPage from "./ErrorPage";
import "./App.css";
import { Home } from "./screens/Home";
import { Staking } from "./screens/Staking";
import { Leaderboard } from "./screens/Leaderboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "staking", element: <Staking /> },
      { path: "leaderboard", element: <Leaderboard /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
