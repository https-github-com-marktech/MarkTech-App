import "../Product/Product.module.css";

export function Productcard(props) {
  return (
    <main>
      <div className="bigcontainer">
          <div className="ContainerProduct">
              <div >
                  <img className="imgproduct" src={props.product.image} alt={props.product.name}/>
              </div>

              <div className="textproduct">
                  <p>{props.product.name}</p>
              </div>
              
              <div className="price">
                  {" "}
                  <p>{props.product.price}</p>
              </div>
              <div className="description">
                  <p> {props.product.description}</p>
              </div>
          </div>

        

        </div>
      
    </main>
  );
}