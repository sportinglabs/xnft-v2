import buffer from "buffer";
globalThis.Buffer = buffer.Buffer;

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import ErrorPage from "./ErrorPage";
import "./App.css";
import "@solana/wallet-adapter-react-ui/styles.css";
// TODO: refactor screens to not use react-native
import { HomeScreen } from "./screens/HomeScreen";
import { StakingScreen } from "./screens/StakingScreen";
import { LeaderboardScreen } from "./screens/LeaderboardScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <div /> },
      { path: "leaderboard", element: <div /> },
      {
        path: "staking",
        element: <div />,
      },
    ],
  },
]);

function App() {
  return (
    <ConnectionProvider endpoint={import.meta.env.VITE_RPC_URL_MAINNET}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
            <RouterProvider router={router} />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
