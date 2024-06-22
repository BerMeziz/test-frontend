"use client"

import { Inter } from "next/font/google";
import { ReduxProviders } from "@/store/reduxProvider";
import Navbar1 from "@/components/navbar/Navbar1";
import Navbar2 from "@/components/navbar/Navbar2";
import Footer from "@/components/footer/Footer";

import { searchNameSelector } from "@/store/features/searchoff";
import { useSelector } from "@/store";
import SearchCard from "@/components/searchbar/SearchCard";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {searchName} = useSelector(searchNameSelector)

  return (
    <ReduxProviders>
      <main lang="en" className="flex flex-col justify-between">
        <section className={inter.className}>
          <div>
            <Navbar1 />
            <Navbar2 />
          </div>
          {searchName !== "" ?  <SearchCard/> : <div className=""> {children}</div>}
           
          {/* <footer>
            <Footer />
          </footer> */}
        </section>
      </main>
    </ReduxProviders>
  );
}
