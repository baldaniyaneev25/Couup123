import React from "react";
import "./Slider.css";

// Import images
import img1 from "../../assets/1st.jpg";
import img2 from "../../assets/2nd.jpg";
import img3 from "../../assets/3rd.jpg";
import img4 from "../../assets/4th.jpg";




const items = [img1, img2, img3, img4];

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