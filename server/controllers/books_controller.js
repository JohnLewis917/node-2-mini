// import { builtinModules } from "module"

const books = []
const id = 0
module.exports = {
    read: (req, res, next) => {
        res.status(200).send(books)
    },
    create: (req, res, next) => {
        const {title, author} = req.body
        let book = {
            id: id,
            title: title,
            author: author 
        }
        books.push(book)
        id++
        res.status(200).send(books)
    },
    update: (req, res, next) => {
        let index = null
        
    }
    

}
