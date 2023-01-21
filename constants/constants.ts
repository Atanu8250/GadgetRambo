export type authActionType = {
    type: string,
    payload?: string | {}
}

export interface intrfcUser {
    uid: string,
    displayName: string,
    email: string,
    emailVerified: boolean,
    photoURL: string,
    creationTime: string,
    lastSignInTime: string,
    isAdmin: boolean,
    isActive: boolean
}


export interface intrfcLaptop {
    bateryCapacity: number,
    brand: string,
    colours: string,
    description: string,
    dimensions: string,
    hardDisk: string,
    image: string,
    model: string,
    modelNumber: string,
    name: string,
    numberOfUSBPorts: number,
    os: string,
    price: number,
    processor: string,
    ram: number,
    releaseDate: string,
    resolution: string,
    series: string,
    size: string,
    ssd: number,
    weight: number,
    wifi: string,
}

export interface intrfcMobile {
    displaySize: string,
    frontCamera: string,
    imgsrc: string,
    modal: string,
    price: number,
    processor: string,
    rearCamera: string,
    related: string,
    related2: string,
    releaseDate: string,
}

export interface intrfcTv {
    displaySize: string,
    displayType: string,
    imgsrc: string,
    modal: string,
    os: string,
    price: number,
    related: string,
    resolutionStandard: string,
}