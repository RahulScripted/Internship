import Image from "next/image";
import Payment from "./components/Payment";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="px-2 md:px-10 py-5 flex flex-col gap-20">
      <Payment />
      <Footer />
    </div>
  );
}
