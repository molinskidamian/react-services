import React from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./ListWrapper.module.scss";

const ListWrapper = ({ services }) => (
    <ul className={styles.wrapper}>
        {services.map((service) => (
            <ListItem key={service.id} {...service} />
        ))}
    </ul>
);

export default ListWrapper;
