import React, { useEffect, useState } from "react";

import { login } from './msalInstance'
import RecentEmails from "./RecentEmails";

function App() {

  const [loginResult, setLoginResult] = useState<any>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (!loginResult) {
      login()
        .then((loginResult) => {
          setLoginResult(loginResult);
        })
        .catch((err) => {
          setError(err);
        });
    }
  }, [loginResult]);

  return (
    <>
      <p>Anyone can see this paragraph.</p>
      {loginResult ? (
        <>
          <p>Signed in as: {loginResult?.account?.userName}</p>
          <RecentEmails accessToken={loginResult?.accessToken} />
        </>
      ) : (
        <>
          <p>No users are signed in!</p>
        </>
      )}
      <p>{error?.message}</p>
    </>
  );
}

export default App;
