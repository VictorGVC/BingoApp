import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header style={{ padding: "1rem", background: "#eee" }}>
        <h1>Header teste</h1>
      </header>

      <main style={{ padding: "1rem" }}>{children}</main>

      <footer style={{ padding: "1rem", background: "#eee" }}>
        <p>Footer teste</p>
      </footer>
    </div>
  );
};

export default Layout;
