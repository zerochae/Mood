const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.urlencoded({extended: true})).use(cors()) ;
const db_config = require('./config/database.js');
var mysql = require('mysql');
const conn = mysql.createConnection(db_config);


app.listen(8011,function(){
    console.log('listening on 8011')
});


app.get('/selectone',function(req,res){

    let sql = 'select * from mood';

    conn.query(sql,(err,rows)=>{

        let num = Math.floor(Math.random() * rows.length)

        let result = rows[num];

        console.log("selectone : " + result )

        res.send(result)
        
    });
});

app.get('/composer',function(req,res){
    let sql = 'select distinct composer,img from mood';

    conn.query(sql,(err,result) => {


        console.log("composer : " + result )

        res.send(result)

    });
});

app.get('/works/:id',function(req,res){
    let composer = req.params.id;
    let sql = "select * from mood where composer ='"+composer+"'";

    conn.query(sql, (err,result) => {
      console.log("composer :" + composer);
      console.log("work :" + result);
      res.send(result)
    });


})

app.post('/add',(req,res)=>{

    res.send('submit')

    console.log(req.body.title)

});

