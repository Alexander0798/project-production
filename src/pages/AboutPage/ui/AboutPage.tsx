import { useTranslation } from "react-i18next";
import { FC } from "react";

const AboutPage: FC = () => {
    const { t } = useTranslation("aboutPage");
    return <div>{t("О сайте")}</div>;
};

export default AboutPage;
