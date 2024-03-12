import Svg from './util/Svg'
import './scss/supporter.scss'
import { getAllDonations, getDonationsByProject } from '../../../API/Donation/donationClientCtl'
import { Donation } from '../../../vite-env'
import { useEffect, useState } from 'react'

const Supporters = () => {
    const [donations, setdonations] = useState<Donation[]>([])
    const [allDonations, setAllDonations] = useState<Donation[]>([])
    console.log("donations from Supporters", donations);

    const fetchAllDonations = async()=>{
        try {
            const response = await getAllDonations()
            if(response && response.allDonations){
                const {allDonations} = response;
                console.log('allDonations: ', allDonations)
                setAllDonations(allDonations)
            } else{
                setAllDonations([])
            }
        } catch (error) {
            console.error(error);
        }
    }

    const allDonationsByProject =async()=>{
        try {
            const response = await getDonationsByProject()
            if(response && response.allDonations){
                const {allDonations} = response;
                console.log('allDonations: ', allDonations)
                setdonations(allDonations)
            }else{
                setdonations([])
            }
        } catch (error) {
            console.error(error);
            setdonations([]);
        }
    }

    useEffect(()=>{
        allDonationsByProject();
        fetchAllDonations()
    },[])

    const sumOfGifts = (userId:string)=>{
        if(!userId || userId == "") return 1;
        const userDonate = allDonations.filter((donate:Donation)=> donate.userToken == userId).length
        return userDonate
    }


    

    return (
        <div className='supporter'>
            <ul>{donations && donations.map((donation,index)=>(
                <li key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        {donation.anonymous ? <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{width: "40px", height: "40px", fill: "rgb(255, 13, 144)"}}><path d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M12,1C5.9,1,1,5.9,1,12 s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1z"></path><path d="M18.3,18.8c-0.3,0-0.5-0.2-0.5-0.5c0-3.2-2.6-5.7-5.7-5.7s-5.7,2.6-5.7,5.7 c0,0.3-0.2,0.5-0.5,0.5s-0.5-0.2-0.5-0.5c0-3.8,3-6.8,6.8-6.8s6.8,3,6.8,6.8C18.8,18.6,18.6,18.8,18.3,18.8z"></path><path d="M12,10.4c-2,0-3.7-1.6-3.7-3.7S10,3.1,12,3.1s3.7,1.6,3.7,3.7S14,10.4,12,10.4z M12,4.2 c-1.5,0-2.6,1.1-2.6,2.6s1.1,2.6,2.6,2.6s2.6-1.1,2.6-2.6S13.5,4.2,12,4.2z"></path></svg> :  <img style={{ width: '40px', height: '40px', fill: 'rgb(255, 13, 144)' }} src="https://headstart.co.il/static/anonymousUserAvatars/headstart/anonymous5Support.webp" alt="" />}
                       
                        <div style={{ marginRight: '5px' }}>
                            <p style={{ fontSize: '11px', fontWeight: 'bold' }}>{donation.name} </p>
                            <p style={{ fontSize: '11px' }}>הד-סטאר</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', paddingLeft: '30%' }}>
                        <div style={{ display: 'flex', margin: '0 18px', marginTop: '5px' }}>
                            <Svg />
                            <div style={{ marginRight: '5px' }}>
                                <p style={{ fontSize: '11px' }}>הצטרפ.ה לפרויקט ב:</p>
                                <p style={{ fontSize: '11px', fontWeight: 'bold' }}>{donation.date.split('T',1)}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', margin: '0 18px', marginTop: '5px' }}>
                            <div style={{ margin: 'auto' }}>
                                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '24px', height: '24px', fill: 'rgb(72, 173, 2)' }}>
                                    <path d="M12.59,20.5a5.54,5.54,0,0,1-3.92-1.62l-4.5-4.5a1.53,1.53,0,0,1-.43-1.05,1.48,1.48,0,0,1,1.48-1.48,2.32,2.32,0,0,1,1,.23l1.69.85V6.43A1.55,1.55,0,0,1,9.46,4.89,1.4,1.4,0,0,1,10,5a1.55,1.55,0,0,1,3.09,0,1.4,1.4,0,0,1,.54-.1,1.54,1.54,0,0,1,1.54,1.49,1.68,1.68,0,0,1,.55-.1,1.54,1.54,0,0,1,1.54,1.54v8A4.68,4.68,0,0,1,12.59,20.5ZM5.22,12.85a.48.48,0,0,0-.34.82l4.5,4.5a4.47,4.47,0,0,0,3.21,1.33,3.68,3.68,0,0,0,3.67-3.68v-8a.54.54,0,0,0-.54-.54.55.55,0,0,0-.55.54V11a.5.5,0,0,1-.5.5.51.51,0,0,1-.5-.5V6.43a.54.54,0,1,0-1.08,0V11a.51.51,0,0,1-.5.5.5.5,0,0,1-.5-.5V5a.55.55,0,0,0-.55-.54A.54.54,0,0,0,11,5V11a.5.5,0,0,1-1,0V6.43a.54.54,0,0,0-.54-.54.55.55,0,0,0-.55.54v7.31a.49.49,0,0,1-.72.44L5.77,13A1.17,1.17,0,0,0,5.22,12.85Z">
                                    </path>
                                </svg>
                            </div>
                            <div style={{ marginRight: '5px' }}>
                                <p style={{ fontSize: '11px' }}>תמכ.ה ב:</p>
                                <p style={{ fontSize: '11px', fontWeight: 'bold' }}>{ donation.userToken? sumOfGifts(donation.userToken):1}</p>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Supporters