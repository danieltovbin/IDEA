import React, {
  Dispatch,
  FC,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getProjectById } from "../API/Projects/projectClientCtrl";
import { Gift } from "../components/edit/Submissions/AddGift";

interface GiftContextProps {
  giftAdded: Gift[];
  setGiftAdded: Dispatch<React.SetStateAction<Gift[]>>;
}

interface GiftProviderProps {
  children: React.ReactNode;
}

const GiftContext = createContext<GiftContextProps | undefined>(undefined);

export const GiftProvider: FC<GiftProviderProps> = ({ children }) => {
  const [giftAdded, setGiftAdded] = useState<Gift[]>([]);
  const getGifts = async () => {
    try {
      const currentProject = await getProjectById();
      if (currentProject && currentProject.gifts) {
        console.log(currentProject.gifts);
        return currentProject.gifts;
      }
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to be caught by the caller
    }
  };

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        const giftsDB = await getGifts();
        if (giftsDB && giftsDB.length > 0) {
          setGiftAdded(giftsDB);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchGifts();
  }, []);

  return (
    <GiftContext.Provider value={{ giftAdded, setGiftAdded }}>
      {children}
    </GiftContext.Provider>
  );
};

export const useGiftContext = () => {
  const context = useContext(GiftContext);

  if (!context) {
    throw new Error("useGiftContext must be used whithin a GiftProvidier");
  }

  return context;
};
