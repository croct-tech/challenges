"use client";

import { useMemo, useState } from "react";
import styles from "./FocusWidget.module.css";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI"] as const;
const HOURS = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm"] as const;

/** 0 = livre · 1 = reunião (bloqueado) · 2 = focus block */
type SlotState = 0 | 1 | 2;

const SEED: SlotState[][] = [
  [0, 1, 0, 0, 1],
  [0, 1, 0, 0, 0],
  [2, 2, 2, 1, 0],
  [2, 2, 2, 1, 0],
  [0, 0, 1, 0, 2],
  [1, 0, 1, 0, 2],
  [0, 0, 0, 1, 0],
  [1, 0, 0, 1, 0],
];

function labelFor(state: SlotState) {
  if (state === 2) return "focus block";
  if (state === 1) return "meeting, busy";
  return "open slot";
}

export default function FocusWidget() {
  const [grid, setGrid] = useState<SlotState[][]>(() => SEED.map((row) => [...row]));

  const protectedHours = useMemo(
    () => grid.flat().filter((state) => state === 2).length,
    [grid]
  );

  const toggle = (row: number, col: number) => {
    setGrid((prev) =>
      prev.map((r, ri) =>
        ri !== row ? r : r.map((v, ci) => (ci !== col ? v : v === 2 ? 0 : 2))
      )
    );
  };

  return (
    <div className={styles.widget}>
      <div className={styles.head}>
        <span className={styles.week}>WEEK OF MAR 9 · TRY IT — CLICK A SLOT</span>
        <span className={styles.counter}>
          <strong>{protectedHours}</strong> hrs protected
        </span>
      </div>

      <div className={styles.cal}>
        <div />
        {DAYS.map((day) => (
          <div key={day} className={styles.colHead}>
            {day}
          </div>
        ))}

        {HOURS.map((hour, rowIdx) => (
          <FragmentRow
            key={hour}
            hour={hour}
            row={grid[rowIdx]}
            rowIdx={rowIdx}
            onToggle={toggle}
          />
        ))}
      </div>

      <div className={styles.foot}>
        <div className={styles.legend}>
          <span>
            <i className={`${styles.dot} ${styles.free}`} />
            Open
          </span>
          <span>
            <i className={`${styles.dot} ${styles.busy}`} />
            Meeting
          </span>
          <span>
            <i className={`${styles.dot} ${styles.focus}`} />
            Focus block
          </span>
        </div>
        <span className={styles.hint}>Click to toggle</span>
      </div>
    </div>
  );
}

function FragmentRow({
  hour,
  row,
  rowIdx,
  onToggle,
}: {
  hour: string;
  row: SlotState[];
  rowIdx: number;
  onToggle: (row: number, col: number) => void;
}) {
  return (
    <>
      <div className={styles.rowLabel}>{hour}</div>
      {row.map((state, colIdx) => {
        const isBusy = state === 1;
        return (
          <button
            key={`${rowIdx}-${colIdx}`}
            type="button"
            disabled={isBusy}
            data-event="hero_widget_slot_toggle"
            aria-pressed={state === 2}
            aria-label={`${DAYS[colIdx]} ${hour} ${labelFor(state)}`}
            className={`${styles.slot} ${state === 2 ? styles.active : ""} ${
              isBusy ? styles.busySlot : ""
            }`}
            onClick={() => onToggle(rowIdx, colIdx)}
          />
        );
      })}
    </>
  );
}
