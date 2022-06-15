import React from "react";
import { NavBar } from "./navbar";
import { Props } from "../interfaces/childrenNode";

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <NavBar />

            {children}
        </>
    );
};
