import Link from "next/link";
import Image from "next/image";

import styles from "./main-header.module.css";
import logo from "@/assets/logo.png";

import MainHeaderBackground from "./main-header-background";
import NavLink from "./navlink";

const MainHeader = () => {
    return (<>
        <MainHeaderBackground />
        <header className={styles.header}>
            <Link className={styles.logo} href='/'>
                <Image priority src={logo} alt="logo" />
                EpicBites
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
    );
};

export default MainHeader;