
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
    <div >
    

    <Navbar></Navbar>
      <div className="flex w-full" style={{ height: "88vh" }}>
        <div className=" w-full overflow-y-scroll">
          {children}
          <Footer></Footer>
        </div>
      </div>
    </div>
    </body>
    </html>
  );
}
