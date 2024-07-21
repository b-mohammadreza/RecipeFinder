import "../css/readMe.css"
import Navigation from "./Navigation";

function ReadMe() {
    return(
        <div className="readme-content">
            <Navigation aria-labelledby="Facilitates navigation" />
            <video controls>
                <source src="../video.webm" type="video/webm"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default ReadMe;
