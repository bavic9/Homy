export const ContactCards = ({ tittle, number, icon, tag}) => {
    return (
        <div className="bg-white rounded-small border-none p-3 shadow-sm shadow-blueIsh/40 transition ease-in-out delay-75 hover:scale-105 hover:shadow-md hover:shadow-blueIsh/50">
            <div className="flex justify-start item-center gap-6 pb-5">
                <div className="text-2xl text-blueIsh bg-blueIshLight my-auto p-2 text-center rounded-small">{icon}</div>
                <div>
                    <div className="text-blueIsh text-xl font-semibold">{tittle}</div>
                    <p className="text-darkGrayishBlue tracking-tight text-sm">{number}</p>
                </div>
            </div>
            <button className="text-lg font-semibold bg-blueIshLight hover:bg-blueIsh text-blueIsh hover:text-white rounded-small w-100% py-3 mt-3 transition ease-in-out delay-75">{tag}</button>
        </div>
    )
}