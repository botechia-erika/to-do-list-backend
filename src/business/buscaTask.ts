


const queryTask = req.body.cpf

if (!queryTask) {
  console.log('parametro não registrado')
} else {
  const result = Tasks.find(dataTasks.Title => tarefa.title.toUpperCase().includes(queryTask.toUpperCase()))
  if (result === undefined) {
    console.log('premio não cadastrado')
  } else {
    console.log(queryTask)
  }
}