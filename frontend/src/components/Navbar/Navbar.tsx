import './style.css'
import { ReactComponent as GithubIcon } from 'assets/img/github.svg'

export function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="movie-nav-content">
                    <h1>Movies</h1>
                    <a href="https://github.com/douglasmatosdev" target="_blank" rel="noreferrer">
                        <div className="movie-contact-container">
                            <GithubIcon />
                            <p className="movie-contact-link">/douglasmatosdev</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
