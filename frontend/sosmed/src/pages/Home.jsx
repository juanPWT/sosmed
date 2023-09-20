import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Beranda from "../component/container/Beranda";

function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <div className="fixed top-0 z-50">
          <Navbar />
        </div>

        <div className="mt-5 z-0">
          <Beranda />
        </div>

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
