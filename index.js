const express = require("express");
const app = express();
app.use(express.json());

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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"
    
});
  
const openai = new OpenAIApi(configuration);


app.post("/generateimage",(req,res)=>{
    const generateImage = async () => {
        const imageParameters = {
          prompt: req.body.prompt,
          n: req.body.n,
          size: req.body.size
        };
    
        const response = await openai.createImage(imageParameters);
        const urlData = response.data.data;
        console.log(urlData);
        res.json(urlData);
    };
    
    generateImage();
})

app.listen(3000,()=>{
    console.log("Server running");
})
