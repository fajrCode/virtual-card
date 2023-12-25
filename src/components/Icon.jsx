/* eslint-disable react/prop-types */
export default function Icon({icon}){
    return(
        <button>
            <i className={`fa fa-${icon}`}></i>
        </button>
    )
}