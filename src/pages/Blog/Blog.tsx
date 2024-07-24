import "./Blog.css"

type BlogCard = {
    blogs:{
        blogs_card:{
            id: number;
            title: string;
            description: string;
            img:string
            info: {
              icon: string;
              name: string;
              time: string;
              date: string;
            };
        }[]
    }
  }

const Blog:React.FC<BlogCard> = (props) => {
  return (
    <section className="blog">

        <div className="blog_content">
            {props.blogs.blogs_card.length !== 0 ?  props.blogs.blogs_card.map((card)=>{

                return <div key={card.id} className="blog_card">
                            <div className="left_content">
                              <div className="title">
                                 <h3>{card.title}</h3>
                                <p>{card.description}</p>
                              </div>
                                <div className="blog_info">
                                    <img src={card.info.icon} alt="" />
                                    <p>by <span>{card.info.name} </span>  | {card.info.date} | {card.info.time}</p>
                                </div>
                            </div>
                            <div className="right_content">
                                <img src={card.img} alt="" />
                            </div>
                         </div>
            }) : ""}
        </div>
      
    </section>
  )
}

export default Blog
