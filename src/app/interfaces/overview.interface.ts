export interface Overview {
    properties?: (PropertiesEntity)[] | null;
    clusters?: (ClustersEntity)[] | null;
    solitary?: (SolitaryEntity)[] | null;
    hits: number;
}

export interface PropertiesEntity {
    id: number;
    street_nr: string;
    houseType: string;
    thumb: string;
    thumb2: string;
    thumb3: string;
    floor_area: number;
    lotsize: number | string;
    rooms: number;
    year_built: number | string;
    city: string;
    zip: string;
    price: number;
    price_type: string;
    latitude: number;
    longitude: number;
    listing_status: string;
    spot: boolean;
    state: string;
    openhouse: string;
}
export interface ClustersEntity {
    clusterID: string;
    name: string;
    longitude: number;
    latitude: number;
    propertyCount: number;
    minPrice: number;
    maxPrice: number;
}

export interface SolitaryEntity {
    longitude: number;
    latitude: number;
    id: number;
    app?: boolean | null;
    strt: string;
    cty: string;
    prc: string;
}
