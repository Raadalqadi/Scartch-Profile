import './Contact.css'
type contactDtat = {
    contact:{
        title: {
            left: string;
            right: string;
        };
        fname: string;
        lname: string;
        phone: string;
        description: {
            left: string;
            right: string;
        };
        address: string;
        phonenumber: string;
        emailname:string;
        email: string;
        btn: string;
    }
}
const Contact:React.FC<contactDtat> = (props) => {
  return (
    <section className="contact">
        <div className="contact_content">
            
            <div className="left">
                <h3 className="title">{props.contact.title.left}</h3>
                <form action="">
                    <div className="group_input">
                        <label htmlFor="Fname">{props.contact.fname}</label>
                        <input placeholder='First Name' type="text" id="Fname" />
                    </div>
                    <div className="group_input">
                        <label htmlFor="Lname">{props.contact.lname}</label>
                        <input placeholder='Last Name' type="text" id="Lname" />
                    </div>
                    <div className="group_input">
                        <label htmlFor="Email">{props.contact.emailname}</label>
                        <input placeholder='exampl@gamil.com' type="email" id="Email" />
                    </div>
                    <div className="group_input">
                        <label htmlFor="Phone">{props.contact.phone}</label>
                        <input placeholder=' + Your Number' type="number" id="Phone" />
                    </div>
                    <div className="group_input textarea">
                        <label htmlFor="Description">{props.contact.description.left}</label>
                        <textarea placeholder='Massage' id="Description" ></textarea>
                    </div>
                    <button > {props.contact.btn} </button>
                </form>
            </div>

            <div className="right">
                <h3>{props.contact.title.right}</h3>
                <p>{props.contact.description.right}</p>
                <ul>
                    <li>{props.contact.address}</li>
                    <li>{props.contact.email}</li>
                    <li>{props.contact.phonenumber}</li>
                </ul>

            </div>
        </div>
    </section>
  )
}

export default Contact
