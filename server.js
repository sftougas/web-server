import express from "express"
import pageRouter from './routes/pages.js'
import apiRouter from './routes/api.js'
import { join } from 'path';
import { title } from "process";
const app = express();

const PORT  = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

const entries = [
  {title: 'First note', body: 'Notes from the first ses'},
  {title: 'Sec note', body: 'Notes from the second'},
  {title: 'Third Note', body: ' Notes from third'}
]
app.use('/entries/:id',(req,res)=>{
  if(!entries){

    res.status(404).send('Page not found.');

  }
  res.render('entry',{title: "My notes", entries})
})
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use((req,res)=>{
res.status(404).send('Page not found.');
})
app.listen(PORT, () =>{
	console.log(`Listening on http://localhost:${PORT}`);
});
