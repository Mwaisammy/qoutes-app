import React from "react";
import Header from "../components/header";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div className="bg-lime-600 min-h-screen p-5">
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
