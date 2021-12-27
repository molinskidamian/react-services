import React from "react";
import styles from "./FormService.module.scss";

const FormService = ({ submitFn }) => (
    <form onSubmit={submitFn} className={styles.wrapper}>
        <label>
            Date:
            <input type='datetime-local' placeholder='Choose date' />
        </label>
        <label>
            Job:
            <select>
                <option>Choose</option>
                <option>Service</option>
                <option>Replace</option>
                <option>Furnish</option>
                <option>Dismantle</option>
            </select>
        </label>
        <label>
            Location:
            <select>
                <option>Choose</option>
                <option>2.1</option>
                <option>2.2</option>
                <option>3.1</option>
            </select>
        </label>
        <label>
            Telephone:
            <input placeholder='Telephone number' />
        </label>
        <label>
            Presure Low:
            <input />
        </label>
        <label>
            Presure Hight:
            <input />
        </label>
        <label>
            Temperature in:
            <input />
        </label>
        <label>
            Temperature out:
            <input />
        </label>
        <label>
            Temperature delta:
            <input />
        </label>
        <button>Dodaj</button>
    </form>
);
export default FormService;
