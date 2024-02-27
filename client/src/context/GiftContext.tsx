import React, { Dispatch, FC, createContext, useContext, useState } from 'react'
import { Gift } from '../components/edit/Submissions/AddGift'

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


    return (
        <GiftContext.Provider value={{ giftAdded, setGiftAdded }}>
            {children}
        </GiftContext.Provider>
    )
};


export const useGiftContext = () => {
    const context = useContext(GiftContext);

    if (!context) {
        throw new Error('useGiftContext must be used whithin a GiftProvidier')
    }

    return context;
};















