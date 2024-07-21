import "../css/navigation.css"
import {Link} from "react-router-dom"

function Navigation() {

    let links = [
        {href: "/readme"   , text: "Read Me"},
    ];
    return (
        <nav className="navigation">
            <ul className="links-list">
                {/*{*/}
                {/*    links.map(link => (*/}
                {/*        <li key={link.href} className="list-item">*/}
                {/*            <Link to={link.href} className="link-item">*/}
                {/*                {link.text}*/}
                {/*            </Link>*/}
                {/*        </li>*/}
                {/*    ))*/}
                {/*}*/}
            </ul>
        </nav>
    )
}

export default Navigation;
