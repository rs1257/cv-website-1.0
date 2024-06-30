import Footer from "@/components/footer/footer";
import "./globals.scss";
import Nav from "@/components/nav/nav";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import theme from "../config/theme";
import { Victor_Mono } from "next/font/google";

const victorMono = Victor_Mono({
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={victorMono.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <div className="main">
              <Nav />
              <main>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
