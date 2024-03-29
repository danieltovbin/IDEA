import { Accordion, AccordionDetails, AccordionSummary, Container, Divider, List, Paper } from '@mui/material';
import './scss/savedGifts.scss';
import SavedGiftsBtn from './util/SavedGiftsBtn';
import {FC} from 'react';


interface SavedGiftsProps{
    nameGift:string;
    priceGift: string;
    descriptionGift: string;
    onDelete: ()=> void;
    onEdit: ()=> void;
}

const SavedGifts:FC<SavedGiftsProps> = ({nameGift,priceGift,descriptionGift,onDelete,onEdit}) => {
    return (
        <div style={{ maxWidth: "580px" }}>
            <Container disableGutters >
                <Container disableGutters>
                    <List >
                        <div>
                            <div >
                                <Container disableGutters >
                                    <p style={{ fontSize: "10px", marginBottom: "5px" }} className='activeBtn'>
                                        פעיל
                                    </p>
                                    <Paper style={{ direction: "ltr" }}>
                                        <Accordion>
                                            <AccordionSummary>
                                                <div className='container-body'>
                                                    <div>
                                                        <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{ width: '24px', height: '24px', fill: 'rgb(154, 154, 154)' }}>
                                                            <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"></path>
                                                        </svg>
                                                        <p className='priceGift'>
                                                            {priceGift}
                                                        </p>
                                                    </div>
                                                    <div className='titleAndDescription'>
                                                        <p style={{ fontSize: "16px", maxWidth: "400px", fontWeight: "bold", lineHeight: "20px" }}>
                                                            {nameGift}
                                                        </p>
                                                        <p className='description'>
                                                            {descriptionGift}
                                                        </p>
                                                    </div>
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails >
                                                <Container disableGutters ></Container>
                                                <Divider sx={{borderBottom: "1px dashed #d6d6d6"}}/>
                                                <Container disableGutters >
                                                    <SavedGiftsBtn onDelete={onDelete} onEdit={onEdit} />
                                                </Container>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Paper>
                                </Container>
                            </div>
                        </div>
                    </List>
                </Container>
            </Container>
        </div>
    )
}

export default SavedGifts