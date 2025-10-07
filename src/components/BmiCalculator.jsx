// src/components/BmiCalculator/BmiCalculator.jsx
import React, { useState } from "react";
import styles from "./BmiCalculator.module.css";
import { FaWeight, FaRulerVertical, FaSyncAlt } from "react-icons/fa";

export default function BmiCalculator() {
  // unit: "metric" => cm/kg ; "imperial" => ft/in & lb
  const [unit, setUnit] = useState("metric");

  // metric fields
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");

  // imperial fields
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weightLb, setWeightLb] = useState("");

  // results
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [minHealthyWeight, setMinHealthyWeight] = useState(null);
  const [maxHealthyWeight, setMaxHealthyWeight] = useState(null);
  const [error, setError] = useState("");

  // Helpers
  const round = (num, decimals = 1) =>
    Math.round((num + Number.EPSILON) * 10 ** decimals) / 10 ** decimals;

  const resetResults = () => {
    setBmi(null);
    setCategory("");
    setMinHealthyWeight(null);
    setMaxHealthyWeight(null);
    setError("");
  };

  const handleUnitToggle = (u) => {
    resetResults();
    setUnit(u);
    // clear fields when switching
    setHeightCm("");
    setWeightKg("");
    setHeightFt("");
    setHeightIn("");
    setWeightLb("");
  };

  // BMI category logic (WHO-ish)
  const bmiCategory = (val) => {
    if (val < 16) return "Severe Thinness";
    if (val >= 16 && val < 17) return "Moderate Thinness";
    if (val >= 17 && val < 18.5) return "Mild Thinness";
    if (val >= 18.5 && val < 25) return "Normal (Healthy)";
    if (val >= 25 && val < 30) return "Overweight";
    if (val >= 30 && val < 35) return "Obese Class I";
    if (val >= 35 && val < 40) return "Obese Class II";
    return "Obese Class III";
  };

  // Main calculation
  const handleCalculate = (e) => {
    e.preventDefault();
    setError("");
    resetResults();

    let hMeters;
    let weightInKg;

    if (unit === "metric") {
      const h = parseFloat(heightCm);
      const w = parseFloat(weightKg);
      if (!h || !w || h <= 0 || w <= 0) {
        setError("Kripya sahi height (cm) te weight (kg) da value deo.");
        return;
      }
      hMeters = h / 100;
      weightInKg = w;
    } else {
      const ft = parseFloat(heightFt);
      const inch = parseFloat(heightIn || 0);
      const lb = parseFloat(weightLb);
      if ((!ft && ft !== 0) || ft < 0 || (!lb && lb !== 0) || lb <= 0) {
        setError("Kripya sahi height (ft/in) te weight (lb) da value deo.");
        return;
      }
      // total inches
      const totalInches = ft * 12 + (isNaN(inch) ? 0 : inch);
      if (totalInches <= 0) {
        setError("Height sahi nahi hai.");
        return;
      }
      // convert to meters and kg
      const cm = totalInches * 2.54;
      hMeters = cm / 100;
      weightInKg = lb * 0.45359237;
    }

    // BMI
    const bmiVal = weightInKg / (hMeters * hMeters);
    const bmiRounded = round(bmiVal, 1);
    setBmi(bmiRounded);
    setCategory(bmiCategory(bmiRounded));

    // Healthy weight range for height: BMI 18.5 - 24.9
    const minW = 18.5 * hMeters * hMeters;
    const maxW = 24.9 * hMeters * hMeters;
    setMinHealthyWeight(round(minW, 1));
    setMaxHealthyWeight(round(maxW, 1));
  };

  const handleReset = () => {
    setHeightCm("");
    setWeightKg("");
    setHeightFt("");
    setHeightIn("");
    setWeightLb("");
    resetResults();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>BMI & Ideal Weight Calculator</h2>

      <div className={styles.unitToggle}>
        <button
          className={`${styles.unitBtn} ${
            unit === "metric" ? styles.active : ""
          }`}
          onClick={() => handleUnitToggle("metric")}
        >
          Metric (cm / kg)
        </button>
        <button
          className={`${styles.unitBtn} ${
            unit === "imperial" ? styles.active : ""
          }`}
          onClick={() => handleUnitToggle("imperial")}
        >
          Imperial (ft/in / lb)
        </button>
      </div>

      <form className={styles.form} onSubmit={handleCalculate}>
        {unit === "metric" ? (
          <>
            <label className={styles.label}>
              <FaRulerVertical className={styles.icon} /> Height (cm)
            </label>
            <input
              className={styles.input}
              type="number"
              min="0"
              step="0.1"
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value)}
              placeholder="e.g., 170"
            />

            <label className={styles.label}>
              <FaWeight className={styles.icon} /> Weight (kg)
            </label>
            <input
              className={styles.input}
              type="number"
              min="0"
              step="0.1"
              value={weightKg}
              onChange={(e) => setWeightKg(e.target.value)}
              placeholder="e.g., 70"
            />
          </>
        ) : (
          <>
            <label className={styles.label}>
              <FaRulerVertical className={styles.icon} /> Height (ft / in)
            </label>
            <div className={styles.row}>
              <input
                className={`${styles.input} ${styles.half}`}
                type="number"
                min="0"
                step="1"
                value={heightFt}
                onChange={(e) => setHeightFt(e.target.value)}
                placeholder="ft (e.g., 5)"
              />
              <input
                className={`${styles.input} ${styles.half}`}
                type="number"
                min="0"
                step="1"
                value={heightIn}
                onChange={(e) => setHeightIn(e.target.value)}
                placeholder="in (e.g., 8)"
              />
            </div>

            <label className={styles.label}>
              <FaWeight className={styles.icon} /> Weight (lb)
            </label>
            <input
              className={styles.input}
              type="number"
              min="0"
              step="0.1"
              value={weightLb}
              onChange={(e) => setWeightLb(e.target.value)}
              placeholder="e.g., 154"
            />
          </>
        )}

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.actions}>
          <button type="submit" className={styles.calcBtn}>
            Calculate
          </button>
          <button
            type="button"
            onClick={handleReset}
            className={styles.clearBtn}
            title="Reset"
          >
            <FaSyncAlt /> Reset
          </button>
        </div>
      </form>

      {/* Results */}
      {bmi !== null && (
        <div className={styles.results}>
          <h3>Your Results</h3>
          <p>
            <strong>BMI:</strong> {bmi} kg/m²
          </p>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Healthy weight range for your height:</strong>{" "}
            {minHealthyWeight} kg — {maxHealthyWeight} kg
          </p>

          {/* Suggestion */}
          <div className={styles.suggestion}>
            {bmi < 18.5 && (
              <p>
                You are underweight. Consult a trainer/dietician for healthy
                weight gain program. Small muscle-building workouts + protein
                rich diet recommended.
              </p>
            )}
            {bmi >= 18.5 && bmi < 25 && (
              <p>
                Great — your BMI is in the healthy range. Maintain balanced diet
                and regular exercise to stay fit.
              </p>
            )}
            {bmi >= 25 && (
              <p>
                You are above the healthy range. Cardio + strength training and
                a controlled diet can help reduce BMI. Consult trainer Sahil
                Sharma for a program.
              </p>
            )}
          </div>
        </div>
      )}

      <p className={styles.note}>
        Note: BMI is a simple screening tool — not a clinical diagnosis. For
        personalised advice consult a doctor or certified trainer.
      </p>
    </div>
  );
}
