import React, {useContext} from 'react';
import PhotoCard from "./PhotoCard";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const PhotoList = ({photos, style=null}) => {
    return (
        <div style={style} className="custom-scrollbar">
            {photos.map((photo) => <PhotoCard key={photo.id} photo={photo}/>)}
        </div>
    );
};

export default observer(PhotoList);