import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    
      <div className="justify-items-center align-middle w-full">
        <div className="bg-orange-500 h-44">
        <h1>Hello World</h1>
        <p>From : <b>Jaydip Jadhav</b></p>
      </div>
      </div>
    
  );
}

