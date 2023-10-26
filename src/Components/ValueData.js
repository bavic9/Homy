export const ValueData = ({ icon, dropDown, heading}) => {
    return (
        <div className="bg-white">
            {icon}
            <span>{heading}</span>
            {dropDown}    
        </div>
    )
}


export const ValueDetail = ({ detail}) => {
    return (
        <div>
            <span>{detail}</span>    
        </div>
    )
}