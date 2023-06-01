import { db } from './database/knex'
import knex from 'knex'
import express, { Request, Response } from 'express';
import cors from 'cors';
import dataTasks from './data/dataTasks';
import dataProjects from './data/dataProjects';
import { CATEGORY } from './types/types';


const app = express()

const PORT = 3030
const port = process.env.PORT
app.use(cors())
app.use(express.json())



/**
app.get("/authors", async (req: Request, res: Response) => {
    const result = await db.raw(`SELECT * FROM authors`)
    res.send(result)
    try {
        res.status(200).send({ tasks: result })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {s
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

app.get("/authors/search", async (req: Request, res: Response) => {

    try {
        const q = req.query.q
        const [authors] = await db("authors").where({ id: q })
        res.status(200).send({ authors })
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

app.put("/authors/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const newid = req.body.id as string | undefined
        const newName = req.body.name as string | undefined
        const newUsername = req.body.username as string | undefined
        const newemail = req.body.email as string | undefined
        const newpassword = req.body.password as string | undefined
        const newType = req.body.role


        if (newemail !== undefined) {
            if (typeof newemail !== "string") {
                res.status(400)
                throw new Error("email deve ser tipo string")
            }
        }

        if (newpassword !== undefined) {
            if (typeof newpassword !== "string") {
                res.status(400)
                throw new Error("password deve ser tipo string")
            }
        }

        if (newName !== undefined) {
            if (typeof newName !== "string") {
                res.status(400)
                throw new Error("name deve ser tipo string")
            }
        }


        if (newUsername !== undefined) {
            if (typeof newUsername !== "string") {
                res.status(400)
                throw new Error("name deve ser tipo string")
            }
        }


        if (newid !== undefined) {
            if (typeof newid !== "string") {
                res.status(400)
                throw new Error("id deve ser tipo string")
            }
        }

        if (newType) {
            if (
                newType !== CATEGORY.ADM &&
                newType !== CATEGORY.BUYER &&
                newType !== CATEGORY.AUTHOR &&
                newType !== CATEGORY.INSTRUCTOR &&
                newType !== CATEGORY.NORMAL

            ) {
                res.status(400)

                throw new Error("type deve ser um tipo valido")
            }
        }




        const [accountToEdit] = await db.raw(` SELECT * FROM authors where id = "${id}"`)
        if (accountToEdit) {
            accountToEdit.id = newid || accountToEdit.id
            accountToEdit.name = newName || accountToEdit.name
            accountToEdit.username = newUsername || accountToEdit.username
            accountToEdit.email = newemail || accountToEdit.email
            accountToEdit.password = newpassword || accountToEdit.password
            accountToEdit.role = newType || accountToEdit.role
            await db("authors").update(accountToEdit).where({ id })
        }
        res.status(301).send("authors editado")
    } catch (error) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
            res.send("error inesperado!")
        }
        res.send(error.message)
    }
})

app.get("/tasks", async (req: Request, res: Response) => {
    const result3 = await db.select(`*`).from(`tasks`)
    res.send(result3)
    try {
        res.status(200).send({ tasks: result3 })
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


/* SEARCH TASKS*/


app.get("/tasks/search", async (req: Request, res: Response) => {

    try {
        const q = req.query.q
        const [tasks] = await db("tasks").where({ id: q })
        res.status(200).send({ tasks })
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


/******************************************CREATE TASKS***********************************************/
app.post("/tasks/create", async (req: Request, res: Response) => {

    try {
        const id = req.body.id
        const title = req.body.title
        const description = req.body.description
        const status = req.body.status

        if (typeof id !== typeof "string") {
            res.status(400).send({ message: 'id invalido' })
        }

        if (typeof title != "string") {
            res.status(400).send({ message: 'title deve ser ser descricao alfa numerica iniciada com letras' })
        }
        if (typeof description != "string") {
            res.status(400).send('description deve ser ser descricao alfa numerica iniciada com letras')
        }


        const newTask: { id: string, title: string, description: string, status: number } = {
            id,
            title,
            description,
            status
        }
        await db("tasks").insert(newTask)
        res.status(200).send("new task adicionada com sucesso")
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
/*************************TASKS DELETE *************************/

app.delete("/tasks/:id", async (req: Request, res: Response) => {

    try {
        const idTaskDelete = req.params.id

        const [tasks] = await db("tasks").where({ id: idTaskDelete })
        if (!tasks) {
            throw new Error("usuario  nao encontrado")
        }
        await db("tasks").delete().where({ id: idTaskDelete })
        res.status(200).send({ message: 'tasks deletado com sucesso' })
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


/***********************************EDIT TASKS *************************************************/

app.put("/tasks/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const newid = req.body.id as string | undefined
        const newTitle = req.body.title as string | undefined
        const newDescription = req.body.description as string | undefined
        const newStatus = req.body.status as number | undefined


        if (newid !== undefined) {
            if (typeof newid !== "string") {
                res.status(400)
                throw new Error("email deve ser tipo string")
            }
        }


        if (newTitle !== undefined) {
            if (typeof newTitle !== "string") {
                res.status(400)
                throw new Error("email deve ser tipo string")
            }
        }

        if (newDescription !== undefined) {
            if (typeof newDescription !== "string") {
                res.status(400)
                throw new Error("password deve ser tipo string")
            }
        }

        if (!newStatus) {
            {
                res.status(400)
                throw new Error("DESCRIÇÃO deve ser ALFA NUMERICO E COMECAR COM LETRAS")
            }
        }






        const [taskToEdit2] = await db.raw(` SELECT * FROM tasks where id ={id}`)
        if (taskToEdit2) {
            taskToEdit2.id = id || taskToEdit2.id
            taskToEdit2.title = newTitle || taskToEdit2.title
            taskToEdit2.description = newDescription || taskToEdit2.description
            taskToEdit2.status = newStatus || taskToEdit2.status
            await [taskToEdit2]
        }
        res.status(301).send("tasks editado")
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




app.listen(3030, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})



