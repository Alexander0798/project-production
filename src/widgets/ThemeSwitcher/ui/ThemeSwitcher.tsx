import { FC } from "react";
import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
interface Props {
    className?: string;
}

export const ThemeSwitcher: FC<Props> = ({ className }: Props) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
