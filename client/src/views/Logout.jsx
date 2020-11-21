import React, { useEffect } from "react";

function Logout() {
  useEffect(() => {
    localStorage.removeItem("userId");
    window.location.href = `${window.location.origin}`;
  }, []);

  return <div>Logout...</div>;
}

export default Logout;
