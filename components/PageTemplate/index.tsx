import React from "react";
import { Navbar, PageHead, Sidebar } from "..";

type PageTemplateProps = {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  description?: string;
  keywords?: string;
};

export const PageTemplate = ({
  children,
  title,
  description,
  keywords,
}: PageTemplateProps) => {
  return (
    <>
      <PageHead title={title} description={description} keywords={keywords} />
      <div className="container m-auto flex">
        <Sidebar />
        <div className="grow p-8">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
};
