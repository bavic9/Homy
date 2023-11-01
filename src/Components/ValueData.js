export const ValueData = ({ icon, dropDown, heading}) => {
    return (
        <div className="bg-white container flex justify-between text-blueIsh font-bold">
            <span className="bg-blueIshLight p-2 w-vr h-vr rounded-small">{icon}</span>
            <span className="text-base text-center text-xl p-1">{heading}</span>
            <span className="bg-blueIshLight p-auto w-vr h-vr rounded-small">{dropDown}</span>    
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