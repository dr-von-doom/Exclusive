import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Nav from "@/components/Nav";

import { ReactNode } from "react";

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Nav />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default BaseLayout;
