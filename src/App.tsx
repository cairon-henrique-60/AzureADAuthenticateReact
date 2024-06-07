import { useEffect, useState } from "react";
import "./App.css";
import { useMsal, useMsalAuthentication } from "@azure/msal-react";
import { AccountInfo, InteractionType } from "@azure/msal-browser";

import Loader from "./Components/Loader";

function App() {
  useMsalAuthentication(InteractionType.Redirect);
  const { accounts } = useMsal();
  const redirectUrl = import.meta.env.VITE_REDIRECT;

  const [m_strUser, setm_strUser] = useState<AccountInfo | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const username = accounts[0];
        if (username) {
          setm_strUser(username);
          console.log(import.meta.env.VITE_REDIRECT);
          window.location.href = `${redirectUrl}/userName=${username.idTokenClaims?.name}userEmail=${username.idTokenClaims?.preferred_username}`;
        }
      } catch (e) {
        console.log(e);
      }
    }

    fetchUser();
  }, [accounts, redirectUrl]);

  if (m_strUser?.username)
    return (
      <div className="App">
        <div>User: {m_strUser?.username}</div>
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
        <Loader />
      </div>
    );
}

export default App;
