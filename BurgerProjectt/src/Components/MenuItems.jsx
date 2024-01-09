// eslint-disable-next-line react/prop-types
function MenuItems({image, name, content, price}) {
    return ( 
    <div className="menuItem">
     <div style={{backgroundImage: `url(${image})`}}></div>
     <h1 style={{marginTop: "20px"}}>{name}</h1>
     <p style={{marginTop: "0px"}}>{content}</p>
      <p style={{color: "red", fontWeight: "bold", marginTop: "10px"}}>
        <i>
        {price} azn
        </i>
       
        </p>
    </div> 
    );
}

export default MenuItems;