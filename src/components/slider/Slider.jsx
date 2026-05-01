import React from "react";
import "./Slider.css";

// Import images
import img1 from "../../assets/coup-travel1.png";
import img2 from "../../assets/couupecom1.png";




const items = [img1, img2];

function Slider() {
    return (
        <div className="slider">
            <div className="slider-track">
                {/* Duplicate for infinite scroll */}
                {[...items, ...items].map((img, index) => (
                    
                        <img src={img} alt="logo" />
                
                ))}
            </div>
        </div>
    );
}

export default Slider;