export const ResCard = ({ imageUrl, detail, price, nam}) => {
    return (
        <div className="">
            <div className="h-card pb-5 w-33 border border-transparent mt-12 transition ease-in-out delay-75 rounded-card mx-auto text-start hover:scale-105 hover:shadow-md hover:shadow-blueIsh/50 hover:bg-blueIshLight">
                <img className="h-img mx-auto mt-4 w-img" src={imageUrl} alt="pic"/>
                <div className="mt-3 w-img mx-auto">
                    <span className="text-orange text-start pr-1 text-2xl font-medium">$</span><span className="text-2xl text-darkGrayishBlue font-medium">{price}</span>
                    <h2 className="text-2xl font-bold my-2 text-blueIsh">{nam}</h2>
                    <span className="text-darkGrayishBlue text-2sm">{detail}</span>
                </div>
            </div>
        </div>
    )
}