import { useTranslation } from "react-i18next";
import { FC } from "react";

const MainPage: FC = () => {
    const { t } = useTranslation("mainPage");
    return <div>{t("Главная страница")}</div>;
};

export default MainPage;
