import { db } from './database/knex'
import express, { Request, Response } from 'express';
import cors from 'cors';
import dataTasks from './data/dataTasks';
import dataProjects from './data/dataProjects';
import { ERROR } from 'sqlite3';

const app = express()

const PORT = 3030
const port = process.env.PORT
app.use(cors())
app.use(express.json())


app.get("/tasks", async (req: Request, res: Response) => {
    const result = await db.raw(`SELECT *FROM tasks`)
    res.status(200).send(result)
    try {
        res.status(200).send({ tasks: result, message: `<body><h2>LISTA TASKS</h2></body>` })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.get("/authors", async (req: Request, res: Response) => {
    const result = await db.raw(`SELECT *FROM authors`)
    res.status(200).send(result)
    try {
        res.status(200).send({ tasks: result, message: `<body><h2>LISTA TASKS</h2></body>` })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.post("/authors", async (req: Request, res: Response) => {

    const name = req.params.name
    const username = req.params.username
    const password = req.params.password
    const roleDefault = "NORMAL"
    const lastId = await db.raw(
        `SELECT id FROM authors WHERE ASC`
    )

    // valida tipo de dados para nao stressar conexao db
    if (typeof name !== "string") {
        res.status(400)
        throw new Error('id deve ser caracter de texto')
    }
    if (typeof username !== "string") {
        res.status(400)
        throw new Error('username invalido')
    }
    if (typeof password !== "string") {
        res.status(400)
        throw new Error('senha invalida')
    }


})
app.listen(3030, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})



