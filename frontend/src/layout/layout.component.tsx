import React from "react";
import { NavBar } from "./navbar";
import { ILayoutProps } from "../interfaces/layout";

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
};
