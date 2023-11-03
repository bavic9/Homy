export const ValueData = ({ icon, dropDown, heading}) => {
    return (
        <div className="bg-white container flex justify-between items-center text-blueIsh font-bold">
            <span className="rounded-small">{icon}</span>
            <span className="text-base text-center text-xl p-1">{heading}</span>
            <span className="rounded-small">{dropDown}</span>    
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