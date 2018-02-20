const express=require('express');
const hbs=require('hbs');

var app=express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
});
hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase()
});

app.get('/about',(req,res)=>
        {
  res.render('about.hbs',{
    pageTitle:'About'
  });
  
});
app.get('/',(req,res)=>
        {
  res.render('home.hbs',{
    pageTitle:'Home',
    pageMessage:"Welcome to the website"
  });
  
});

app.listen(3000,()=>{
  console.log("server is upp");
});