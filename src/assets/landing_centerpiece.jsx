import React, { useEffect, useState } from "react";

function Center({ showFormProp, onFormVisibilityChange }) {
    // State to track if form should be shown, initialized with prop
    const [showForm, setShowForm] = useState(showFormProp);
    
    // Effect to sync the component state with parent prop changes
    useEffect(() => {
        setShowForm(showFormProp);
    }, [showFormProp]);

    // Custom setter function that updates local state and notifies parent
    const handleSetShowForm = (value) => {
        setShowForm(value);
        // Notify parent component about the change
        if (onFormVisibilityChange) {
            onFormVisibilityChange(value);
        }
    };
    
    // This effect will load the Tally script after component mounts
    useEffect(() => {
        // Check if script already exists to avoid duplicates
        if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
            const script = document.createElement("script");
            script.src = "https://tally.so/widgets/embed.js";
            script.async = true;
            script.onload = () => {
                // When script is loaded, initialize the form
                if (typeof window.Tally !== 'undefined') {
                    window.Tally.loadEmbeds();
                }
            };
            document.body.appendChild(script);
        } else if (typeof window.Tally !== 'undefined') {
            // If script is already loaded, just initialize the form
            window.Tally.loadEmbeds();
        }
        
        // Reinitialize Tally when showForm changes to true
        if (showForm && typeof window.Tally !== 'undefined') {
            window.Tally.loadEmbeds();
        }
        
        // Cleanup function to remove the script when component unmounts
        return () => {
            // Optional: remove script on unmount if needed
        };
    }, [showForm]);

    return (
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[400px] pt-10 sm:pt-16 md:pt-[100px] justify-center items-center">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 justify-center items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl montserrat-extra-bold leading-tight sm:leading-relaxed flex justify-center items-center text-center">
                    Skip the hunt<br/>Match with your Housemate!
                </h1>
                <p className="montserrat-medium leading-relaxed text-lg sm:text-xl md:text-2xl text-center px-2">
                    No more random housemates! Find a compatible
                    <span className="hidden sm:inline"><br/></span> housemate who shares your lifestyle preferences and vibe 👀
                </p>
            </div>
            
            {!showForm && (
                <button 
                    className="bg-[#BB4430] hover:bg-white text-white hover:text-[#BB4430] montserrat-bold text-xl sm:text-2xl rounded-xl p-3 sm:p-4 transform hover:scale-110 transition-all duration-300 ease-in-out border-2 border-[#BB4430] hover:border-[#BB4430] mt-2 sm:mt-0"
                    onClick={() => handleSetShowForm(true)}
                >
                    Join our crib!
                </button>
            )}

            {/* Form container with transition effects */}
            <div className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${showForm ? 'max-h-[650px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-20'}`}>
                <div className="w-full max-w-xl mx-auto my-4 sm:my-6">
                    <div className="flex justify-end mb-2">
                        <button 
                            onClick={() => handleSetShowForm(false)}
                            className="text-[#BB4430] hover:text-[#9A3A2A] text-sm font-medium"
                        >
                            ← Back
                        </button>
                    </div>
                    <iframe 
                        data-tally-src="https://tally.so/embed/wLoMpp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                        loading="lazy" 
                        width="100%" 
                        height="477" 
                        frameBorder="0" 
                        title="Join our crib"
                        className="mt-2 sm:mt-0"
                    ></iframe>
                </div>
            </div>
            
            <div className={`flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 justify-center items-center mt-2 sm:mt-0 transition-all duration-500 ease-in-out ${showForm ? 'transform translate-y-10' : ''}`}>
                <div className="flex flex-col gap-2 sm:gap-3 items-center">
                    <img 
                        src="./images/landing/Task.svg" 
                        alt="Image of a taskboard" 
                        className="h-16 sm:h-20 md:h-24"
                    />
                    <p className="montserrat-medium text-base sm:text-lg md:text-xl text-center">
                        Tell us about your location,<br/> budget, and preferences
                    </p>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3 items-center">
                    <img 
                        src="./images/landing/Artificial Intelligence.svg" 
                        alt="Image of a brain symbolising artificial intelligence" 
                        className="h-16 sm:h-20 md:h-24"
                    />
                    <p className="montserrat-medium text-base sm:text-lg md:text-xl text-center">
                        AI helps you find matches<br/> based on compatibility
                    </p>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3 items-center">
                    <img 
                        src="./images/landing/Handshake.svg" 
                        alt="Image of a handshake" 
                        className="h-16 sm:h-20 md:h-24"
                    />
                    <p className="montserrat-medium text-base sm:text-lg md:text-xl text-center">
                        Match, chat, and move in<br/> together
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Center;