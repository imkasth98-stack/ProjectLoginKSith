function Card({imageUrl, title, description}) {
  return (
    <div className="box">
      <img src={imageUrl} alt="" />
      <h3 className="box-title">{title}</h3>
      <p className="box-desc">{description}</p>
    </div>
  );
}
export default Card;