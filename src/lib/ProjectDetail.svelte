<script>
    // @ts-nocheck
    import "@ui5/webcomponents-fiori/dist/Bar.js";
    import "@ui5/webcomponents/dist/Button.js";
    import "@ui5/webcomponents/dist/Label.js";
    import "@ui5/webcomponents/dist/Input.js";

    export let project;
    export let setLayout;

    function textPrice(iPrice, iCurrency) {
        return iPrice.toLocaleString("de-DE", { style: "currency", currency: iCurrency || "" });
    }
</script>

<template>
    <div style="margin: 10px; max-height: 69em;">
        <ui5-bar design="Header">
            <ui5-label slot="startContent"><h2>Projektdaten</h2></ui5-label>
            <ui5-label>ID: {project.id} Name: {project.name}</ui5-label>
            <ui5-button
                slot="endContent"
                design="Transparent"
                icon="full-screen"
                on:click={() => {
                    setLayout("MidColumnFullScreen");
                }}
                aria-hidden="true"
            />
            <ui5-button
                slot="endContent"
                icon="decline"
                design="Transparent"
                on:click={() => {
                    setLayout("OneColumn");
                }}
                aria-hidden="true"
            />
        </ui5-bar>
        <div class="card-content">
            <div>
                <ui5-label id="label_project_budget" for="projekt_budget" show-colon class="label">Budget</ui5-label>
                <ui5-input
                    id="project_budget"
                    accessible-name-ref="label_project_budget"
                    disabled
                    value={textPrice(project.budget, project.currency)}
                    class="price"
                />
            </div>
            <div>
                <ui5-label id="label_project_disposed" for="projekt_disposed" show-colon class="label">verfügt</ui5-label>
                <ui5-input
                    id="project_disposed"
                    accessible-name-ref="label_project_disposed"
                    disabled
                    value={textPrice(project.disposed, project.currency)}
                    class="price"
                />
            </div>
            <div>
                <ui5-label id="label_project_disposable" for="projekt_disposable" show-colon class="label">verfügbar</ui5-label>
                <ui5-input
                    id="project_disposable"
                    accessible-name-ref="label_project_disposable"
                    disabled
                    value={textPrice(project.budget - project.disposed, project.currency)}
                    class="price"
                />
            </div>
        </div>
    </div>
</template>

<style>
    .card-content {
        height: 500px inherit;
        padding: 20px;
        background-color: var(--sapBaseColor);
    }
    .label {
        width: 100px;
    }
    .price {
        text-align: end;
    }
</style>
