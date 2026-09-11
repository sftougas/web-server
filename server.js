import express from "express"
import pageRouter from './routes/pages.js'
import apiRouter from './routes/api.js'
const app = express();
const PORT  = process.env.PORT || 3000;

app.use('/', pageRouter)
app.use('/api', apiRouter)


const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];

app.get('/',(req,res)=>{
	res.send("Hello")
})
app.get('/projects', (req, res) => {
  const tag = req.query.tag;
  // filter `projects` here, based on your decision above
	return res.json(projects.filter(x=> x.tag === tag))


});

app.use((req,res)=>{
res.status(404).send('Page not found.');
})
app.listen(PORT, () =>{
	console.log(`Listening on http://localhost:${PORT}`);
});
