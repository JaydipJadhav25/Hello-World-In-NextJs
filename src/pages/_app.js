import "@/styles/globals.css";
import { parseSetCookie } from "next/dist/compiled/@edge-runtime/cookies";

export default function App({ Component, pageProps }) {
  return <>
     <h1>hello from Jaydip</h1>
     <Component{...pageProps}/>
     <h1>ThanK You </h1>
  </>;
}
