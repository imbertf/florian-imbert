import { createContext, useState } from "react";

export const LightModeContext = createContext();

export const LightModeProvider = ({ children }) => {
    const [lightMode, setLightMode] = useState(false);

    const toggleLightMode = () => {
        setLightMode(!lightMode);
    };

    return (
        <LightModeContext.Provider value={{ lightMode, toggleLightMode }}>
            {children}
        </LightModeContext.Provider>
    );
};
