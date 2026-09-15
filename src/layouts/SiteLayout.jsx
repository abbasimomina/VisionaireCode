import { Outlet } from "react-router-dom";

import { Header } from "../components/ui/Header.jsx";
import { Footer } from "../components/ui/Footer.jsx";

export function SiteLayout() {
  return (
    <div className="site">

      <Header />

      <main className="site__main">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}