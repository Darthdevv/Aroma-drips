import FlashCircle from '@/assets/images/flash-circle.png'
import Location from '@/assets/images/location.png'
import Import from '@/assets/images/import.png'
import Voice from '@/assets/images/voice-square.png'
import Scanner from '@/assets/images/scanner.png'
import ToggleSwitch from './ToggleSwitch'
import Eye from '@/assets/images/eye.png'

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
            icon: FlashCircle,
            hasFunctionality: true
        },
        {
            id: 'visionImpaired',
            name: 'Vision Impaired Profile',
            description: 'Enhances website\'s visuals',
            icon: Eye,
            hasFunctionality: true
        },
        {
            id: 'adhdFriendly',
            name: 'ADHD Friendly Profile',
            description: 'More focus & fewer distractions',
            icon: Scanner,
            hasFunctionality: true
        },
        {
            id: 'cognitiveDisability',
            name: 'Cognitive Disability Profile',
            description: 'Assists with reading & focusing',
            icon: Location,
            hasFunctionality: true
        },
        {
            id: 'keyboardNavigation',
            name: 'Keyboard Navigation',
            description: 'Use website with the keyboard',
            icon: Import,
            hasFunctionality: true
        },
        {
            id: 'screenReader',
            name: 'Screen Reader',
            description: 'Optimize for screen-readers',
            icon: Voice,
            hasFunctionality: true
        }
    ];

    return (
        <div className="w-full bg-white dark:bg-gray-700 rounded-xl p-4">
            <h1 className="text-lg font-semibold text-black dark:text-white mb-4">
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
                                <h2 className="text-sm font-medium text-black dark:text-white">
                                    {profile.name}
                                </h2>
                                <span className="text-xs text-gray-500 dark:text-gray-300">
                                    {profile.description}
                                </span>
                            </div>

                            <img
                                src={profile.icon}
                                alt={profile.name}
                                className="w-5 h-5 ml-3"
                            />
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default AccessProfielSection;