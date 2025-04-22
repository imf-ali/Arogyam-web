import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "../styles/utils/ExpandableItem.module.css";

const ExpandableItem = ({ title, children, variant = "default"}) => {
  const [isOpen, setIsOpen] = useState(false);

  function combineClasses(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const containerClass = combineClasses(
    styles.dropdownContainer,
    variant === "default" && styles.default,
    variant === "bordered" && styles.bordered,
    variant === "minimal" && styles.minimal,
    isOpen ? styles.open : styles.closed
  );

  const triggerClass = combineClasses(
    styles.trigger,
    variant === "default" && styles.triggerDefault,
    variant === "bordered" && styles.triggerBordered,
    variant === "minimal" && styles.triggerMinimal
  );

  const iconClass = styles.icon;

  return (
    <div className={containerClass}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={triggerClass}
        type="button"
      >
        <h2 className={styles.title}>{title}</h2>
        {isOpen ? (
          <ChevronUp className={iconClass} />
        ) : (
          <ChevronDown className={iconClass} />
        )}
      </button>
      <div className={styles.dropdownContentWrapper}>
        <div className={styles.dropdownContent}>{children}</div>
      </div>
    </div>
  );
}

export default ExpandableItem;