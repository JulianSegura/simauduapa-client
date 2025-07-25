import React, { useEffect, useState } from "react";

const Navdata = () => {
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isContracts, setIsContracts] = useState(false);
    const [isLearning, setIsLearning] = useState(false);
    const [isCourses, setIsCourses] = useState(false);
    const [isStudents, setIsStudents] = useState(false);
    const [isInstructors, setIsInstructors] = useState(false);
    const [isSupportTicket, setIsSupportTicket] = useState(false);
    const [isRealEstate, setIsRealEstate] = useState(false);
    const [isAuthentication, setIsAuthentication] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isagent, setIsAgent] = useState(false);
    const [isagencies, setIsAgencies] = useState(false);

    // Components
    const [isBootstrapUi, setIsBootstrapUi] = useState(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isCustomUi, setIsCustomUi] = useState(false);
    const [isWidgets, setIsWidgets] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);

    const [isOrder, setIsOrder] = useState(false);
    const [isAdminSys, setIsAdminSys] = useState(false);
    const [isShipping, setIsShipping] = useState(false);
    const [isLocalization, setIsLocalization] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Authentication
    const [isError, setIsError] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e: any) {
        if (e && e.target && e.target.getAttribute("sub-items")) {
            const ul: any = document.getElementById("two-column-menu");
            const iconItems: any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id: any = item.getAttribute("sub-items");
                var menusId = document.getElementById(id);
                if (menusId){
                    (menusId.parentElement as HTMLElement).classList.remove("show");
                }
            });
            e.target.classList.add("active");
        }
    }
    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');

        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Contracts') {
            setIsContracts(false);
        }
        if (iscurrentState !== 'Learning') {
            setIsLearning(false);
        }
        if (iscurrentState !== 'AdminSys') {
            setIsAdminSys(false);
        }
        if (iscurrentState !== 'Support Ticket') {
            setIsSupportTicket(false);
        }
        if (iscurrentState !== 'Real Estate') {
            setIsRealEstate(false);
        }
        if (iscurrentState !== 'Authentication') {
            setIsAuthentication(false);
        }
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (iscurrentState !== 'Bootstrap UI') {
            setIsBootstrapUi(false);
        }
        if (iscurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== 'Custom UI') {
            setIsCustomUi(false);
        }
        if (iscurrentState !== 'Widgets') {
            setIsWidgets(false);
        }
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (iscurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (iscurrentState !== 'Maps') {
            setIsMaps(false);
        }

        if (iscurrentState !== 'Orders') {
            setIsOrder(false);
        }
        // if (iscurrentState !== 'Sellers') {
        //     setIsSellers(false);
        // }
        if (iscurrentState !== 'Shipping') {
            setIsShipping(false);
        }
        if (iscurrentState !== 'Localization') {
            setIsLocalization(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
    }, [
        iscurrentState,
        isDashboard,
        isLearning,
        isRealEstate,
        isContracts,
        isSupportTicket,
        isOrder,
        isAdminSys,
        isShipping,
        isLocalization,
        isAuth,
        isMultiLevel,
        isAuthentication,
        isPages,
        isBootstrapUi,
        isAdvanceUi,
        isWidgets,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps
    ]);

    const menuItems: any = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard",
            label: "Inicio",
           icon: "ph-gauge",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
           
       
        },
       
        {
            id: "contracts",
            label: "Gestion de contratos",
            icon: "ph-storefront",
            link: "#",
            click: function (e: any) {
                e.preventDefault();
                setIsContracts(!isContracts);
                setIscurrentState('Contracts');
                updateIconSidebar(e);
            },
            stateVariables: isContracts,
            subItems: [
                { id: 1, label: "Listado de contratos", link: "/contracts", parentId: "contracts" },
                { id: 2, label: "Nuevo contrato", link: "#", parentId: "contracts" },
                { id: 3, label: "Versiones de contrato", link: "#", parentId: "contracts" },
                { id: 4, label: "Renovar/Anular contrato", link: "#", parentId: "contracts" },
                { id: 5, label: "Firmas electronica", link: "#", parentId: "contracts" },
                { id: 6, label: "Documentos adjuntos", link: "#", parentId: "contracts" },
               
            ],
        },
        
        {
            id: "learning",
            label: "Gestion legal",
            icon: "ph-graduation-cap",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsLearning(!isLearning);
                setIscurrentState('Learning');
                updateIconSidebar(e);
            },
            stateVariables: isLearning,
            subItems: [
                {
                    id: "courses",
                    label: "Casos legales",
                    link: "/#",
                    parentId: "learning",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsCourses(!isCourses);
                    },
                    stateVariables: isCourses,
                    subItems: [
                        {
                            id: 1,
                            label: "Seguimiento de tareas",
                            link: "#",
                            parentId: "learning"
                        },
                        {
                            id: 2,
                            label: "Plazos legales",
                            link: "#",
                            parentId: "learning"
                        },
                        {
                            id: 3,
                            label: "Alerta juridicas",
                            link: "#",
                            parentId: "learning"
                        },
                        
                    ]
                },
               
               
            ],
        },
        {
            id: "AdminSys",
            label: "Administracion del sistema",
            icon: "ph-file-text",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsAdminSys(!isAdminSys);
                setIscurrentState('AdminSys');
                updateIconSidebar(e);
            },
            stateVariables: isAdminSys,
            subItems: [
                {
                    id: "userslist",
                    label: "Usuarios",
                    link: "/users",
                    parentId: "AdminSys",
                },
                {
                    id: "overview",
                    label: "Roles y permisos",
                    link: "#",
                    parentId: "AdminSys",
                },
                {
                    id: "createinvoice",
                    label: "Parametros del sistema",
                    link: "#",
                    parentId: "AdminSys",
                },
                {
                    id: "createinvoice",
                    label: "Logs de actividad",
                    link: "#",
                    parentId: "AdminSys",
                },
                {
                    id: "createinvoice",
                    label: "Plantillas",
                    link: "#",
                    parentId: "AdminSys",
                },
            ],
        },
        {
            id: "support-ticket",
            label: "Reportes",
            icon: "ph-ticket",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsSupportTicket(!isSupportTicket);
                setIscurrentState('Support Ticket');
                updateIconSidebar(e);
            },
            stateVariables: isSupportTicket,
            subItems: [
                {
                    id: "listview",
                    label: "Contrato por estatus",
                    link: "#",
                    parentId: "support-ticket",
                },
                {
                    id: "overview",
                    label: "Contrato a vencer",
                    link: "#",
                    parentId: "support-ticket",
                },
                {
                    id: "overview",
                    label: "Historial de firmas",
                    link: "#",
                    parentId: "support-ticket",
                },
                {
                    id: "overview",
                    label: "Actividades por usuario",
                    link: "#",
                    parentId: "support-ticket",
                },
                {
                    id: "overview",
                    label: "Exportacion de contratos",
                    link: "#",
                    parentId: "support-ticket",
                },
            ],
        },
        {
            id: "real-estate",
            label: "Ayuda",
            icon: "ph-buildings",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsRealEstate(!isRealEstate);
                setIscurrentState('Real Estate');
                updateIconSidebar(e);
            },
            stateVariables: isRealEstate,
            subItems: [
                {
                    id: "sign in",
                    label: "Manual de usuarios",
                    link: "#",
                    parentId: "real-estate",
                },
                {
                    id: "listinglist",
                    label: "FAQ",
                    link: "#",
                    parentId: "real-estate",
                },
                {
                    id: "listingmap",
                    label: "Asistente",
                    link: "#",
                    parentId: "real-estate",
                },
               
            ],
        },
        
        {
            id: "googleMaps",
            label: "Cerrar sesion",
            icon: "ph-map-trifold",
            link: "/logout",
        },
       

    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};

export default Navdata;