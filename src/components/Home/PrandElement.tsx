
type prandImg ={
    img:String
    
}
export default function PrandElement(props:prandImg) {
  return (
    <div className="prand">
        <img src ={`${props.img}`} alt=""/>
    </div>
  )
}

