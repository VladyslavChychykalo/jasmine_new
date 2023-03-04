import { useState, useEffect, useRef } from "react";
import { ArrowIcon } from "../../icons";
import Text from "../typography/text";

import styles from "./CustomSelect.module.scss";

const StyledSelect = ({
  currentOption,
  options,
  setCurrentOption,
  className,
}) => {
  const [isSelected, setSelect] = useState(false);

  const selectRef = useRef(null);
  const optionsContainerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (e) => {
    setTimeout(() => {
      if (
        !selectRef.current?.contains(e.target) &&
        !optionsContainerRef.current?.contains(e.target)
      ) {
        setSelect(false);
      }
    }, 0);
  };

  const handleChangeOption = (newOption) => {
    setCurrentOption(newOption);
    setSelect(false);
  };

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div
        className={styles.customSelectWrapper}
        ref={selectRef}
        onClick={() => setSelect((prev) => !prev)}
      >
        <Text size="m" color="green" className={styles.selectOption}>
          {currentOption?.selectName}
        </Text>
        <ArrowIcon isSelected={isSelected} />
      </div>
      {isSelected && (
        <ul className={styles.optionsContainerList} ref={optionsContainerRef}>
          {options.map((option) => (
            <li
              className={`${styles.optionsContainerItem} ${
                currentOption?.id === option.id && styles.actvieOption
              }`}
              key={option.id}
              onClick={() => handleChangeOption(option)}
            >
              <Text size="m" color="green" className={styles.selectOption}>
                {option.selectName}
              </Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StyledSelect;
