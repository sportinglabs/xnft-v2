import buffer from "buffer";
globalThis.Buffer = buffer.Buffer;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
//default routes
import { Layout } from "./Layout";
import ErrorPage from "./routes/ErrorPage";
//routes
import { Home } from "./routes/Home";
import { Staking } from "./routes/Staking";
import { Leaderboard } from "./routes/Leaderboard";

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
