
import "./Categories.css"
function Categories(props) {
    return (
        <div className="categories_item">
            <img alt="1" src={props.img} />
            <h1>{props.name}</h1>
        </div>
    );
}

export default Categories;
