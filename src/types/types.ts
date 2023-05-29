
export type TPerson = {
    id: string,
    name: string,
    username: string,
    password: string,
    role: CATEGORY.ADM | CATEGORY.INSTRUCTOR | CATEGORY.NORMAL
}

enum CATEGORY {
    ADM = "ADM",
    NORMAL = "NORMAL",
    INSTRUCTOR = "INSTRUCTOR"
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
    modulos_idModulos: string,
}
enum MODULOREFERENCIA {
    M1 = "FUNDAMENTOS",
    M2 = "FRONTEND",
    M3 = "BACKEND",
    M4 = "SQL",
    M5 = "TESTING"
}

