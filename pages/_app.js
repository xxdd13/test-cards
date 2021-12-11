import { useRouter } from "next/router";
import "../global.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <Component {...pageProps} key={router.route} />;
}

export default MyApp;
