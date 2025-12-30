import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import { Context } from "../../"
import { Image, Modal, Button } from "react-bootstrap"

const Moderation = ({show, onHide, target}) => {
    const {photoList} = useContext(Context)
    
    return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{target.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {target.description && <div className="moderation-description">
            <h4>Описание</h4>
            <p>{target.description}</p>
        </div>}
        <Image style={{width: '250px', height: 'auto'}} src={target.photo} alt="photo"/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Одобрить</Button>
        <Button variant="danger">Отклонить</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default observer(Moderation)