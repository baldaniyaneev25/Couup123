import React from "react";
import "./StepsSection.css";

function StepsSection() {
    return (
        <section className="steps">

            <div className="steps-badge">How it works</div>

            <h2 className="steps-title">
                Three steps to your <br />
                next big project.
            </h2>

            <div className="steps-wrapper">

                {/* 🔥 TOP ARROW */}
                <svg className="arrow arrow-top" viewBox="0 0 200 100">
                    <path
                        d="M10 80 Q100 -10 190 40"
                        stroke="#111"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                    />
                    <path
                        d="M175 25 L190 40 L170 45"
                        stroke="#111"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                    />
                </svg>

                {/* 🔥 BOTTOM ARROW */}
                <svg className="arrow arrow-bottom" viewBox="0 0 200 100">
                    <path
                        d="M10 30 Q100 120 190 60"
                        stroke="#111"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                    />
                    <path
                        d="M175 75 L190 60 L170 55"
                        stroke="#111"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                    />
                </svg>

                {/* Cards */}
                <div className="steps-container">

                    <div className="step-card tilt-left">
                        <span className="step-number">01</span>
                        <h3>Send a message</h3>
                        <p>
                            Share your project idea, goals, and requirements. We’ll review everything and guide you with the best next steps forward.
                        </p>
                    </div>

                    <div className="step-card">
                        <span className="step-number">02</span>
                        <h3>Receive your action plan</h3>
                        <p>
                            Within 48 hours you'll receive a detailed scope, timeline,
                            and pricing.
                        </p>
                    </div>

                    <div className="step-card tilt-right">
                        <span className="step-number">03</span>
                        <h3>Let's start designing</h3>
                        <p>
                            Once we're aligned, I get to work immediately.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default StepsSection;