const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usuarioModel = require('./src/module/usuario/usuario.model.js');

const app = express();
app.use(express.json());

app.post('/login', async (req, res) => {
    if (!req.body.email) {
        return res.status(400).json({ message: 'O campo de email é obrigatório' })
    }

    if (!req.body.senha) {
        return res.status(400).json({ message: 'O campo de senha é obrigatório' })
    }

    const usuarioExistente = await usuarioModel.findOne({
        email: req.body.email,
    });

    if (!usuarioExistente) {
        return res.status(400).json({ message: 'Usuário não está cadastrado ' });
    }

    const senhaVerificada = bcrypt.compareSync(
        req.body.senha,
        usuarioExistente.senha
    );

    if (!senhaVerificada) {
        return res.status(400).json({ message: 'E-mail ou senha incorretos' });
    };

    const token = jwt.sign({ _id: usuarioExistente._id }, 'dnc');
    console.log(token);

    return res.status(200).json({
        message: 'Login realizado com sucesso',
        token,
    });
});

app.get('/usuarios', async (req, res) => {
    const usuarios = await usuarioModel.find({});
    return res.status(200).json(usuarios);
});

app.post('/usuarios', async (req, res) => {
    if (!req.body.email) {
        return res.status(400).json({ message: 'O campo de email é obrigatório' });
    }

    if (!req.body.senha) {
        return res.status(400).json({ message: 'O campo de senha é obrigatório' });
    }

    const usuarioExistente = await usuarioModel.find({ email: req.body.email });

    if (usuarioExistente.length) {
        return res.status(400).json({ message: 'Usuário já existe' });
    }

    const senhaCriptografada = bcrypt.hashSync(req.body.senha, 10);

    const usuario = await usuarioModel.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: senhaCriptografada
    });

    return res.status(201).json(usuario);

});

app.get('/noticias', (req, res) => {
    return res.status(200).json([]);
});

app.post('/noticias', (req, res) => {
    return res.status(201).json([]);
});

app.listen(8080, () => {
    console.log('Servidor funcionando na porta 8080');
});