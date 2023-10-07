const express = require("express"); // pacotes a serem utilizados
const router = express.Router();
const dbKnex = require("./data/db_config"); // dados de conexão com o banco de dados

// método get é usado para consulta
router.get("/", async (req, res) => {
try {
    // para obter os livros pode-se utilizar .select().orderBy() ou apenas .orderBy()
    const livros = await dbKnex("livros").orderBy("id", "desc");
    res.status(200).json(livros); // retorna statusCode ok e os dados
    } catch (error) {
    res.status(400).json({ msg: error.message }); // retorna status de erro e msg
    }
});
module.exports = router;