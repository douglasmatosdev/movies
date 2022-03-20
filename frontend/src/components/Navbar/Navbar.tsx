import './style.css'
import { ReactComponent as GithubIcon } from 'assets/img/github.svg'

export function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="movies-nav-content">
                    <h1><a href="/">Movies</a></h1>
                    <a href="https://github.com/douglasmatosdev" target="_blank" rel="noreferrer">
                        <div className="movies-contact-container">
                            <GithubIcon />
                            <p className="movies-contact-link">/douglasmatosdev</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
