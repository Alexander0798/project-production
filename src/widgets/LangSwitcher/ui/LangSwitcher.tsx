import { FC } from "react";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface Props {
    className?: string;
}

export const LangSwitcher: FC<Props> = ({ className }: Props) => {
    const { t, i18n } = useTranslation();
    const onToggle = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    };
    return (
        <Button theme={ThemeButton.CLEAR} onClick={onToggle} className={classNames(cls.LangSwitcher, {}, [className])}>
            {t("Язык")}
        </Button>
    );
};
