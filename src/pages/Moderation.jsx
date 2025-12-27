import { observer } from "mobx-react-lite"
import React, { useContext, useState } from "react"
import { Context } from ".."
import ModerationModal from "../components/modals/ModerationModal"
import { Col, Row } from "react-bootstrap"

const Moderation = () => {
    const {photoList} = useContext(Context)
    const [showModal, setShowModal] = useState(false)
    const [target, setTarget] = useState({})

    const handleClick = (photo) => {
        setTarget(photo)
        setShowModal(true)
    }
    
    return (
        <div className="main">
             {photoList.photos ? photoList.photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => handleClick(photo)}
              className="d-flex align-items-center justify-content-between mb-3 p-2"
              style={{ border: '1px solid #CFAD81', borderRadius: 8, gap: '8px' }}
            >
              <Row className="justify-content-between">
                <Col md={6}>{photo.title}</Col>
                <Col md={6}>{photo.status}</Col>
              </Row>
            </div>
          )) : <h5>Здесь пока ничего нет</h5>}
            <ModerationModal show={showModal} onHide={() => setShowModal(false)} target={target}/>
        </div>
    )
}

export default observer(Moderation)