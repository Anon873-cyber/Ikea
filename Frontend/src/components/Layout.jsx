import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import TopBanner from "./TopBanner/TopBanner";

function Layout() {
  return (
    <div className="min-h-screen flex w-full flex-col">
      
      <TopBanner />
      <NavBar />

      {/* This pushes footer down */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default Layout;