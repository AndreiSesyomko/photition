import React, {useContext, useState} from 'react';
import PhotoCard from "../components/PhotoCard";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import PhotoList from "../components/PhotoList";
import {DropdownButton, Dropdown} from "react-bootstrap";
import {ChevronDown} from "react-bootstrap-icons";
import MyDropdown from '../components/MyDropdown';

const Main = () => {
    const {photoList} = useContext(Context)
    const [open, setOpen] = useState(false);
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
        <div className="main">
            <MyDropdown handleSelect={handleSelect} open={open} selected={selected} setOpen={setOpen}/>
            <PhotoList photos={photoList.photos}/>
        </div>
    );
};

export default observer(Main);