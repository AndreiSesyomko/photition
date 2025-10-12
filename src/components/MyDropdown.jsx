import React from 'react'
import {DropdownButton, Dropdown} from "react-bootstrap";
import {ChevronDown} from "react-bootstrap-icons";

export default function MyDropdown({handleSelect, open, selected, setOpen}) {
  return (
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
  )
}
