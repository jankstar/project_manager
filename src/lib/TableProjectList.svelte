<script>
    // @ts-nocheck
    import "@ui5/webcomponents-fiori/dist/Bar.js";
    import "@ui5/webcomponents/dist/Table.js";
    import "@ui5/webcomponents/dist/TableColumn.js";
    import "@ui5/webcomponents/dist/TableRow.js";
    import "@ui5/webcomponents/dist/TableCell.js";
    import "@ui5/webcomponents/dist/Label.js";
    import "@ui5/webcomponents/dist/Input.js";

    export let header_name = "";
    export let data = [];
    export let columns = [];
    export let mode = "SingleSelect";
    export let setLayout;
    export let project;

    let search = "";
    let count = 0;
    $: {
        count = 0;
        data.forEach((i) => {
            if (i.name.includes(search) || search.length == 0) {
                count += 1;
            }
        });
    }

    function formatCell(iVal = "", iRow = {}, iCol = {}) {
        if (iCol.format) {
            iVal = iCol.format(iVal, iRow);
        }

        if (iCol.type == "price") {
            return iVal.toLocaleString("de-DE", { style: "currency", currency: iRow["currency"] || "" });
        }

        return iVal;
    }

</script>

<template>
    <div style="margin: 10px; height: 100%; overflow: hidden;">
        <ui5-bar design="Header">
            <ui5-label slot="startContent"><h2>{header_name}</h2></ui5-label>
            <ui5-input
                id="searchInput"
                placeholder="Enter search criteria ..."
                value={search}
                on:input={() => {
                    search = document.getElementById("searchInput").value;
                }}
            >
                <ui5-icon id="searchIcon" slot="icon" name="search" />
            </ui5-input>
            <ui5-label slot="endContent">Anzahl:{count} von {data.length}</ui5-label>
        </ui5-bar>

        <ui5-table id="table" {mode} aria-hidden="true" no-data-text="No Data" sticky-column-header>
            {#each columns as col}
                <ui5-table-column slot="columns" class="table-header-text-{col.align || 'left'}">
                    {col.label || col.name}
                </ui5-table-column>
            {/each}
            {#each data as row}
                {#if row.name.includes(search) || search.length == 0}
                    <ui5-table-row
                        on:click={() => {
                            setLayout("TwoColumnsMidExpanded");
                            project = row;
                        }}
                        aria-hidden="true"
                    >
                        {#each columns as col}
                            <ui5-table-cell class="table-cell-text-{col.align || 'left'}"
                                >{formatCell(row[col.name], row, col)}</ui5-table-cell
                            >
                        {/each}
                    </ui5-table-row>
                {/if}
            {/each}
        </ui5-table>
    </div>
</template>

<style>
    ui5-table {
        scroll-behavior: smooth;
        width: 100%;
        height: calc(100vh - 9em);
        overflow-y: scroll;
        overflow-x: scroll;
        scrollbar-width: thin;
    }
    ui5-table ui5-table-column.table-header-text-right::part(column) {
        text-align: end;
    }
    ui5-table ui5-table-column.table-header-text-left::part(column) {
        text-align: start;
    }
    ui5-table-cell.table-cell-text-right {
        text-align: right;
    }
    ui5-table-cell.table-cell-text-left {
        text-align: left;
    }
</style>
