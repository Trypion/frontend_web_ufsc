import React from "react";
import { DegradeButton } from "../degradeButton";
import "./Popup.css";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <div className='button-wrapper'>
            <DegradeButton
              className="close-btn"
              onClick={() => props.setTrigger(false)}
            >
              Fechar
            </DegradeButton>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
