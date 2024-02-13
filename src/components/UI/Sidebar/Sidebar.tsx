"use client";

import Link from "next/link";

import styles from "./Sidebar.module.scss";
import LogoIcon from "@/assets/icons/sidebar/Logo.svg";
import SearchIcon from "@/assets/icons/sidebar/Search.svg";
import HomeIcon from "@/assets/icons/sidebar/Home.svg";
import MoviesIcon from "@/assets/icons/sidebar/Movies.svg";
import TvIcon from "@/assets/icons/sidebar/TV.svg";
import FavouriteIcon from "@/assets/icons/sidebar/Favourite.svg";
import AccountIcon from "@/assets/icons/sidebar/Account.svg";
import BackIcon from "@/assets/icons/sidebar/Back.svg";

interface SidebarProps {}

const Sidebar = (props: SidebarProps) => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className={styles.sidebar}>
			<Link href="/">
				<div className={styles.logo}>
					<LogoIcon viewBox="-10 0 50 50" />
				</div>
			</Link>

			<div className={styles.navigation}>
				<div className={styles.content}>
					<SearchIcon viewBox="-3 -3 50 50" />
					<HomeIcon viewBox="-2 -2 50 50" />
					<MoviesIcon viewBox="3 1 50 50" />
					<TvIcon viewBox="-2 -3 50 50" />
					<FavouriteIcon viewBox="-2 -4 50 50" />
					<AccountIcon viewBox="3 0 50 50" />
				</div>
				<div>
					<BackIcon viewBox="-3 -3 50 50" onClick={scrollToTop} />
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
