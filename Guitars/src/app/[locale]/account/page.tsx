import { Dictionary } from "@interfaces/dictionary.types";
import { getDictionary } from "@utils/getDictionary";
import Account from "@views/Account/Account";
import { Metadata } from "next";
import { Suspense } from "react";
import SkeletonAccount from "@views/Account/SkeletonAccount/SkeletonAccount";

export const metadata: Metadata = {
  title: "Account",
  description: "Account, profile user",
};

export default async function account({
  params,
  cabinet,
}: {
  params: Promise<{ locale: string }>;
  cabinet: React.ReactNode;
}) {
  const { locale } = await params;
  const dict: Dictionary = await getDictionary(locale);
  const dynamicSlot = (
    <Suspense fallback={<SkeletonAccount />}>{cabinet}</Suspense>
  );

  return (
    <>
      <Account dict={dict} slots={dynamicSlot} />
    </>
  );
}
