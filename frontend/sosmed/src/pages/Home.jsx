import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Beranda from "../component/container/Beranda";

function Home() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <div>
          <Navbar />
        </div>

        <div className="mt-12">
          <Beranda />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
