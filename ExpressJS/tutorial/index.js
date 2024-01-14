import express from 'express';
const app=express();
const port=3000;

app.use((req,res,next) => {
    console.log("Request method:",req.method);
    next();
});

app.get("/",(req,res)=>{
    res.send("Seriously, this is so cool");
});

app.post("/register",(req,res)=>{
    
    res.sendStatus(201);
    res.send("Call me for a good time;)\n8345545678");
});

app.put("/user/shreya",(req,res)=>{
    res.sendStatus(200);
    res.send("I'm a supersonic coder");
});

app.patch("/user/shreya",(req,res)=>{
    res.sendStatus(200);
    res.send("I'm a supersonic coder");
});

app.delete("/user/shreya",(req,res)=>{
    res.sendStatus(200);
    res.send("I'm a supersonic coder");
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});