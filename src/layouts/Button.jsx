/* eslint-disable react/prop-types */
const Button = (props) => {
    return (
        <div>
            <button className="px-6 py-1 bg-[#FFDCAB] hover:text-gray-800 transition-all shadow-lg">
                {props.title}
            </button>
        </div>
    );
};

export default Button;