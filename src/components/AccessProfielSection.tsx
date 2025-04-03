import FlashCircle from '@/assets/images/flash-circle.png'
import Location from '@/assets/images/location.png'
import Import from '@/assets/images/import.png'
import Voice from '@/assets/images/voice-square.png'
import Scanner from '@/assets/images/scanner.png'
import ToggleSwitch from './ToggleSwitch'
import Eye from '@/assets/images/eye.png'
import ThemeToggle from "./ThemeToggle";
import { useState } from 'react'


interface Toggles {
    featureA: boolean;
    featureB: boolean;
    featureC: boolean;
}



const AccessProfielSection = () => {
    const [toggles, setToggles] = useState({
        featureA: false,
        featureB: true,
        featureC: false,
    });


    const handleToggle = (key: keyof Toggles) => {
        setToggles((prev: Toggles) => ({ ...prev, [key]: !prev[key] }));
    };
    return (
        <div className="w-full bg-white rounded-xl px-3 flex flex-col items-center">
            <div className="w-full flex justify-start mt-4">
                <h1 className="text-black text-[19px] font-semibold">
                    Choose the right accessibility profile for you
                </h1>
            </div>
            <div className="flex w-full flex-col gap-4 mt-4 items-center">
                <div className="w-full flex justify-between items-center">
                    <ToggleSwitch
                        isOn={toggles.featureA}
                        onToggle={() => handleToggle("featureA")}
                    />
                    <div className="flex flex-col items-start">
                        <h2 className="text-[16px] text-black font-semibold">Seizure Safe Profile</h2>
                        <span className="text-[13px] text-[#cccccc] font-semibold">Clear flashes & reduces color</span>
                    </div>
                    <div>
                        <img
                            src={FlashCircle}
                            alt="Close"
                            className="w-6 h-6"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <ToggleSwitch
                        isOn={toggles.featureA}
                        onToggle={() => handleToggle("featureA")}
                    />
                    <div className="flex flex-col items-start">
                        <h2 className="text-[16px] text-black font-semibold">Vision Impaired Profile</h2>
                        <span className="text-[13px] text-[#cccccc] font-semibold">Enhances website’s visuals</span>
                    </div>
                    <div>
                        <img
                            src={Eye}
                            alt="Close"
                            className="w-6 h-6"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <ToggleSwitch
                        isOn={toggles.featureA}
                        onToggle={() => handleToggle("featureA")}
                    />
                    <div className="flex flex-col items-start">
                        <h2 className="text-[16px] text-black font-semibold">ADHD Friendly Profile</h2>
                        <span className="text-[13px] text-[#cccccc] font-semibold">More focus & fewer distractions</span>
                    </div>
                    <div>
                        <img
                            src={Scanner}
                            alt="Close"
                            className="w-6 h-6"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <ToggleSwitch
                        isOn={toggles.featureA}
                        onToggle={() => handleToggle("featureA")}
                    />
                    <div className="flex flex-col items-start">
                        <h2 className="text-[16px] text-black font-semibold">Cognitive Disability Profile</h2>
                        <span className="text-[13px] text-[#cccccc] font-semibold">Assists with reading & focusing</span>
                    </div>
                    <div>
                        <img
                            src={Location}
                            alt="Close"
                            className="w-6 h-6"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <ToggleSwitch
                        isOn={toggles.featureA}
                        onToggle={() => handleToggle("featureA")}
                    />
                    <div className="flex flex-col items-start">
                        <h2 className="text-[16px] text-black font-semibold">Keyboard Navigation (Motor)</h2>
                        <span className="text-[13px] text-[#cccccc] font-semibold">Use website with the keyboard</span>
                    </div>
                    <div>
                        <img
                            src={Import}
                            alt="Close"
                            className="w-6 h-6"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between mb-4 items-center">
                    <ToggleSwitch
                        isOn={toggles.featureA}
                        onToggle={() => handleToggle("featureA")}
                    />
                    <div className="flex flex-col items-start">
                        <h2 className="text-[16px] text-black font-semibold">Blind Users (Screen Reader)</h2>
                        <span className="text-[13px] text-[#cccccc] font-semibold">Optimize website for screen-readers</span>
                    </div>
                    <div>
                        <img
                            src={Voice}
                            alt="Close"
                            className="w-6 h-6"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccessProfielSection