
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";
import SmallStatus from './components/SmallStatus';
export const metadata = {
  title: "Wavecart - buy your dream product",
  description: "Wavecart is online shoping app that under development , so don't worry we are trying our best to add your dream products ",
  icons: {icon:'/logo.jpg'}
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
     <Head>
     <meta name="google-site-verification" content="kyG8eDRP3DrsUgqZf-Wlyhs-OCFsNQx0-yAeNZYYSv8" />
     <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
     </Head>
      <body>
      <amp-ad width="100vw" height="320"
     type="adsense"
     data-ad-client="ca-pub-3651936152350906"
     data-ad-slot="7473030135"
     data-auto-format="rspv"
     data-full-width="">
  <div overflow=""></div>
</amp-ad>
    <div >
    

    <Navbar></Navbar>
      <div className="flex w-full h-full " style={{ height: "100vh" }}>
        <div className=" w-full h-full pb-28 z-1 overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
    </body>
    </html>
  );
}
