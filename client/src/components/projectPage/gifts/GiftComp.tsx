import { FC, useState } from "react";
import ChosenGiftDisplay from "./ChosenGiftDisplay";
import GiftFirstDisplay from "./GiftFirstDisplay";
import "./giftCompStyle.scss";
interface GiftCompProps {
  gift: Gift;
  project: Project;
}
const GiftComp: FC<GiftCompProps> = ({ gift, project }) => {
  const [IsChosenGift, setIsChosenGift] = useState(false);

  const handleClickOnGift = () => {
    setIsChosenGift(true);
  };
  return (
    <div className="giftComp">
      {!IsChosenGift ? (
        <GiftFirstDisplay onClick={handleClickOnGift} gift={gift} project={project} />
      ) : (
        <ChosenGiftDisplay gift={gift} project={project} />
      )}
    </div>
  );
};

export default GiftComp;
