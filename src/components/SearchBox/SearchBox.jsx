import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  const searchId = useId();
  return (
    <div>
      <label htmlFor={searchId} className={css.label}>
        Find contacts by name
      </label>
      <input
        className={css.field}
        type="text"
        name="search"
        id={searchId}
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
