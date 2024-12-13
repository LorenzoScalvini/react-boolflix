import React from "react";
import styles from "./Plans.module.css";

const Plans = () => {
  const plans = [
    {
      name: "Basic",
      description: "Access to all content in SD quality",
      price: "€7.99/month",
      extra: "Only 1 screen at a time",
    },
    {
      name: "Standard",
      description: "Access to all content in HD quality",
      price: "€11.99/month",
      extra: "Watch on 2 screens at a time",
    },
    {
      name: "Premium",
      description: "Access to all content in 4K UHD quality",
      price: "€15.99/month",
      extra: "Watch on 4 screens at a time",
    },
  ];

  return (
    <div className={styles.plansContainer}>
      {plans.map((plan, index) => (
        <div className={styles.planCard} key={index}>
          <h3>{plan.name}</h3>
          <p>{plan.description}</p>
          <span>{plan.price}</span>
          <p className={styles.extra}>{plan.extra}</p>{" "}
          {/* Descrizione aggiuntiva */}
          <button>Choose Plan</button>
        </div>
      ))}
    </div>
  );
};

export default Plans;
