import React, { useEffect } from "react";
import { ApolloProvider } from "@apollo/client";
import { apolloPublicClient } from "./api/apolloClient";
import HomeCommonPage from "./pages/homeCommon";
import { nhost } from "./api/nhost";

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      const usuario = nhost.auth.getUser();
    }, 3000);
  }, []);
  return (
    <React.StrictMode>
      <ApolloProvider client={apolloPublicClient}>
        <HomeCommonPage />
      </ApolloProvider>
    </React.StrictMode>
  );
}
