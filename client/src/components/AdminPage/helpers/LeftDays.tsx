import { FC, useEffect, useState } from "react";

const LeftDays: FC<{ limitDate: string }> = ({ limitDate }) => {
  const [leftDays, setLeftDays] = useState<number>(0);

  useEffect(() => {
    if (limitDate && typeof limitDate === "string") {
      const date = new Date(limitDate);
      const today = new Date();
      const theDays = Math.ceil(
        (date.getTime() - today.getTime()) / (1000 * 3600 * 24)
      );
      setLeftDays(theDays);
    }
  }, [limitDate]);

  return (
    <div>
      <h4>{leftDays}</h4>
    </div>
  );
};

export default LeftDays;
