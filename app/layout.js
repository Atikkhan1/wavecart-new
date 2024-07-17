
import "./globals.css";
import Navbar from "./components/Navbar";

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
      <div className="flex w-full pb-6" style={{ height: "88vh" }}>
        <div className=" w-full z-1 overflow-y-scroll">
          {children}
          
        </div>
      </div>
    </div>
    </body>
    </html>
  );
}
