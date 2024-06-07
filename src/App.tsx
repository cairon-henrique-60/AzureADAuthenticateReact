import { useEffect, useState } from "react";
import { useMsal, useMsalAuthentication } from "@azure/msal-react";
import { AccountInfo, InteractionType } from "@azure/msal-browser";

import CircularProgress from "@mui/material/CircularProgress";

function App() {
  useMsalAuthentication(InteractionType.Redirect);
  const { accounts } = useMsal();
  const redirectUrl = import.meta.env.VITE_REDIRECT;

  const [user, setUser] = useState<AccountInfo | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const username = accounts[0];
        if (username) {
          setUser(username);
        }
      } catch (e) {
        setUser(null);
      }
    }

    fetchUser();
  }, [accounts, redirectUrl]);

  if (user?.username)
    return (
      <div className="App">
        <div>User: {user?.username || "Error"}</div>
      </div>
    );
  else
    return (
      <div
        style={{
          display: "grid",
          placeItems: "center",
          zIndex: 900,
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          background: "rgba(14, 14, 14, 0.3)",
        }}
      >
        <CircularProgress />
      </div>
    );
}

export default App;
