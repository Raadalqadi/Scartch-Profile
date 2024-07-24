type cardData ={
    data: {
        title: string;
        description: string;
        img: string;
    }
}
const cardElment:React.FC<cardData> = (props) => {
    return (
            <div className="card" >
                <div><img src={props.data.img} alt="" /></div>
                <h4>{props.data.title}</h4>
                <p>{props.data.description}</p>
            </div>
    )
}

export default cardElment
