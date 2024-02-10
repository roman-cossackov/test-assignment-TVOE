import Image from "next/image";

import styles from "./Sidebar.module.scss";
// import { ReactComponent as LogoIcon } from "@/assets/icons/sidebar/Logo.svg";
import SearchIcon from "@/assets/icons/sidebar/Search.svg";
import HomeIcon from "@/assets/icons/sidebar/Home.svg";
import MoviesIcon from "@/assets/icons/sidebar/Movies.svg";
import TvIcon from "@/assets/icons/sidebar/Tv.svg";
import FavouriteIcon from "@/assets/icons/sidebar/Favourite.svg";
import AccountIcon from "@/assets/icons/sidebar/Account.svg";
import BackIcon from "@/assets/icons/sidebar/Back.svg";

interface SidebarProps {}

const Sidebar = (props: SidebarProps) => {
	return (
		<div className={styles.sidebar}>
			<div className={styles.logo}></div>
			<div className={styles.navigation}>
				<div className={styles.content}>
					{/* <SearchIcon />
					<HomeIcon />
					<MoviesIcon />
					<TvIcon />
					<FavouriteIcon />
					<AccountIcon /> */}
				</div>
				<div>{/* <BackIcon /> */}</div>
			</div>
		</div>
	);
};

export default Sidebar;
