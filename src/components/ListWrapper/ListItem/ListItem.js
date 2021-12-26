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
        <p>{id}</p>
        <p>{date}</p>
        <p>{job}</p>
        <p>{location}</p>
        <p>{telephone}</p>
        <p>{presureLow}</p>
        <p>{presureHigh}</p>
        <p>{tempIn}</p>
        <p>{tempOut}</p>
        <p>{tempDelta}</p>
    </li>
);

export default ListItem;
