import "./servies.css"; // Import CSS styles for services
import SerciesSection2nd from '../../components/Servies2nd/cardElment'; // Import ServicesSection2nd component
import { memo } from "react"; // Import memo from React for performance optimization
import CardElment from "../../components/Elements/CardElment"; // Import CardElment component

// Define type for services data
type serviesData = {
    servies: {
        title: string;
        description: string;
        cards: {
            title: string;
            description: string;
            img: string;
        }[];
        btn: string;
        section2nd: {
            small_title: string,
            title: string,
            description: string,
            btn1: string,
            btn2: string,
            bg:string
        }
    }
}

// Define Servies component
const Servies: React.FC<serviesData> = (props) => {
    return (
        <>
            {/* Render services section */}
            <section className="servies">
                <div className="header">
                    {/* Render title and description */}
                    <div className="title">{props.servies.title}</div>
                    <p className="description"> {props.servies.description}</p>
                </div>
                <div className="servies_content">
                    {/* Render cards */}
                    {props.servies.cards.length !== 0 ? props.servies.cards.map((card, counter) => {
                        return <CardElment key={counter} data={card}/>
                    }) : ""}
                </div>
                {/* Render button */}
                <div className='btn_content'><button>{props.servies.btn}</button></div>
            </section>

            {/* Render second section of services */}
            <section className="servies2nd">
                <SerciesSection2nd section2d={props.servies.section2nd} />
            </section>
        </>
    )
}

export default memo(Servies); // Memoize Servies component for performance optimization
