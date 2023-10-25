export const ResCard = ({ imageUrl, detail, price, nam}) => {
    return (
        <div className="">
            <div className="">
                <img src={imageUrl} alt="pic"/>
                <div className="">
                    <h2>{nam}</h2>
                    <span>$</span><span>{price}</span>
                    <span>{detail}</span>
                </div>
            </div>
        </div>
    )
}