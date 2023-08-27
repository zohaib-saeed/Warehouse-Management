import { Noto_Sans } from "next/font/google";

export const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--notosans-font",
  display: "swap",
});
