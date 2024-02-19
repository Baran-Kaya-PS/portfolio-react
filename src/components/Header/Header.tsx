import React from 'react';
import styles from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="container">
            <header className={`${styles.header} py-4 shadow-sm`}>
                <h1 className={`${styles.title} display-4 text-center`}>Baran Kaya</h1>
                <p className={`${styles.description} lead text-center`}>Développeur spécialisé en base de donnée</p>
                <nav className={`${styles.nav} mt-3`}>
                    <ul className="nav justify-content-center">
                        <li className="nav-item"><a href="#about" className={`${styles.navLink} nav-link text-secondary`}>À propos</a></li>
                        <li className="nav-item"><a href="#skills" className={`${styles.navLink} nav-link text-secondary`}>Compétences</a></li>
                        <li className="nav-item"><a href="#projects" className={`${styles.navLink} nav-link text-secondary`}>Projets</a></li>
                        <li className="nav-item"><a href="#contact" className={`${styles.navLink} nav-link text-secondary`}>Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
