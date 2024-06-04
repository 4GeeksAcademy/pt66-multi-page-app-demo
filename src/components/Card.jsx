const Card = ({title, image, children}) => {
    return <div class="card" style={{width: "18rem"}}>
    <img src={image} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{children}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
}

export default Card
