import { ReactNode } from "react";

interface IScreenLayoutProps {
  children?: ReactNode;
}

export default function ScreenLayout({ children }: IScreenLayoutProps) {
  return (
    <div className="w-screen min-h-screen h-full flex">
      <div className="w-full h-full p-10">{children}</div>
    </div>
  );
}
