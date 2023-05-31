
export type TPerson = {
    id: string,
    name: string,
    username: string,
    email: string,
    password: string,
    role: CATEGORY.ADM | CATEGORY.INSTRUCTOR | CATEGORY.NORMAL | CATEGORY.AUTHOR | CATEGORY.BUYER
}

enum CATEGORY {
    ADM = "ADM",
    NORMAL = "NORMAL",
    INSTRUCTOR = "INSTRUCTOR",
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
    modulos_idModulos: MR;
}
enum MR {
    "M0" = FUNDAMENTOS = 0,
    "M1" = FRONTEND = 1,
    "M2" = BACKEND = 2,
    "M3" = SQL = 3,
    "M4" = TESTING = 4
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