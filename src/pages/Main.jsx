import React, {useContext, useState} from 'react';
import PhotoCard from "../components/PhotoCard";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import PhotoList from "../components/PhotoList";
import {DropdownButton, Dropdown} from "react-bootstrap";
import {ChevronDown} from "react-bootstrap-icons";

const Main = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="main">
            <Dropdown show={open} onToggle={() => setOpen(!open)}>
                <Dropdown.Toggle id="custom-dropdown" className="custom-dropdown-btn">
                    Сортировать
                    <ChevronDown size={18} className="custom-dropdown-chevron" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="custom-dropdown-menu" style={{ borderRadius: 12, borderColor: '#c6a174' }}>
                    <Dropdown.Item>По возрастанию</Dropdown.Item>
                    <Dropdown.Item>По убыванию</Dropdown.Item>
                    <Dropdown.Item>По дате</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <PhotoList/>
        </div>
    );
};

export default observer(Main);