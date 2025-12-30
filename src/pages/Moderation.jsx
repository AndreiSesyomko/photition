import { observer } from "mobx-react-lite"
import React, { useContext, useState } from "react"
import { Context } from ".."
import ModerationModal from "../components/modals/ModerationModal"
import { Image } from "react-bootstrap"

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
            <h3 className='moderation-title'>Модерация</h3>
             <div className="moderation-list">
                 {photoList.photos ? photoList.photos.map((photo, index) => (
                     <div key={index} onClick={() => handleClick(photo)} className="moderation-photo">
                         <div className="moderation-short-info">
                             <Image className="moderation-thumbnail" src={photo.photo_thumbnail} alt="Moderation photo" />
                             <h5>{photo.title}</h5>
                         </div>
                         <div className={`moderation-status ${photo.status}`}>{photo.status == 'APPROVED' ?
                             'Одобрено' : photo.status == 'REJECTED' ?
                                 'Отклонено/Удалено' :
                                 'Ожидает проверки'}</div>
                     </div>
                 )) : <h5>Здесь пока ничего нет</h5>}
             </div>
            <ModerationModal show={showModal} onHide={() => setShowModal(false)} target={target}/>
        </div>
    )
}

export default observer(Moderation)