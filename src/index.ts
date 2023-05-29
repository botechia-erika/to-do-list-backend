import { db } from './database/knex'
import knex from 'knex'
import express, { Request, Response } from 'express';
import cors from 'cors';
import dataTasks from './data/dataTasks';
import dataProjects from './data/dataProjects';


const app = express()

const PORT = 3030
const port = process.env.PORT
app.use(cors())
app.use(express.json())


app.get("/tasks", async (req: Request, res: Response) => {
    const result = await db.raw(`SELECT *FROM tasks`)
    res.send(result)
    try {
        res.status(200).send({ tasks: result })
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
    const result = await db.raw(`SELECT * FROM authors`)
    res.send(result)
    try {
        res.status(200).send({ tasks: result })
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


app.get("/authors/create", async (req: Request, res: Response) => {
    const result = await db.raw(`SELECT * FROM authors`)
    res.send(result)
    try {
        res.status(200).send({ tasks: result })
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

app.post("/authors/create", async (req: Request, res: Response) => {

    const inputName = req.body.name
    const inputUsername = req.body.username
    const inputPassword = req.body.password
    const inputCPFouCNPJ = req.body.id


    if (typeof inputName != "string") {
        res.status(400).send({ message: 'nome invalido' })
    }

    if (typeof inputName != "string") {
        res.status(400).send({ message: 'nome invalido' })
    }
    if (typeof inputUsername != "string") {
        res.status(400).send('username alfa-numerico')
    }
    if (typeof inputPassword != "string") {
        res.status(400).send("outra senha essa é invalida tente alfa-numerico")
    }
    if (typeof inputCPFouCNPJ != "string") {
        res.status(400).send('CPF ou CNPJ INVALIDO não é possivel criar numero de usuario')
    }
    try {

        const result = await db.raw(`
 INSERT INTO TABLE authors (
        id,
        name,
        username,
        email,
        password
        ) VALUES(
        id = req.params.id,
        name = req.param.name,
        username= req.params.username,
        email=req.params.email,
        password=req.params.password; `)
        res.status(301).send(result).redirect('/users')
        res.send('cadastro de sucesso!')
    }
    catch (error) {
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

app.listen(3030, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})



