import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { Nav } from "@/components/common/Nav";

import { ReactNode } from "react";

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Nav />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export default BaseLayout;
