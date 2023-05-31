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
    const result = await db.select(`*`).from(`authors`)
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
    res.render('/tasks', { message: 'tasks atualizadas' })
})

/*--
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
*/

app.get("/authors", async (req: Request, res: Response) => {
    try {
        const result = await db.select(`*`).from(`authors`)

        res.status(200).send({ authors: result, message: 'authors atualizado' })
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

    try {
        const id = req.body.id
        const name = req.body.name
        const username = req.body.username
        const email = req.body.email
        const password = req.body.password
        const role = req.body.role


        if (typeof id !== typeof "string") {
            res.status(400).send({ message: 'nome invalido' })
        }

        if (typeof name != "string") {
            res.status(400).send({ message: 'nome invalido' })
        }
        if (typeof username != "string") {
            res.status(400).send('username alfa-numerico')
        }
        if (typeof email != "string") {
            res.status(400).send('username alfa-numerico')
        }
        if (typeof password != "string") {
            res.status(400).send("outra senha essa é invalida tente alfa-numerico")
        }
        if (typeof role != "string") {
            res.status(400).send('username alfa-numerico')
        }

        const newAuthor: { id: string, name: string, username: string, email: string, password: string, role: string } = {
            id,
            name,
            username,
            email,
            password,
            role
        }
        await db("authors").insert(newAuthor)
        res.status(200).send("cadastro com sucesso")
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
app.delete("/authors/:id", async (req: Request, res: Response) => {

    try {
        const idToDelete = req.params.id

        const [authors] = await db("authors").where({ id: idToDelete })
        if (!authors) {
            throw new Error("usuario  nao encontrado")
        }
        await db("authors").delete().where({ id: idToDelete })
        res.status(200).send({ message: 'authors deletado com sucesso' })
    }
    catch (error) {
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



app.listen(3030, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})



