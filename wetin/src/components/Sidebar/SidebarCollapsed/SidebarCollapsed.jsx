import styles from './SidebarCollapsed.module.css';
import Icon from '../../Icon/Icon'
import expandIcon from '../../../utils/assets/icons/ExpandIcon.png'
import homeIcon from '../../../utils/assets/icons/HomeIcon.png'
import publishIcon from '../../../utils/assets/icons/PublishIcon.png'
import favoriteIcon from '../../../utils/assets/icons/FavoriteIcon.png'
import userIcon from '../../../utils/assets/icons/UserIcon.png'
import notificationIcon from '../../../utils/assets/icons/NotificationIcon.png'
import helpIcon from '../../../utils/assets/icons/HelpIcon.png'
import logoutIcon from '../../../utils/assets/icons/LogoutIcon.png'

export default function SidebarCollapsed() {
  return (
    <>
    <div className={styles["side-bar"]}>
      <Icon src={expandIcon} alt="Expand" />

      <div className={styles["cluster-icons"]}>
        <Icon src={homeIcon} alt="Home" />
        <Icon src={publishIcon} alt="Publish" />
        <Icon src={favoriteIcon} alt="Favorite" />
        <Icon src={userIcon} alt="User" />
        <Icon src={notificationIcon} alt="Notification" />
        <Icon src={helpIcon} alt="Help" />
      </div>

      <Icon src="./imagens/icons/LogoutIcon.png" alt="Logout" />
    </div>
    </>
  );
};

