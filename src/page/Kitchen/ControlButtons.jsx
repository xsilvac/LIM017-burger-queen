function ControlButtons(props) {
    const StartButton = (
      <div className="btn btn-one btn-start"
           onClick={props.handleStart}>
        Iniciar
      </div>
    );
    const ActiveButtons = (
      <div className="btn-grp">
        <div className="btn btn-two" 
             onClick={props.handleReset}>
          Reiniciar
        </div>
        <div className="btn btn-one" 
             onClick={props.handlePauseResume}>
          {props.isPaused ? "Reanudar" : "Pausar"}
        </div>
      </div>
    );
    
    return (
      <div className="Control-Buttons">
        <div>{props.active ? ActiveButtons : StartButton}</div>
      </div>
    );
  }
  export default ControlButtons;