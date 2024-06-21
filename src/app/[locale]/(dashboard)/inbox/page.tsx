import { NextPage } from "next";
import React from "react";
import initTranslations from "@/app/i18n";

const InboxPage: NextPage = async () => {
  const { t } = await initTranslations("my", "default");
  return <div>{t("about_us")}</div>;
};

export default InboxPage;
