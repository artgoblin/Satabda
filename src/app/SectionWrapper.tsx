import React, { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-white px-4 text-center"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;