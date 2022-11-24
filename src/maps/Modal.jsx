import React from "react";
// import { Button, Modal } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Carroucel from "./Carroucel";

export default function CustomModal({ show, onClose }) {
  return (
    // <Modal show={show} onHide={onClose}>
    //   <Modal.Header closeButton>
    //     <Modal.Title>Modal heading</Modal.Title>
    //   </Modal.Header>
    //   <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    //   <Modal.Footer>
    //     <Button variant="secondary" onClick={onClose}>
    //       Close
    //     </Button>
    //     <Button variant="primary" onClick={onClose}>
    //       Save Changes
    //     </Button>
    //   </Modal.Footer>
    // </Modal>
    <div>
      {/*  <Modal isOpen={show} toggle={onClose}>
        <ModalHeader onClose={onClose}>Modal title</ModalHeader>
        <ModalBody>
          Yorman aqui van imagenes de las fachadas, tenemos que sentarnos y ver la ubicacion de cada una de las casas.
        </ModalBody>
        <ModalFooter>          
          <Button color="primary" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal> */}



      <Modal isOpen={show} toggle={onClose} fullscreen>
        <ModalHeader toggle={onClose}>Modal title</ModalHeader>
        <ModalBody>
          <Carroucel />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
