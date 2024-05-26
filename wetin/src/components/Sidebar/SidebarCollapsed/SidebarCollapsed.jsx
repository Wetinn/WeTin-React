import styles from './SidebarCollapsed.module.css';
import Icon from '../../Icon/Icon'
import NotificationIcon from '../../Icon/NotificationIcon/NotificationIcon'
import expandIcon from '../../../utils/assets/icons/ExpandIcon.png'
import homeIcon from '../../../utils/assets/icons/HomeIcon.png'
import publishIcon from '../../../utils/assets/icons/PublishIcon.png'
import favoriteIcon from '../../../utils/assets/icons/FavoriteIcon.png'
import userIcon from '../../../utils/assets/icons/UserIcon.png'
import notificationIcon from '../../../utils/assets/icons/NotificationIcon.png'
import helpIcon from '../../../utils/assets/icons/HelpIcon.png'
import logoutIcon from '../../../utils/assets/icons/LogoutIcon.png'
import { useNavigate } from 'react-router-dom';

export default function SidebarCollapsed(props) {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <>
    <div className={styles["side-bar"]}>
      <Icon src={expandIcon} alt="Expand" onClick={() => props.funcaoExpandir()}/>

      <div className={styles["cluster-icons"]}>
        <Icon src={homeIcon} alt="Home" onClick={() => handleNavigation("/dashboard")}/>
        <Icon src={publishIcon} alt="Publish" />
        <Icon src={favoriteIcon} alt="Favorite" onClick={() => handleNavigation("/dashboard/candidatos-favoritos")}/>
        <Icon src={userIcon} alt="User" onClick={() => handleNavigation("/dashboard/perfil-empresa")}/>
        <NotificationIcon src={notificationIcon} alt="Notification" onClick={() => handleNavigation("/dashboard/notificacoes")}/>
        <Icon src={helpIcon} alt="Help" />
      </div>

      <Icon src={logoutIcon} alt="Logout" onClick={() => handleNavigation("/")} />
    </div>
    </>
  );
};

