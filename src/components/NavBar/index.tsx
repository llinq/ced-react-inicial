import { useUser } from '../../providers/UserProvider';
import './styles.css';

export type NavBarProps = {
};

export const NavBar: React.FC<NavBarProps> = () => {
    const { user } = useUser();

    return (
        <div className="navbar">
            {user}
        </div>
    )
};
