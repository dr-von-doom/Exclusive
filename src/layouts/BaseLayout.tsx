import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default BaseLayout;
