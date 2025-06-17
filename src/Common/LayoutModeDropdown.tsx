import React from "react";
import { Dropdown } from 'react-bootstrap';
import { changeLayoutMode } from 'slices/thunk';
import { useDispatch } from 'react-redux';
import { LAYOUT_MODE_TYPES } from 'Common/constants/layout';


const LayoutModeDropdown = () => {
    const dispatch = useDispatch<any>();
    return (
        <React.Fragment>
            <Dropdown className="topbar-head-dropdown ms-1 header-item" align="start">
                <Dropdown.Toggle as='button'className="btn btn-icon btn-topbar btn-ghost-dark rounded-circle mode-layout arrow-none">
                    <i className="bi bi-sun align-middle fs-3xl"></i>
                </Dropdown.Toggle>                
                <Dropdown.Menu className="p-2 dropdown-menu-end" id="light-dark-mode">
                    <Dropdown.Item href="#" data-mode="light" onClick={() => dispatch(changeLayoutMode(LAYOUT_MODE_TYPES.LIGHTMODE))}><i className="bi bi-sun align-middle me-2"></i> Default (modo claro)</Dropdown.Item>
                    <Dropdown.Item href="#" data-mode="dark" onClick={() => dispatch(changeLayoutMode(LAYOUT_MODE_TYPES.DARKMODE))}><i className="bi bi-moon align-middle me-2"></i> Oscuro</Dropdown.Item>
                    <Dropdown.Item href="#" data-mode="auto" onClick={() => dispatch(changeLayoutMode(LAYOUT_MODE_TYPES.LIGHTMODE))}><i className="bi bi-moon-stars align-middle me-2"></i> Auto (Sistema)</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </React.Fragment>
    )
}

export default LayoutModeDropdown;