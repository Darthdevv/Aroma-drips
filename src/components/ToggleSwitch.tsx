

interface ToggleProps {
    isOn: boolean;
    onToggle: () => void;  // Function to toggle the switch state.
}

const ToggleSwitch = ({ isOn, onToggle }: ToggleProps) => {
    return (
        <div
            onClick={onToggle}
            className={`w-[75px] h-[29px] flex items-center rounded-full cursor-pointer px-1 transition-colors duration-300 ${isOn ? "bg-gray-200" : "bg-black"
                }`}
        >
            <div
                className={`text-xs font-bold transition-all duration-300 ${isOn ? "text-black ml-auto" : "text-white"
                    }`}
            >
                {isOn ? "ON" : "OFF"}
            </div>
        </div>
    );
};

export default ToggleSwitch;
