import { Inter } from "next/font/google";
import AppLayout from "@/components/templates/app";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      main
    </main>
  );
}

Home.Layout = AppLayout;

export default Home;
