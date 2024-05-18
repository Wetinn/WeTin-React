import styles from './SidebarExpanded.module.css';
import Option from '../Option/Option'
import expandIcon from '../../../utils/assets/icons/ExpandIcon.png'
import homeIcon from '../../../utils/assets/icons/HomeIcon.png'
import publishIcon from '../../../utils/assets/icons/PublishIcon.png'
import favoriteIcon from '../../../utils/assets/icons/FavoriteIcon.png'
import userIcon from '../../../utils/assets/icons/UserIcon.png'
import notificationIcon from '../../../utils/assets/icons/NotificationIcon.png'
import helpIcon from '../../../utils/assets/icons/HelpIcon.png'
import logoutIcon from '../../../utils/assets/icons/LogoutIcon.png'

export default function SidebarExpanded() {
  return (
    <>
    <div className={styles["side-bar"]}>
      <Option src={expandIcon} alt="Expand" titulo="Voltar" />

      <div className={styles["cluster-icons"]}>
        <Option src={homeIcon} alt="Home" titulo="Home" />
        <Option src={publishIcon} alt="Publish" titulo="Publicar Vaga" />
        <Option src={favoriteIcon} alt="Favorite" titulo="Favoritos" />
        <Option src={userIcon} alt="User" titulo="Perfil da empresa" />
        <Option src={notificationIcon} alt="Notification" titulo="Notificações" />
        <Option src={helpIcon} alt="Help" titulo="Ajuda" />
      </div>

      <Option src={logoutIcon} alt="Logout" titulo="Sair"/>
    </div>
    </>
  );
};

