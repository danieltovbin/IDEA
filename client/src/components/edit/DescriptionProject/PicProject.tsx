import { ChangeEvent, useRef, useState, DragEvent } from 'react';
import BtnsPicProj from './BtnsPicProj';
import SelectFileFromIcon from './SelectFileFromIcon';


const PicProject = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event?.target.files && event.target.files[0];
        if (file) {
            handleImage(file)
        }
    }

    const handleImageDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            handleImage(file);
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

    const preventDefault = (event: DragEvent) => {
        event.preventDefault();
    }

    return (
        <div onClick={handleIconClick} onDragOver={preventDefault} onDrop={handleImageDrop} style={{ height: "160px", position: "relative", cursor: "pointer", border: '1px solid rgb(118, 118, 118)', borderRadius: '5px', padding: '5px', display: 'inline-block', textAlign: 'center' }}>
            {selectedImage ? (
                <>
                    <img src={selectedImage} alt="Selected" style={{ width: "40%", height: "100%" }} />
                    <BtnsPicProj/>
                </>
            ) : (<>
            <SelectFileFromIcon />
            <input type="file" accept={".jpg, .png, .jpeg"} autoComplete="off" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileChange} />
            </>
            )
            }
        </div>
    )
}

export default PicProject