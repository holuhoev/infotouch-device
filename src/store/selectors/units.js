import { values, filter, includes, trim, toLower } from "ramda";
import { selectElementById } from "./map";

const selectUnitStore = state => state.units;

export const selectUnitList = state => {
    const searchQuery = state.units.searchQuery;

    const unitList = filter(unit => {
        return !!unit.title
    }, values(selectUnitStore(state).data));

    if (!!searchQuery) {
        return filter(unit => includes((toLower(trim(searchQuery))), toLower(unit.title)), unitList);
    }

    return unitList
};

export const selectUnitById = (state, id) => selectUnitStore(state).data[ id ];

export const selectUnitSchemeElementId = (state, id) => selectUnitById(state, id) ? selectUnitById(state, id)[ 'schemeElementId' ] : null;

export const selectUnitPointId = (state, id) => {
    const elementId = selectUnitSchemeElementId(state, id);

    return elementId
        ? selectElementById(state, elementId).centerPointId
        : null;
};