import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import withRouter from 'Common/withRouter';
import { Collapse } from 'react-bootstrap';

import { withTranslation } from "react-i18next";

// Import Data
import navdata from "../LayoutMenuData";
import { Link } from 'react-router-dom';

const VerticalLayout = (props: any) => {
    const path = props.router.location.pathname;
    const navData = navdata().props.children;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const initMenu = () => {
            const pathName = process.env.PUBLIC_URL + path;
            const ul: any = document.getElementById("navbar-nav");
            const items = ul.getElementsByTagName("a");
            let itemsArray = [...items]; // converts NodeList to Array
            removeActivation(itemsArray);
            let matchingMenuItem = itemsArray.find((x) => {
                return x.pathname === pathName;
            });
            if (matchingMenuItem) {
                activateParentDropdown(matchingMenuItem);
            }
        };
        if (props.layoutType === "vertical") {
            initMenu();
        }
    }, [path, props.layoutType]);

    function activateParentDropdown(item: any) {
        item.classList.add("active");
        let parentCollapseDiv = item.closest(".collapse.menu-dropdown");

        if (parentCollapseDiv) {

            // to set aria expand true remaining
            parentCollapseDiv.classList.add("show");
            parentCollapseDiv.parentElement.children[0].classList.add("active");
            parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                    parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
            }
            return false;
        }
        return false;
    }

    const removeActivation = (items: any) => {
        let actiItems = items.filter((x: any) => x.classList.contains("active"));

        actiItems.forEach((item: any) => {
            if (item.classList.contains("menu-link")) {
                if (!item.classList.contains("active")) {
                    item.setAttribute("aria-expanded", false);
                }
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.remove("show");
                }
            }
            if (item.classList.contains("nav-link")) {
                if (item.nextElementSibling) {
                    item.nextElementSibling.classList.remove("show");
                }
                item.setAttribute("aria-expanded", false);
            }
            item.classList.remove("active");
        });
    };

    return (
        <React.Fragment>
            {/* menu Items */}
            {(navData || []).map((item: any, key: number) => {
                return (
                    <React.Fragment key={key}>
                        {/* Main Header */}
                        {item['isHeader'] ?
                            <li className="menu-title"><span data-key="t-menu">{props.t(item.label)} </span></li>
                            : (
                                (item.subItems ? (
                                    <li className="nav-item">
                                        <Link to={item.link ? item.link : "/"} onClick={item.click} className="nav-link menu-link" data-bs-toggle="collapse">
                                            <i className={item.icon}></i>
                                            <span data-key="t-apps">{props.t(item.label)}</span>
                                            {item.badgeName ?
                                                <span className={"badge badge-pill bg-soft-" + item.badgeColor} data-key="t-new">{item.badgeName}</span>
                                                : null}
                                        </Link>
                                        <Collapse
                                            className="menu-dropdown"
                                            // className="menu-dropdown"
                                            in={item.stateVariables}
                                        >
                                            <div id="example-collapse-text">
                                                <ul className="nav nav-sm flex-column">
                                                    {/* subItms  */}
                                                    {item.subItems && ((item.subItems || []).map((subItem: any, key: number) => (
                                                        <React.Fragment key={key}>
                                                            {!subItem.isChildItem ? (
                                                                <li className="nav-item">
                                                                    <Link to={subItem.link ? subItem.link : "/"} className="nav-link">
                                                                        {props.t(subItem.label)}
                                                                        {subItem.badgeName ?
                                                                            <span className={"badge badge-pill bg-soft-" + subItem.badgeColor} data-key="t-new">{subItem.badgeName}</span>
                                                                            : null}
                                                                    </Link>
                                                                </li>
                                                            ) : (
                                                                <li className="nav-item">
                                                                    <Link to="/" onClick={subItem.click} className="nav-link" data-bs-toggle="collapse">
                                                                        {props.t(subItem.label)}
                                                                    </Link>
                                                                    <Collapse
                                                                        className="menu-dropdown"
                                                                        in={subItem.stateVariables}
                                                                    >
                                                                        <div>
                                                                            <ul className="nav nav-sm flex-column">
                                                                                {/* child subItms  */}
                                                                                {subItem.subItems && (
                                                                                    (subItem.subItems || []).map((childItem: any, key: number) => (
                                                                                        <React.Fragment key={key}>
                                                                                            {!childItem.subItems ?
                                                                                                <li className="nav-item">
                                                                                                    <Link to={childItem.link ? childItem.link : "/"} className="nav-link">
                                                                                                        {props.t(childItem.label)}
                                                                                                    </Link>
                                                                                                </li>
                                                                                                : <li className="nav-item">
                                                                                                    <Link to="/" onClick={childItem.click} className="nav-link" data-bs-toggle="collapse">
                                                                                                        {props.t(childItem.label)}
                                                                                                    </Link>
                                                                                                    <Collapse
                                                                                                        className="menu-dropdown"
                                                                                                        in={childItem.stateVariables}
                                                                                                    >
                                                                                                        <div>
                                                                                                            <ul className="nav nav-sm flex-column">
                                                                                                                {childItem.subItems.map((subChildItem: any, key: number) => (
                                                                                                                    <li className="nav-item" key={key}>
                                                                                                                        <Link to={subChildItem.link} className="nav-link">{props.t(subChildItem.label)}</Link>
                                                                                                                    </li>
                                                                                                                ))}
                                                                                                            </ul>
                                                                                                        </div>
                                                                                                    </Collapse>
                                                                                                </li>
                                                                                            }
                                                                                        </React.Fragment>
                                                                                    ))
                                                                                )}
                                                                            </ul>
                                                                        </div>
                                                                    </Collapse>
                                                                </li>
                                                            )}
                                                        </React.Fragment>
                                                    ))
                                                    )}
                                                </ul>
                                            </div>

                                        </Collapse>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <Link to={item.link ? item.link : "/"} className="nav-link menu-link">
                                            <i className={item.icon}></i> <span>{props.t(item.label)}</span>
                                            {item.badgeName ?
                                                <span className={"badge badge-pill badge-soft-" + item.badgeColor} data-key="t-new">{item.badgeName}</span>
                                                : null}
                                        </Link>
                                    </li>
                                ))
                            )
                        }
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
};

VerticalLayout.propTypes = {
    location: PropTypes.object,
    t: PropTypes.any,
};

export default withRouter(withTranslation()(VerticalLayout));