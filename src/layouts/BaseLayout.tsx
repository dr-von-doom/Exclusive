import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Nav from "@/components/Nav";
import Breadcumb from "@/components/Breadcumb";

import { ReactNode } from "react";

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Nav />

      <Breadcumb/>
      {children}
      
      <Footer />
    </div>
  );
};

export default BaseLayout;
