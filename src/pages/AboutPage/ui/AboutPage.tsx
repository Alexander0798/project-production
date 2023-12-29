import { useTranslation } from "react-i18next";

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');
    return <div>{t("О сайте")}</div>;
};

export default AboutPage;
