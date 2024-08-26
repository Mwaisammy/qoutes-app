import React from "react";
import Header from "../components/header";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div className="bg-lime-600 min-h-screen">
      <Header />

      <div className="container lg:max-w-screen lg:max-auto"> {children}</div>
    </div>
  );
}

export default MainLayout;
