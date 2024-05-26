import './style.css'

export const Header = (props) => {
    return(
        <header>
            <h1 className="site-title">Realitní kancelář</h1>
            <nav className="navigation">
                <a href={props.dum1_href}>Dům 1</a>
                <a href={props.dum2_href}>Dům 2</a>
                <a href={props.dum3_href}>Dům 3</a>
                <a href={props.dum4_href}>Dům 4</a>
            </nav>
        </header>
    )
}