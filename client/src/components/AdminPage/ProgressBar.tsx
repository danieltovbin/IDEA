import { FC } from "react";
import "./progressBar.scss";

interface ProgressBarProps {
  aid: number;
  raised: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ aid, raised }) => {
  const percentRaised = parseInt(
    (((raised == null ? 0 : raised) / aid) * 100).toString()
  );
  return (
    <div className="progressBar">
      <div
        className={
          percentRaised < 99 ? "progress" : "progress projectCompleted"
        }
        style={{ width: `${percentRaised}%` }}
      ></div>
      <p
        className={
          percentRaised < 99 ? "percentP" : "percentP percentPCompleted"
        }
        style={{
          position: "relative",
          top: "calc(-100% - 20px )",
          right: `calc(${percentRaised > 3 ? percentRaised : 3}%  - 20px)`,
        }}
      >
        {percentRaised}%
      </p>
    </div>
  );
};

export default ProgressBar;
