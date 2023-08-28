import React, { Children, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...restProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.navbar, {}, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
