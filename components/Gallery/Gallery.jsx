import React, {useEffect, useState} from 'react';
import styles from './Gallery.module.css';
import axios from 'axios';

const Gallery = () => {

    const [background, setBackground] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [images, setImages] = useState(null);
    const [playingSound, setPlayingSound] = useState(null);
    const [everyTimeSound, setEveryTimeSound] = useState(null);

    useEffect(() => {
        setBackground(document.getElementsByClassName(styles.backgroundBlack)[0]);
        var audio = new Audio(`/sounds/beat.mp3`);

        setEveryTimeSound(audio);
        axios.get("/api/imagesAndSound")
            .then(e => {
                setImages(e.data);
                
            })
            .catch(err => {
                console.error(err);
            })
    }, [])

    const triggerImage = (image, soundname) => {
        everyTimeSound.pause();
        var audio = new Audio(`/sounds/${soundname}`);
        setPlayingSound(audio);
        background.style.display = "block";
        setSelectedImage(image);
        image.classList.add(styles.selected);
        image.classList.remove(styles.item);
        audio.play();
    } 
    
    const unselectImage = () => {
        background.style.display = "none";
        selectedImage.classList.remove(styles.selected);
        selectedImage.classList.add(styles.item);
        setSelectedImage(null);
        playingSound.pause();
        everyTimeSound.play()
        
    }

    return (
        <div>
            <div className={styles.backgroundBlack} onClick={e => unselectImage()}></div>
            <ul className={styles.gallery}>
                {(images)?
                    images.map(image => {
                        return (
                            <li key={image}>
                                <img src={`/img/${image.imgurl}`} alt={image.imgurl} className={styles.item} onClick={e => triggerImage(e.target, image.soundurl)} />
                            </li>
                        )
                    })
                    : false 
                }
            </ul>
        </div>
        
    );
};

export default Gallery;