import ChevronLeftIcon from '@/assets/icons/ChevronLeft';
import { Link } from 'react-router-dom';


interface HeaderProps {
    text: string,
    link: string,
}

const Header = ({ text, link }: HeaderProps) => {
    return (
        <header className="bg-background-white dark:bg-background-navygrey h-[6.625rem] w-full flex items-center justify-start p-4 text-text-blackish dark:text-text-whitish text-lg font-semibold">
            <Link to={link} className="flex items-center justify-center gap-3 px-4">
                <ChevronLeftIcon />
                <span className="text-2xl">{text}</span>
            </Link>
        </header>

    )
}

export default Header