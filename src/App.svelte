<script lang="ts">
    // @ts-nocheck

    import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme";
    import "@ui5/webcomponents-base/dist/features/F6Navigation";
    import applyDirection from "@ui5/webcomponents-base/dist/locale/applyDirection.js";

    import "@ui5/webcomponents/dist/Button";
    import "@ui5/webcomponents/dist/Input";
    import "@ui5/webcomponents/dist/DatePicker";
    import "@ui5/webcomponents/dist/Panel";
    import "@ui5/webcomponents/dist/Dialog";
    import "@ui5/webcomponents/dist/TextArea";
    import "@ui5/webcomponents/dist/Popover";
    import "@ui5/webcomponents/dist/Tab";
    import "@ui5/webcomponents/dist/TabContainer";
    import "@ui5/webcomponents-fiori/dist/ShellBar";
    import "@ui5/webcomponents-fiori/dist/ShellBarItem";
    import "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js";
    import "@ui5/webcomponents-fiori/dist/Assets.js";
    import "@ui5/webcomponents/dist/Switch";
    import "@ui5/webcomponents-icons/dist/menu.js";
    import "@ui5/webcomponents-icons/dist/palette.js";
    import "@ui5/webcomponents-icons/dist/settings.js";
    import "@ui5/webcomponents-icons/dist/sys-help.js";
    import "@ui5/webcomponents-icons/dist/log.js";
    import "@ui5/webcomponents-icons/dist/account.js";
    import "@ui5/webcomponents-icons/dist/private.js";
    import "@ui5/webcomponents-icons/dist/loan.js";
    import "@ui5/webcomponents-icons/dist/globe.js";
    import "@ui5/webcomponents-icons/dist/home.js";
    import "@ui5/webcomponents-icons/dist/group.js";
    import "@ui5/webcomponents-icons/dist/locate-me.js";
    import "@ui5/webcomponents-icons/dist/calendar.js";
    import "@ui5/webcomponents-icons/dist/chain-link.js";
    import "@ui5/webcomponents-icons/dist/history.js";
    import "@ui5/webcomponents-icons/dist/full-screen.js";
    import "@ui5/webcomponents-icons/dist/add.js";
    import TableProjectList from "./lib/TableProjectList.svelte";
    //import logo from "./assets/imgs/UI5-orange-pheonix-logo.png";
    //import type { TodoItemT } from "./types/TodoItem.type";
    import ProjectDetail from "./lib/ProjectDetail.svelte";
    import { onMount } from "svelte";

    setTheme("sap_horizon");

    const shellBarTitle: string = "SAP Projektmanager";
    const dialogHeaderText: string = "Edit Todo";

    // Elements
    let themeSettingsPopover;
    let profileSettingsPopover;

    // // Create ToDo Fields
    // let itemInputValue;
    // let itemDateInputValue;

    // // Edit Dialog fields
    // let itemEditText: string = "";
    // let itemEditDate: string = "";
    // let selectedEditItem: number;

    // Event Handlers

    const handleThemeSettingsToggle = (event) => {
        themeSettingsPopover.showAt(event.detail.targetRef);
    };

    const handleThemeChange = (event) => {
        setTheme(event.detail.selectedItems[0].getAttribute("data-theme"));
        themeSettingsPopover.close();
    };

    const handleProfileClick = (event) => {
        profileSettingsPopover.showAt(event.detail.targetRef);
    };

    const handleProfileSettingsSelect = (event) => {
        const selectedKey = event.detail.item.getAttribute("data-key");
        if (selectedKey === "settings") {
            window["settings-dialog"].show(event.detail.targetRef);
        } else if (selectedKey === "help") {
            window["help-dialog"].show(event.detail.targetRef);
        }
    };

    const handleRtlSwitchChange = (event) => {
        document.body.dir = event.target.checked ? "rtl" : "ltr";
        applyDirection();
    };

    const handleContentDensitySwitchChange = (event) => {
        if (event.target.checked) {
            document.body.classList.add("ui5-content-density-compact");
        } else {
            document.body.classList.remove("ui5-content-density-compact");
        }
    };

    const handleSettingsDialogCloseButtonClick = (event) => {
        window["settings-dialog"].close();
    };

    const handleHelpDialogCloseButtonClick = (event) => {
        window["help-dialog"].close();
    };

    let data = [
        { id: 1, name: "Rungestraße 19", budget: 25050.0, disposed: 1000.0, currency: "EUR" },
        { id: 2, name: "Hauptstr. 100", budget: 35050.0, disposed: 2000.0, currency: "EUR" },
        { id: 3, name: "Rungestraße 19", budget: 25050.0, disposed: 1000.0, currency: "EUR" },
        { id: 4, name: "Hauptstr. 100", budget: 35050.0, disposed: 2000.0, currency: "EUR" },
        { id: 5, name: "Rungestraße 19", budget: 25050.0, disposed: 1000.0, currency: "EUR" },
        { id: 6, name: "Hauptstr. 100", budget: 35050.0, disposed: 2000.0, currency: "EUR" },
        { id: 7, name: "Rungestraße 19", budget: 25050.0, disposed: 1000.0, currency: "EUR" },
        { id: 8, name: "Hauptstr. 100", budget: 35050.0, disposed: 2000.0, currency: "EUR" },
        { id: 9, name: "Rungestraße 19", budget: 25050.0, disposed: 1000.0, currency: "EUR" },
        { id: 10, name: "Hauptstr. 100", budget: 35050.0, disposed: 2000.0, currency: "EUR" },
        { id: 11, name: "Rungestraße 19", budget: 25050.0, disposed: 1000.0, currency: "EUR" },
        { id: 12, name: "Hauptstr. 100", budget: 35050.0, disposed: 2000.0, currency: "EUR" },
        { id: 13, name: "Rungestraße 19", budget: 25050.0, disposed: 1000.0, currency: "EUR" },
        { id: 14, name: "Hauptstr. 100", budget: 35050.0, disposed: 2000.0, currency: "EUR" },
        { id: 15, name: "Rungestraße 19", budget: 25050.0, disposed: 1000.0, currency: "EUR" },
        { id: 16, name: "Hauptstr. 100", budget: 35050.0, disposed: 2000.0, currency: "EUR" },
        { id: 17, name: "Rungestraße 19", budget: 25050.0, disposed: 1000.0, currency: "EUR" },
        { id: 18, name: "Hauptstr. 100", budget: 35050.0, disposed: 2000.0, currency: "EUR" },
        { id: 19, name: "Rungestraße 19", budget: 25050.0, disposed: 1000.0, currency: "EUR" },
        { id: 20, name: "Hauptstr. 100", budget: 35050.0, disposed: 2000.0, currency: "EUR" },
    ];
    let columns = [
        { name: "id", label: "ID", type: "number" },
        { name: "name", label: "Name" },
        { name: "budget", label: "Budget", align: "right", type: "price" },
        { name: "disposed", label: "verfügt", align: "right", type: "price" },
        { name: "disposable", label: "verfügbar", align: "right", type: "price", format: (val, row) => row["budget"] - row["disposed"] },
    ];

    let fcl = {};

    const setLayout = (iLayout) => {
        fcl.layout = iLayout;
    };

    onMount(() => {
        fcl = document.getElementById("fcl");
    });

    let project = data[0];
</script>

<main class="app">
    <ui5-shellbar primary-title={shellBarTitle} show-notifications notifications-count="2" on:profile-click={handleProfileClick}>
        <!--img class="app-header-logo" slot="logo" src={logo} alt="ui5 orange pheonix logo" /-->
        <!--ui5-button icon="menu" slot="startButton" id="startButton" on:click={handleSideBar} aria-hidden="true" /-->
        <ui5-shellbar-item icon="palette" text="Theme" on:click={handleThemeSettingsToggle} aria-hidden="true" />
        <ui5-avatar slot="profile" size="XS" initials="JD" />
    </ui5-shellbar>

    <ui5-flexible-column-layout id="fcl">
        <!-- start column -->
        <div slot="startColumn">
            <TableProjectList header_name="Projektliste" {data} {columns} {setLayout} bind:project />
        </div>

        <!-- middle column -->
        <div slot="midColumn">
            <ProjectDetail {setLayout} bind:project />
        </div>


    </ui5-flexible-column-layout>

    <ui5-popover
        bind:this={themeSettingsPopover}
        class="app-bar-theming-popover"
        placement-type="Bottom"
        horizontal-align="Right"
        header-text="Theme"
    >
        <ui5-list mode="SingleSelect" on:selection-change={handleThemeChange}>
            <ui5-li icon="palette" data-theme="sap_horizon" selected>SAP Horizon Morning</ui5-li>
            <ui5-li icon="palette" data-theme="sap_horizon_dark">SAP Horizon Evening</ui5-li>
            <ui5-li icon="palette" data-theme="sap_horizon_hcb">SAP Horizon HCB</ui5-li>
            <ui5-li icon="palette" data-theme="sap_horizon_hcw">SAP Horizon HCW</ui5-li>
            <ui5-li icon="palette" data-theme="sap_fiori_3">SAP Quartz Light</ui5-li>
            <ui5-li icon="palette" data-theme="sap_fiori_3_dark">SAP Quartz Dark</ui5-li>
            <ui5-li icon="palette" data-theme="sap_fiori_3_hcb">SAP Quartz HCB</ui5-li>
            <ui5-li icon="palette" data-theme="sap_fiori_3_hcw">SAP Quartz HCW</ui5-li>
        </ui5-list>
    </ui5-popover>

    <ui5-popover
        bind:this={profileSettingsPopover}
        id="profile-pop"
        class="app-bar-profile-popover"
        placement-type="Bottom"
        horizontal-align="Right"
    >
        <div class="profile-settings">
            <ui5-avatar size="M" initials="JD" />
            <div class="profile-text">
                <ui5-title level="H3">John Doe</ui5-title>
                <ui5-label>Svelte Developer</ui5-label>
            </div>
        </div>

        <div class="profile-settings-list">
            <ui5-list mode="SingleSelect" separators="None" on:item-click={handleProfileSettingsSelect} bind:this={profileSettingsPopover}>
                <ui5-li icon="settings" data-key="settings">Settings</ui5-li>
                <ui5-li icon="sys-help" data-key="help">Help</ui5-li>
                <ui5-li icon="log" data-key="sign-out">Sign out</ui5-li>
            </ui5-list>
        </div>
    </ui5-popover>

    <ui5-dialog id="settings-dialog" header-text="Profile Settings" draggable>
        <div>
            <div class="profile-rtl-switch centered">
                <div class="profile-rtl-switch-title">
                    <ui5-label class="profile-rtl-switch-text">RTL</ui5-label>
                </div>
                <ui5-switch on:change={handleRtlSwitchChange} />
            </div>
        </div>

        <div class="profile-rtl-switch centered">
            <div class="profile-rtl-switch-title">
                <ui5-label class="profile-rtl-switch-text">Compact</ui5-label>
            </div>
            <ui5-switch on:change={handleContentDensitySwitchChange} />
        </div>

        <div class="dialog-button">
            <ui5-button on:click={handleSettingsDialogCloseButtonClick} design="Emphasized" aria-hidden="true">Close</ui5-button>
        </div>
    </ui5-dialog>

    <ui5-dialog id="help-dialog">
        <div slot="header" class="help-header" id="header-title-align">
            <ui5-icon name="sys-help" />
            Help
        </div>

        <div class="help-header" id="header-logo-align">
            <!--img class="app-header-logo" alt="logo" slot="logo" src={logo} /-->
            <ui5-title level="H5">{shellBarTitle}</ui5-title>
        </div>

        <p class="help-dialog-text">
            <b>Release</b>: b225.20220729335 <br />
            <b>Server</b>: pk21443x3132 <br />
            <b>Timestamp</b>: 2022-08-18T10:29:03.159+0200 <br />
            <b>Company ID</b>: SAP <br />
            <b>UI version</b>: SAP Fiori <br />
            <b>Edition</b>: Enterprise <br />
            <b>App version</b>: Project Manager 0.1.0 <br />
        </p>
        <hr />
        <span class="help-dialog-text"
            >For more information, please visit our <a
                href="https://github.com/SAP-samples/ui5-webcomponents-sample-svelte"
                target="noreferrer">documentation</a
            >.</span
        >
        <p />
        <div class="dialog-button">
            <ui5-button design="Emphasized" on:click={handleHelpDialogCloseButtonClick} aria-hidden="true">Close</ui5-button>
        </div>
    </ui5-dialog>
</main>

<style scoped>
</style>
