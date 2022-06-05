//import the build-in State from react
import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Content(props) {
  const [IsOpen, setToOpen] = useState(false); //setup the default for the use of the component

  //adding the delete function for each content Modular
  function deleteAction() {
    setToOpen(true);
  }
  //close the Dialog
  function closeDialog() {
    setToOpen(false);
  }

  return (
    <div>
      <h3>{props.text}</h3>
      <div className="actions">
        <botton className="btn" onClick={deleteAction}>
          Delete
        </botton>
      </div>
      {IsOpen && (<Modal onCancel = {closeDialog} onConfirm={closeDialog}/>)}
     
    </div>
  );
  // {IsOpen && (<Backdrop onCancel={closeDialog} />)} The backdrop is not working
  //if isOpen = true than show the <Modal /> and <Backdrop />
  //props gives the ablity to use the value outside
  //{props.text} use the text on the outside script
  //onClick is the click interact, using the function as the action
}

export default Content;
