import React from "react";
import styles from "./ListItem.module.scss";

const ListItem = ({
    id,
    date,
    job,
    location,
    telephone,
    presureLow,
    presureHigh,
    tempIn,
    tempOut,
    tempDelta,
}) => (
    <li className={styles.wrapper}>
        <p>id: {id}</p>
        <p>Date: {date}</p>
        <p>Job: {job}</p>
        <p>Location: {location}</p>
        <p>Telephone: {telephone}</p>
        <p>Presure Low: {presureLow}</p>
        <p>Presure Hight: {presureHigh}</p>
        <p>Temperature In: {tempIn}</p>
        <p>Temperature Out: {tempOut}</p>
        <p>Temperature Delta: {tempDelta}</p>
    </li>
);

export default ListItem;
