import "@styles/global.css";
import { RUBIK } from "@fonts/rubik";
import PageContainer from "@layout/PageContainer/PageContainer";
import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import dynamic from "next/dynamic";
const ScrollUp = dynamic(() => import("@components/buttons/ScrollUp/ScrollUp"));

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ua" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale ? locale : "en");

  return (
    <html lang="en" className={RUBIK.variable} suppressHydrationWarning={true}>
      <body>
        <PageContainer>
          <Header dictionary={dict.components.header} />
          {children}
          <Footer dict={dict.components.footer} />
          <ScrollUp />
        </PageContainer>
      </body>
    </html>
  );
}
