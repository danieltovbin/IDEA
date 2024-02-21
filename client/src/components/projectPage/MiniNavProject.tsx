import { useState } from "react";

const MiniNavProject = () => {
  const [navigateNum, setNavigateNum] = useState(0);

  return (
    <div>
      <nav>
        <li onClick={()=>{setNavigateNum(0)}}>על הפרוייקט</li>
        <li onClick={()=>{setNavigateNum(1)}}>תומכים.ות</li>
        <li onClick={()=>{setNavigateNum(2)}}>עדכונים</li>
        <li onClick={()=>{setNavigateNum(3)}}>תגובות</li>
      </nav>
      {(() => {
        switch (navigateNum) {
          case 0:
            return <>על הפרוייקט</>;
          case 1:
            return <div>תומכים.ות</div>;
          case 2:
            return <div>עדכונים</div>;
          case 3:
            return <div>תגובות</div>;
          default:
            return <div>על הפרוייקט</div>;
        }
      })()}
    </div>
  );
};

export default MiniNavProject;
