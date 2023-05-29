findUserByName = () => {
  import { db } from './../database/knex'
  const queryName = req.params.queryName;
  const result = await db.raw(`SELECT *FROM tasks`)
}
if (!queryTask) {
  console.log('parametro não registrado')
} else {
  const result = Ta
  sks.find(dataTasks.Title => tarefa.title.toUpperCase().includes(queryTask.toUpperCase()))
  if (result === undefined) {
    console.log('premio não cadastrado')
  } else {
    console.log(queryTask)
  }

