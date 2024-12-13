import React from "react";
import styles from "./Plans.module.css";

const Plans = () => {
  const plans = [
    {
      name: "Basic",
      description: "Accesso a tutti i contenuti in qualità SD",
      price: "€7.99/month",
      extra: "Solo uno schermo contemporaneamente",
    },
    {
      name: "Standard",
      description: "Accedi a tutti i contenuti in qualità HD",
      price: "€11.99/month",
      extra: "Guarda su 2 schermi contemporaneamente",
    },
    {
      name: "Premium",
      description: "Accedi a tutti i contenuti in qualità4K",
      price: "€15.99/month",
      extra: "Guarda su 4 schermi contemporaneamente",
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
          <button>Fai l'upgrade</button>
        </div>
      ))}
    </div>
  );
};

export default Plans;
