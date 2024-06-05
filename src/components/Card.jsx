const Card = ({title, image, children}) => {
    return <div className="card" style={{width: "18rem"}}>
    {image ? <img src={image} className="card-img-top" alt="..." /> : ""}
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{children}</p>
    </div>
  </div>
}

export default Card
