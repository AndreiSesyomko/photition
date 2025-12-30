import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import {Card, Image, Button} from "react-bootstrap";
import {Heart, Chat, Person, PencilFill, InfoLg, Plus} from 'react-bootstrap-icons';
import { Context } from '..';
import MyDropdown from '../components/MyDropdown';
import PhotoList from '../components/PhotoList';
import UserInfoModal from '../components/modals/UserInfoModal';
import EditProfileModal from '../components/modals/EditProfileModal';
import CreateCardModal from '../components/modals/CreateCardModal';
import RecentlyDeletedModal from '../components/modals/RecentlyDeletedModal';

const Profile = () => {
    const {user, photoList} = useContext(Context)
    const [photos, setPhotos] = useState(photoList.photos.filter(item => item.user.id == user.user.id))
    const [open, setOpen] = useState(false);
    const [showUserInfoModal, setShowUserInfoModal] = useState(false);
    const [showEditUserModal, setShowEditUserModal] = useState(false);
    const [showCreateCardModal, setShowCreateCardModal] = useState(false);
    const [showRecentlyDeletedModal, setShowRecentlyDeletedModal] = useState(false);
        const [selected, setSelected] = useState('Сортировать');
    
        const handleSelect = (eventKey) => {
            setOpen(!open);
            if(eventKey === selected) {
                setSelected('Сортировать');
            } else {
                setSelected(eventKey);
            }
        }
        
    return (
        <div style={{width:'100%'}}>
            <div className="profile-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div>
                        {user.user.avatar ? <Image className='profile-avatar' src={user.user.avatar} /> :
                            <Person className='profile-avatar' />}
                    </div>
                    <h3>{user.user.username}</h3>
                </div>
                <div className='d-flex'>
                    <PencilFill onClick={() => setShowEditUserModal(true)} className="pencil-icon big-icon"/>
                    <InfoLg onClick={() => setShowUserInfoModal(true)} className="pencil-icon big-icon"/>
                </div>
            </div>
            <div className="main profile-main">
                <Button onClick={() => setShowCreateCardModal(true)} className='profile-btn'>Создать <Plus/></Button>
                <Button onClick={() => setShowRecentlyDeletedModal(true)} className='profile-btn'>Восстановить</Button>
                <MyDropdown handleSelect={handleSelect} selected={selected} open={open} setOpen={setOpen}/>
                <PhotoList photos={photos} style={{height: '460px'}}/>
            </div>
            <UserInfoModal user={user.user} show={showUserInfoModal} onHide={() => setShowUserInfoModal(false)}/>
            <EditProfileModal show={showEditUserModal} onHide={() => setShowEditUserModal(false)}/>
            <CreateCardModal show={showCreateCardModal} onHide={() => setShowCreateCardModal(false)}/>
            <RecentlyDeletedModal show={showRecentlyDeletedModal} onHide={() => setShowRecentlyDeletedModal(false)}/>
        </div>
    );
};

export default observer(Profile);