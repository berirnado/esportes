const Usuario = require('../model/Usuario');
const bcrypt = require('bcrypt')

const { Op } = require('sequelize')

module.exports = {
    async list(req,res) {
        const usuarios = await Usuario.findAll()
        return res.render('admin/usuario/list.ejs', {'Usuarios': usuarios, 'msg': req.flash('msg')})
    },
    async filtro(req,res) {
        let query = '%'+req.body.filtro+'%'
        const usuarios = await Usuario.findAll({
            where:{
                nome: {
                    [Op.like]: query
                }
            }
        })
        return res.render('admin/produto/list.ejs', {'Usuarios': usuarios, 'msg': req.flash('msg')})
    },
    async abreadd(req,res) {
        res.render('admin/usuario/add.ejs', { msg : req.flash('msg') });
    },
    async add(req,res) {
        const nome = req.body.nome
        const email = req.body.email
        var senha = req.body.senha
        const foto = req.file.foto

        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(senha,salt,(hash) => {
                senha = hash;
            })
        })

        await Usuario.create({nome, email, senha, foto}).then(
            (usuario) => {
            req.flash('msg','O usuario foi adicionado com sucesso!')
            res.redirect('/admin/usuario/add');
        }, (err) => {
            req.flash('msg', "Problemas ao adicionar o usuario: ")
            res.redirect('/admin/usuario/add');
        })
    },
    async abreedit(req,res) {
        const id = req.params.id;
        const usuario = await Usuario.findByPk(id);
        return res.render('admin/produto/edit.ejs', {'Usuario': usuario, 'msg': req.flash('msg')})
    },
    async edit(req,res) {
        const id = req.params.id;
        const usuario = await Usuario.findByPk(id)
        var senha = req.body.senha
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(senha,salt,(hash) => {
                senha = hash;
            })
        })
        usuario.nome = req.body.nome
        usuario.email = req.body.email
        usuario.foto = req.file.foto
        usuario.senha = senha
        await usuario.save();
        return res.render('admin/usuario/list.ejs', {'Usuarios': usuarios, 'msg': req.flash('msg')})
    },
    async del(req,res) {
        const id = req.params.id;
        await Usuario.destroy({where: {id:id}}).then(
            (usuario) => {
                req.flash('msg', 'Usuario deletado com sucesso');
                res.redirect('/admin/usuario/');
            },
            (err) => {
                req.flash('msg', 'Problema ao alterar o produto');
                res.redirect('/admin/usuario/');
            }
        )
    },
}