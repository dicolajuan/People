import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";

export const DashboardPage: FC<RouteComponentProps> = () => {
    return (
        <>
            <section className="container mt-3">
                <div className="content">
                    <h1>Hello to Dashboard</h1>
                </div>
            </section>
        </>
    )    

};
