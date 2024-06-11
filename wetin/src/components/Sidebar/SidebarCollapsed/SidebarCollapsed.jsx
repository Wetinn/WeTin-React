import styles from './SidebarCollapsed.module.css';
import Icon from '../../Icon/Icon'
import NotificationIcon from '../../Icon/NotificationIcon/NotificationIcon'
import expandIcon from '../../../utils/assets/icons/ExpandIcon.png'
import homeIcon from '../../../utils/assets/icons/HomeIcon.png'
import publishIcon from '../../../utils/assets/icons/PublishIcon.png'
import peopleIcon from '../../../utils/assets/icons/PeopleIcon.png'
import buildingIcon from '../../../utils/assets/icons/BuildingIcon.png'
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
        <Icon src={publishIcon} alt="Publicar Vaga" onClick={() => handleNavigation("/dashboard/publicarVaga")}/>
        <Icon src={peopleIcon} alt="Candidatos" onClick={() => handleNavigation("/dashboard/candidatos-favoritos")}/>
        <Icon src={buildingIcon} alt="Perfil da empresa" onClick={() => handleNavigation("/dashboard/perfil-empresa")}/>
        <NotificationIcon src={notificationIcon} alt="Notificações" onClick={() => handleNavigation("/dashboard/notificacoes")}/>
        <Icon src={helpIcon} alt="Ajuda" />
      </div>

      <Icon src={logoutIcon} alt="Sair" onClick={() => handleNavigation("/")} />
    </div>
    </>
  );
};

