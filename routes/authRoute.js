const { getTodos, addTodos, deleteTodos, updateTodos } = require("../controller/todoController")

const router = require("express").Router()


router
    .get("/todo", getTodos)
    .post("/todo-add", addTodos)
    .delete("/todo-delete/:id", deleteTodos)
    .put("/todo-update/:id", updateTodos)



module.exports = router