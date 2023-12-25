/* eslint-disable react/prop-types */
export default function Icon({icon, link}){
    return(
        <button onClick={()=>window.open(link, "_blank")}>
            <i className={`fa fa-${icon}`}></i>
        </button>
    )
}