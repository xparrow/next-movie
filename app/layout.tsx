import "../styles/global.css";
import { Metadata } from "next"
import dynamic from "next/dynamic";

const DynamicNavigationNoSSR = dynamic(
  ()=> import("../components/navgation"),
  {ssr:false}
);
export const metadata:Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: 'The best movies on the best framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <DynamicNavigationNoSSR />
        {children}
      </body>
    </html>
  )
}
