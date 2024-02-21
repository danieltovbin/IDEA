import { ChangeEvent, DragEvent, FC, useRef, useState } from 'react';
import BtnEditAndDelete from '../btnEditAndDelete/BtnEditAndDelete';
import axios from 'axios';

interface SelectDropProps{
    classname:string;
    inputId: string;
    selectFileComponent: React.ReactNode;
}

const SelectAndDropImg:FC<SelectDropProps> = ({classname,inputId,selectFileComponent}) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleIconClick = () => {
        if (fileInputRef.current && !isEditMode) {
            fileInputRef.current.click();
        }
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event?.target.files && event.target.files[0];
        if (file) {
            handleImage(file);
            setIsEditMode(true);
        }
    }

    const handleImageDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
            const file = event.dataTransfer.files[0];
            if (file) {
                handleImage(file);
                setIsEditMode(true);
            }
    }

    const handleImage = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target) {
                const imageDataUrl = e.target.result as string;
                setSelectedImage(imageDataUrl);
            }
        };
        reader.readAsDataURL(file);
    }

    const handleEditClick = () =>{
        setIsEditMode(true);
        if(fileInputRef.current){
            fileInputRef.current.click();
        }
    }

    const handleDeleteClick = () => {
        setSelectedImage(null);
        setIsEditMode(false);
    }

    const preventDefault = (event: DragEvent) => {
        event.preventDefault();
    }

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        if (!selectedImage) {
            alert('Please select an image to upload');
            return;
        }
        // יצירת אובייקט FormData והוספת התמונה אליו
        const formData = new FormData();
        formData.append('imageData', selectedImage);
        try {
            // שליחת בקשת POST לשרת
            // const response = await axios.post('/uploadImage', formData);
            // console.log(response.data.message); // הודעת התגובה מהשרת
        } catch (error) {
            console.error('Error uploading image:', error);
            // טיפול בשגיאה
        }
    };

    return (
        <div className={classname} onClick={handleIconClick} onDragOver={preventDefault} onDrop={handleImageDrop} >
            {selectedImage ? (
                <>
                    <img src={selectedImage} alt="Selected" />
                    {isEditMode && (
                        <BtnEditAndDelete onEditClick={handleEditClick} onDeleteClick={handleDeleteClick} />
                    )}                  
                </>) : (
                <>
                    {selectFileComponent}
                </>
            )
        }
        <input id={inputId} name='images' type="file" accept={".jpg, .png, .jpeg"} autoComplete="off" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileChange} />
        </div>
    )
}

export default SelectAndDropImg


