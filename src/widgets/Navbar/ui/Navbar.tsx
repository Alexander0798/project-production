import { FC } from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
}

export const Navbar: FC<Props> = ({ className }: Props) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
                    {t("Главная")}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    {t("О сайте")}
                </AppLink>
            </div>
        </div>
    );
};
