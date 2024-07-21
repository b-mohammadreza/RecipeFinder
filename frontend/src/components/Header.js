import '../css/header.css';
import {node} from "prop-types";
import Navigation from "./Navigation";

function Header() {
    function onPopulateDB(event) {
        event.preventDefault();
        fetch('/save')
            .then(res => {
                console.log(">>>>> onPopulateDB - res received")
                if (res.status === 200) {
                    document.getElementById("_right-btn").style.display = "none";
                    document.getElementById("_header-txt").style.display = "block";
                    document.getElementById("_header-txt").style.margin = "auto";
                }
            })
            .catch(err => {
                console.log(">>>>> onPopulateDB - ERROR: " + err);
            });
    }

    return (
        <div>
            <Navigation aria-labelledby="Facilitates navigation" />
            <form id="_right-btn" className="right-btn" action="/save" method="GET">
                <button type="submit"  onClick={onPopulateDB}>Populate DB</button>
            </form>
            <p id="_header-txt" className="header-txt">782 recipes successfully added to the database</p>
        </div>
    );
}

export default Header;