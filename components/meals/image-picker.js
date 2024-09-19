"use client";
import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';
export default function ImagePicker({ label, name }) {

    const [image, setImage] = useState();
    const imageInput = useRef();
    const handlePickClick = () => {
        imageInput.current.click();

    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) {
            setImage(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    };
    return (<div className={classes.picker}>
        <label htmlFor={name} >{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!image && <p>No Image Picked Yet</p>}
                {image && <Image src={image} alt="User Picked Image" fill />}
            </div>
            <input
                type="file"
                name={name}
                id={name}
                ref={imageInput}
                accept='image/*'
                className={classes.input}
                onChange={handleImageChange}
                required
            />
            <button className={classes.button} type="button" onClick={handlePickClick} >Pick an Image</button>
        </div>
    </div>);
}