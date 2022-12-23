
const Content = (props) => {
    return (
        <div className="row">
            <div className="body">
                <img src={props.img} alt={props.heading}/>
                <div className="col">
                <div className="body-title">
                    <h2>{props.heading}</h2>
                </div>
                <div className="body-info">
                    <p>{props.info}</p>
                </div>
                <button className="btn">Interested</button>
            </div>
          </div>
        </div>
    );
}

export default Content;
