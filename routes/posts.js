const express = require('express')
const router = express.Router()
const {body,validationResult} = require('express-validator')

// untuk import database
const koneksi = require('../config/database')

// view
router.get('/',function(req,res){
    // isi data
    koneksi.query('SELECT * FROM viva_fantasy ORDER BY id desc',
    function(err,rows){
        if(err){
            return res.status(500).json({
            status: false,
            message: 'server lagi eror wak SABAR',
            })
        }else{
            return res.status(200).json ({
                status:true,
                message: 'menampilkan data posts',
                data: rows
            })
        }
    })
})

router.post('/store',[
    body('nama').notEmpty(),
    body('jenis_kelamin').notEmpty(),
    body('sifat_karakter').notEmpty(),
    body('sihir').notEmpty(),
    body('tempat').notEmpty(),
    body('senjata').notEmpty(),
    body('persen_kekuatan').notEmpty(),
    body('jabatan').notEmpty(),
    body('energi').notEmpty(),
   
],(req,res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors:errors.array()
        })
    }

    //definisi from data
    let formData ={
        nama: req.body.nama,
    jenis_kelamin: req.body.jenis_kelamin,
    sifat_karakter: req.body.sifat_karakter,
    sihir: req.body.sihir,
    tempat: req.body.tempat,
    senjata: req.body.senjata,
    persen_kekuatan: req.body.persen_kekuatan,
    jabatan: req.body. jabatan,
    energi: req.body. energi

    }

    //memasukan query
    koneksi.query('INSERT INTO viva_fantasy SET ?', formData, function(err,rows){
        //untuk menampilkan error
        if(err){
            return res.status(500).json({
                status:false,
                message:'Error, Try again later'
            })
        }else{
            return res.status(201).json({
                status:true,
                message:'Data input Successfully'
            })
        }
    })

})

//detail data
router.get('/:id', function(req,res){
    let id = req.params.id

    koneksi.query(`SELECT * FROM viva_fantasy WHERE ID=${id}`,
        function(err,rows){
                if(err){
                    return res.status(500).json({
                        status:false,
                        message: 'server mu error coy'
                    })
                }
                
                //kalau post id nya belum ada / tidak ada
                if(rows.length <= 0){
                    return res.status(404).json({
                        status:false,
                        message:'data kuwosong'

                    })
                }else {
                    return res.status(200).json({
                        status:true,
                        message:'menampilkan data post berdasarkan id', 
                        data: rows[0]
                
                    })
                }
        }
    )
})

//update / edit data
 router.patch('/update/:id',[

    body('nama').notEmpty(),
    body('jenis_kelamin').notEmpty(),
    body('sifat_karakter').notEmpty(),
    body('sihir').notEmpty(),
    body('tempat').notEmpty(),
    body('senjata').notEmpty(),
    body('persen_kekuatan').notEmpty(),
    body('jabatan').notEmpty(),
    body('energi').notEmpty(),

 ],(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            errors:errors.array()

        })
    }
    let id = req.params.id //untuk mengambil data id

    let formData ={
        nama: req.body.nama,
    jenis_kelamin: req.body.jenis_kelamin,
    sifat_karakter: req.body.sifat_karakter,
    sihir: req.body.sihir,
    tempat: req.body.tempat,
    senjata: req.body.senjata,
    persen_kekuatan: req.body.persen_kekuatan,
    jabatan: req.body. jabatan,
    energi: req.body. energi

    }``
 
    //update query
    koneksi.query(`UPDATE viva_fantasy set ? WHERE id=${id}`, formData,
        function(err,rows){
            if(err){
                return res.status(500).json({
                    status: false,
                    message: `interval server eror`
                })
            }else{
                return res.status(200).json({
                    status: true,
                    message: `update data sukses`
                })
            }
        }
    )
 })
//delete 
router.delete('/delete/(:id)',
    function(req,res){
        let id = req.params.id
        koneksi.query(`DELETE FROM viva_fantasy WHERE id = ${id}`,
            function(err,rows){
                if(err){
                    return res.status(500).json({
                        status: false,
                        message: 'Server Error!!'
                    })
                }else{
                    return res.status(200).json({
                        status: true,
                        message: 'Data has been deleted',
                    })
                }
            }
        )
    }
)

module.exports = router