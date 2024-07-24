
type Section2dData = {
    section2d: {
        small_title: string;
        title: string;
        description: string;
        btn1: string;
        btn2: string;
        bg:string;
    }
}
export default function SerciesSection2nd(props: Section2dData) {
    return (
        <>
            <div className="first_section">
                <p className="small_title">{props.section2d.small_title}</p>
                <h2 className="title">{props.section2d.title}</h2>
                <p className="description">{props.section2d.description}</p>
                <button>{props.section2d.btn1}</button>
                <button>{props.section2d.btn2}</button>

            </div>
            <div className="second_section">
                <img src={props.section2d.bg} alt="" />
            </div>
        </>
    )
}

