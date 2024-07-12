
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Wavecart - buy your dream product",
  description: "Wavecart is online shoping app that under development , so don't worry we are trying our best to add your dream products ",
  icons: {icon:'/logo.jpg'}
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
    <div >
    

    <Navbar></Navbar>
      <div className="flex w-full" style={{ height: "88vh" }}>
        <div className=" w-full z-1 overflow-y-scroll">
          {children}
          <Footer></Footer>
        </div>
      </div>
    </div>
    </body>
    </html>
  );
}
