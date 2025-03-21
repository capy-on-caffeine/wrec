import React from "react";

const Marquee: React.FC = () => {
        const marqueeText = [
                "Participation is not limited to women candidates only. It is open for all the researchers in specified areas.",
                "Authors should prepare their papers using Springer's LaTeX or Word templates.",
                "Each paper must be accompanied by a Springer Nature Licence to Publish agreement.",
        ];

        // Repeat text twice to avoid gaps
        const repeatedText = [...marqueeText, ...marqueeText];

        return (
                <div className="relative overflow-hidden w-full bg-gray-900 text-gray-100 py-3 border-y border-gray-700">
                        {/* Gradient Fade Edges */}
                        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-900 via-gray-900/60 to-transparent z-10 pointer-events-none"></div>

                        {/* Marquee Container */}
                        <div
                                className="flex animate-marquee whitespace-nowrap text-sm font-medium tracking-wide hover:[animation-play-state:paused]"
                                style={{
                                        animationDuration: `54s`,
                                        animationIterationCount: "infinite",
                                }}
                        >
                                {repeatedText.map((text, index) => (
                                        <span key={index} className="mx-8">
                                                {text}
                                        </span>
                                ))}
                        </div>
                </div>
        );
};

export default Marquee;
