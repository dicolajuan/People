import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
// import styles from '../styles/Dashboard.module.css';

export const DashboardPage: FC<RouteComponentProps> = () => {
    return (
        <>
            <section className="container mt-3">
                <div className="content grid">
                    <h1>Hello to Dashboard</h1>
                </div>
            </section>
        </>
    )    

};
