import styles from './SidebarExtended.module.css';
import Option from '../Option/Option'
import collapseIcon from '../../../utils/assets/icons/CollapseIcon.png'
import homeIcon from '../../../utils/assets/icons/HomeIcon.png'
import publishIcon from '../../../utils/assets/icons/PublishIcon.png'
import favoriteIcon from '../../../utils/assets/icons/FavoriteIcon.png'
import userIcon from '../../../utils/assets/icons/UserIcon.png'
import notificationIcon from '../../../utils/assets/icons/NotificationIcon.png'
import helpIcon from '../../../utils/assets/icons/HelpIcon.png'
import logoutIcon from '../../../utils/assets/icons/LogoutIcon.png'
import { useNavigate } from 'react-router-dom';

export default function SidebarExpanded(props) {

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path)
  }

  return (
    <>
    <div className={styles["side-bar"]}>
      <Option src={collapseIcon} alt="Expand" titulo="Voltar" onClick={() => props.funcaoColapsar()} />

      <div className={styles["cluster-icons"]}>
        <Option src={homeIcon} alt="Home" titulo="Home" onClick={() => handleNavigation("/dashboard")}/>
        <Option src={publishIcon} alt="Publish" titulo="Publicar Vaga" onClick={() => handleNavigation("/dashboard/publicarVaga")} />
        <Option src={favoriteIcon} alt="Favorite" titulo="Favoritos" onClick={() => handleNavigation("/dashboard/candidatos-favoritos")}/>
        <Option src={userIcon} alt="User" titulo="Perfil da empresa" onClick={() => handleNavigation("/dashboard/perfil-empresa")}/>
        <Option notificacoes  src={notificationIcon} alt="Notification" titulo="Notificações"  onClick={() => handleNavigation("/dashboard/notificacoes")}/>
        <Option src={helpIcon} alt="Help" titulo="Ajuda" />
      </div>

      <Option src={logoutIcon} alt="Logout" titulo="Sair" onClick={() => handleNavigation("/")}/>
    </div>
    </>
  );
};

