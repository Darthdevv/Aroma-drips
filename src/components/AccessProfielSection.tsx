import ToggleSwitch from './ToggleSwitch'
import SeizureSafe from '@/assets/icons/SeizureSafe'
import VisionImpaired from '@/assets/icons/VisionImpaired'
import ADHDFriendly from '@/assets/icons/ADHDFriendly'
import CognitiveProfile from '@/assets/icons/CognitiveProfile'
import KeyboardNavigation from '@/assets/icons/KeyboardNavigation'
import BlindUsers from '@/assets/icons/BlindUsers'

interface AccessProfielSectionProps {
    profileSettings: {
        seizureSafe: boolean;
        visionImpaired: boolean;
        adhdFriendly: boolean;
        cognitiveDisability: boolean;
        keyboardNavigation: boolean;
        screenReader: boolean;
    };
    onToggle: (profile: keyof AccessProfielSectionProps['profileSettings']) => void;
}

const AccessProfielSection = ({ profileSettings, onToggle }: AccessProfielSectionProps) => {
    const profiles = [
        {
            id: 'seizureSafe',
            name: 'Seizure Safe Profile',
            description: 'Clear flashes & reduces color',
            icon: <SeizureSafe/>,
            hasFunctionality: true
        },
        {
            id: 'visionImpaired',
            name: 'Vision Impaired Profile',
            description: 'Enhances website\'s visuals',
            icon: <VisionImpaired/>,
            hasFunctionality: true
        },
        {
            id: 'adhdFriendly',
            name: 'ADHD Friendly Profile',
            description: 'More focus & fewer distractions',
            icon: <ADHDFriendly/>,
            hasFunctionality: true
        },
        {
            id: 'cognitiveDisability',
            name: 'Cognitive Disability Profile',
            description: 'Assists with reading & focusing',
            icon: <CognitiveProfile/>,
            hasFunctionality: true
        },
        {
            id: 'keyboardNavigation',
            name: 'Keyboard Navigation',
            description: 'Use website with the keyboard',
            icon: <KeyboardNavigation/>,
            hasFunctionality: true
        },
        {
            id: 'screenReader',
            name: 'Screen Reader',
            description: 'Optimize for screen-readers',
            icon: <BlindUsers/>,
            hasFunctionality: true
        }
    ];

    return (
        <div className="w-full bg-white dark:bg-[#2E3439] rounded-xl p-4">
            <h1 className="text-lg font-semibold text-text-blackish dark:text-text-whitish mb-4">
                Choose the right accessibility profile for you
            </h1>

            <div className="space-y-3">
                {profiles.map(profile => (
                    profile.hasFunctionality && (
                        <div key={profile.id} className="flex items-center justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">
                            <ToggleSwitch
                                isOn={profileSettings[profile.id as keyof typeof profileSettings]}
                                onToggle={() => onToggle(profile.id as keyof typeof profileSettings)}
                            />

                            <div className="flex-1 ml-3">
                                <h2 className="text-sm font-medium text-text-blackish dark:text-text-whitish">
                                    {profile.name}
                                </h2>
                                <span className="text-xs text-gray-500 dark:text-gray-300">
                                    {profile.description}
                                </span>
                            </div>

                            {profile.icon}
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default AccessProfielSection;