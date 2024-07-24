import './Pricing.css'

type pricing = {
  pricing: {
    title:string;
    description:string
    pricing:{
      name: string;
      description: string;
      price: string;
      icon: string;
      features: string[];
    }[]
  }
}

const Pricing: React.FC<pricing> = (props) => {

  return (
    <section className="pricing">
      <div className="title">
        <h2 >{props.pricing.title}</h2>
        <p>{props.pricing.description}</p>
      </div>
      <div className="pricing_content">
        {props.pricing.pricing.map((card, counter) => {
          return <div key={counter} className="card_pricing">
            <div className="header">
              <img src={card.icon} alt="" />
              <h3>{card.price}</h3>
            </div>
            <h3 className='title'>{card.name}</h3>
            <ul>
              {card.features.map(feature => <li>{feature}</li>)}
            </ul>

          </div>
        })}
      </div>
    </section>
  )
}

export default Pricing
