import NavigationBar from "@/components/navigation-bar";
import React from "react";

export default function HomepageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (

      <div className="max-w-screen-xl px-4 mx-auto">
        <NavigationBar />
        {children}
      </div>
  );
}
