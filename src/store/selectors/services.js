import { values, map, includes, filter, indexBy, prop, trim, toLower } from "ramda";

import { SERVICE_TYPE_LABELS } from "../reducers/services";
import { selectBuildingNameById } from "./building";
import { hasPoint } from "../../utils/common";


const selectServiceStore = state => state.services;

const getServiceTypeLabel = service => SERVICE_TYPE_LABELS[ service.type ];

const getServiceForList = state => service => {
    const { buildingId, floor } = service;

    return {
        ...service,
        floorLabel:   floor ? `${ floor } этаж` : '',
        typeLabel:    getServiceTypeLabel(service) || '',
        buildingName: selectBuildingNameById(state)(buildingId) || ''
    }
};

export const selectServiceList = state => {
    const searchQuery = state.services.searchQuery;

    return filter(filterService(searchQuery), values(map(getServiceForList(state), selectServiceStore(state).data)));
};

export const filterService = searchQuery => service => {
    if (!searchQuery)
        return true;

    const exact = (toLower(trim(searchQuery)));

    const { typeLabel, title } = service;

    return includes(exact, toLower(typeLabel)) || includes(exact, toLower(title));
};

export const selectServiceById = (state, id) => selectServiceStore(state).data[ id ];

export const selectServicePointId = (state, id) => selectServiceById(state, id) ? selectServiceById(state, id).pointId : null;

export const selectServicesForMap = state => {
    const services = values(selectServiceStore(state).data);

    return map(prop('type'), indexBy(prop('pointId'), filter(hasPoint, services)));
};
