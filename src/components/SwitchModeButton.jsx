import React, { useContext } from "react";
import { LightModeContext } from "../utils/Context";
import { BsSun, BsMoon } from "react-icons/bs";

const SwitchModeButton = () => {
    const { lightMode, toggleLightMode } = useContext(LightModeContext);

    return (
        <button className="switchmodebutton" onClick={toggleLightMode}>
            {lightMode === false ? <BsSun /> : <BsMoon />}
        </button>
    );
};

export default SwitchModeButton;
