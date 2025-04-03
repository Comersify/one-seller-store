import { ReactNode } from "react";

export const metadata = {
  title: "Home | Products",
  description: "Discover Planet games products & categories",
};

type LayoutProps = {
  children: ReactNode; // Type the children prop
};
export default function RootLayout({ children }: LayoutProps) {
  return children;
}
