import Play from './image/play.png';
import Stop from './image/stop.png';
import Pause from './image/pause.png';
import Next from './image/next.png';
import Prew from './image/prew.png';
import Vol from './image/vol.png';
import './App.css';


const Button = (props) => {
    return props.hidden ? null : 
    <>
    <button class="buttons zoom" disabled={props.disabled}>
        {props.startIcon1 && <img src={Play} alt="" width="50" height="50" />}
        {props.startIcon2 && <img src={Stop} alt="" width="50" height="50" />}
        {props.startIcon3 && <img src={Pause} alt="" width="50" height="50" />}
        {props.startIcon4 && <img src={Next} alt="" width="50" height="50" />}
        {props.startIcon5 && <img src={Prew} alt="" width="50" height="50" />}
        {props.startIcon6 && <img src={Vol} alt="" width="50" height="50" />}
    <p>{props.text}</p>
    </button>
    </>
}

export default Button;