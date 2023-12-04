/* eslint-disable react/prop-types */
const MenuCard = (props) => {
    return (
        <>
            <div className="max-w-sm bg-white shadow ">
                <a href="#">
                    <img style={{ aspectRatio: 5 / 3, objectFit: "cover" }} src={props.img} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight">{props.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.value}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-brightColor text-white">
                        Order now
                    </a>
                </div>
            </div>

        </>

    );
};

export default MenuCard;