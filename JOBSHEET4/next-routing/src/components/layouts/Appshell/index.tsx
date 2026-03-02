import type { ReactNode } from "react";
import Navbar from "../navbar";

type AppShellProps = {
  children: ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  return (
    <main>
      <Navbar />
      {children}
      <div>footer</div>
    </main>
  );
};

export default AppShell;
