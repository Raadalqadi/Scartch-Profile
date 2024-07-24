import { memo } from "react"; // Import memo from React for performance optimization
import PrandElement from "../../components/Home/PrandElement"; // Import PrandElement component
import { Link } from "react-router-dom";
import "./home.css"; // Import CSS file for styling


// Define type for home data
type HomeData = {
    home: {
        title: string; // Title of the home section
        description: string; // Description of the home section
        btn: string; // Text for the button
        card: string; // Content for the card
        img_links: string[]; // Array of image links
        home_bg: string; // Background image for the home section
    };
};


// Define Home component
const Home: React.FC<HomeData> = (props) => {

    return (
        <>
            {/* Main section for the home page */}
            <main className="home">
                <div className="home_content">
                    {/* First section with title, description, and button */}
                    <div className="first_section">
                        <div className="title">{props.home.title}</div>
                        <div className="description">{props.home.description}</div>
                        <Link to={"/Contact"}> <button>{props.home.btn}</button></Link>
                    </div>
                    {/* Second section with background image and card */}
                    <div className="second_section">
                        <img src={props.home.home_bg} alt="" />
                        <div className="card">{props.home.card}</div>
                    </div>
                </div>
            </main>
            {/* Section for displaying brands */}
            <section className="prands">
                <div className="prands_content">
                    {/* Render PrandElement for each image link */}
                    {props.home.img_links.length !== 0
                        ? props.home.img_links.map((ele, counter) => <PrandElement key={counter} img={ele} />)
                        : ""}
                </div>
            </section>
        </>
    );
};

export default memo(Home); // Memoize Home component for performance optimization
