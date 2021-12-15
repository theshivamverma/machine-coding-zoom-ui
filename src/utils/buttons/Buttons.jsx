import "./Buttons.css"

export const PrimaryButton = ({ text, onClick }) => {
    return <button className={text === "Mute" ? `primary-btn` : `primary-btn btn-2`} onClick={onClick}>{text}</button>
}