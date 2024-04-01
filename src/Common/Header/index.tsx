import "./Header.css";

function Header() {
    return(
        <header className="header-container">
            <section><a className="logo-link" href="/">Logo</a></section>
            <section className="nav-link">
                <a href="/">Home</a>
                <a href="/about">About</a>
            </section>
        </header>
    )
}

export default Header;