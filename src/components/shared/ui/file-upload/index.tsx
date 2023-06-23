/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from 'next/image';
import React from 'react';

interface IImageToBase64Converter {
    setBase64Image: (a: any) => void;
    base64Image: string;
}

function ImageToBase64Converter({ setBase64Image, base64Image }: IImageToBase64Converter) {
    const handleImageChange = event => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setBase64Image(reader.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div>
            <Image src={base64Image} alt="Original Image" width={300} height={300} />
            <input
                type="file"
                onChange={e => {
                    handleImageChange(e);
                }}
            />
        </div>
    );
}

export default ImageToBase64Converter;
