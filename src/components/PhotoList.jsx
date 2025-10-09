import React, {useContext} from 'react';
import PhotoCard from "./PhotoCard";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const PhotoList = () => {
    const {photoList} = useContext(Context);
    return (
        <div className="custom-scrollbar">
            {photoList.photos.map((photo) => <PhotoCard key={photo.id} photo={photo}/>)}
        </div>
    );
};

export default observer(PhotoList);