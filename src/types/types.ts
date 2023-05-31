
export type TPerson = {
    id: string,
    name: string,
    username: string,
    email: string,
    password: string,
    role: CATEGORY.ADM | CATEGORY.INSTRUCTOR | CATEGORY.NORMAL | CATEGORY.BUYER
}

export enum CATEGORY {
    ADM = "ADM",
    INSTRUCTOR = "INSTRUCTOR",
    NORMAL = "NORMAL",
    AUTHOR = "AUTHOR",
    BUYER = "BUYER"
}

export type Task = {
    id: string,
    title: string,
    description: string,
    status: CURRENTSTATUS.INICIADA | CURRENTSTATUS.NAOINICIADA
}

export enum CURRENTSTATUS {
    NAOINICIADA = 0,
    INICIADA = 1
}

export type AUTHORS_TASKS = {
    id_task: string,
    id_author: string
}

export type TProjects = {
    id: string,
    name: string,
    img: string,
    repo: string,
    url: string,
    release: number,
    modulos_idModulos: "MR";
}


const Title = {
    name: "CONWAY",
    product: "AULAS",
    value: "LABENU"
}
type HEADER = {
    name: "PROJETOS",
    product: 8,
    key: "AUTHORIZHATION",
    AUTHORIZATHION: "CONWAY-BOTECHIA-ERIKA",
    LABENUMERO: "22124748",
    LABEMAIL: "BOTECHIAERI@GMAIL.COM"
}