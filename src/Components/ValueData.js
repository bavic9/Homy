export const ValueData = ({ icon, dropDown, heading}) => {
    return (
        <div className="bg-white container flex justify-between text-blueIsh font-bold">
            <span className="bg-blueIshLight p-1 text-xl rounded-small">{icon}</span>
            <span className="text-xl">{heading}</span>
            <span className="bg-blueIshLight p-1 text-xl rounded-small">{dropDown}</span>    
        </div>
    )
}


export const ValueDetail = ({ detail}) => {
    return (
        <div>
            <span className="text-darkGrayishBlue">{detail}</span>    
        </div>
    )
}