import React, {useContext, useState} from 'react';
import PhotoCard from "../components/PhotoCard";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import PhotoList from "../components/PhotoList";
import {DropdownButton, Dropdown} from "react-bootstrap";
import {ChevronDown} from "react-bootstrap-icons";

const Main = () => {
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
            <Dropdown onSelect={handleSelect} show={open} onToggle={() => setOpen(!open)}>
                <Dropdown.Toggle id="custom-dropdown" className="custom-dropdown-btn">
                    {selected}
                    <ChevronDown size={18} className="custom-dropdown-chevron" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu" style={{ borderRadius: 12, borderColor: '#c6a174' }}>
                    <Dropdown.Item eventKey="По голосам">По голосам</Dropdown.Item>
                    <Dropdown.Item eventKey="По комментариям">По комментариям</Dropdown.Item>
                    <Dropdown.Item eventKey="По дате">По дате</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <PhotoList/>
        </div>
    );
};

export default observer(Main);