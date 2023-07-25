import React, { useState } from "react";
import routes from "./routes";
import Layout from "./components/Layout";
import Pages from "./pages/Pages";

export const PageContext = React.createContext(
  {} as {
    pageTitle: string;
    setPageTitle: (value: ((prevState: string) => string) | string) => void;
  },
);

function App() {
  const [pageTitle, setPageTitle] = useState<string>("Bookkeep");

  return (
    <PageContext.Provider
      value={{ pageTitle: pageTitle, setPageTitle: setPageTitle }}
    >
      <Layout
        contents={() => <Pages />}
        navItems={routes}
        pageTitle={pageTitle}
      />
    </PageContext.Provider>
  );
}

export default App;
