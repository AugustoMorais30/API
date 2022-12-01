const productsservices = require('../services/productsservices');
const productsservices = require('../services/productsservices');

module.exports = {
    
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let products = await productsservices.buscarTodos();

        for(let i in products){
            json.result.push({
                id: products[i].id,
                descricao: products[i].price
            });
        }

        res.json(json);
    },

    buscarUm: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id; 
        let products = await productsservices.buscarUm(id);

        if(products){
            json.result = products; 
        }

        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let price = req.body.price;

        if (nome && price){
            let Productid = await productsservices.inserir(nome, price);
            json.result = {
                id: Productid,
                nome,
                price
            };
        }else{
            json.error = 'erro';
        }
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let nome = req.body.nome;
        let price = req.body.price;

        if (id && nome && price){
            await productsservices.alterar(nome, price);
            json.result = {
                nome,
                price
            };
        }else{
            json.error = 'erro';
        }
        res.json(json);
    },
    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await productsservices.excluir(req.params.id);
        
        res.json(json);
    },
}