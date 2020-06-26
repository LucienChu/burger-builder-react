import React from "react";
import styles from "./input.module.css";
const input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.elementValue}
          onChange={props.onChange}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.elementValue}
          onChange={props.onChange}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          onChange={props.onChange}
          className={styles.InputElement}
          value={props.value}
        >
          {props.elementConfig.options.map((op) => (
            <option value={op.value} key={op.value}>
              {op.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.elementValue}
          onChange={props.onChange}
        />
      );
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
