import { useTranslation } from "react-i18next";

export const t = (key: string) => {
    const translate = useTranslation();

    return translate.t(key)
}