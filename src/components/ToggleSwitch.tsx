

interface ToggleProps {
    isOn: boolean;
    onToggle: () => void;  // Function to toggle the switch state.
}

const ToggleSwitch = ({ isOn, onToggle }: ToggleProps) => {
    return (
        <div
            onClick={onToggle}
            className={`w-[75px] h-[29px] flex items-center rounded-full cursor-pointer px-1 transition-colors duration-300 ${isOn ? "bg-text-whitish dark:bg-text-blackish" : "bg-text-blackish dark:bg-text-whitish"
                }`}
        >
            <div
                className={`text-xs font-bold transition-all duration-300 ${isOn ? "text-black dark:text-white ml-auto" : "text-white dark:text-black"
                    }`}
            >
                {isOn ? "ON" : "OFF"}
            </div>
        </div>
    );
};

export default ToggleSwitch;
