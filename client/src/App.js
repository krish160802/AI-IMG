import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { InputBox } from "./InputBox";
import { InputBoxA } from "./InputBox";
import { OutputBox } from "./OutputBox";

const configuration = new Configuration({
  apiKey: `${process.env.REACT_APP_SECRET_KEY}`
  
});

const openai = new OpenAIApi(configuration);

function App() {

  const [userPrompt, setUserPrompt] = useState("");
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = async () => {
    const imageParameters = {
      prompt: userPrompt,
      n: parseInt(number),
      size: size
    };

    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data;
    console.log(urlData);
    setImageUrl(urlData);

  };

  return (
    <div className="App">

      <div class="container">
        <div class="row">
          <div class="neons col-12">
            <h1><em>AI-IMG-GEN</em></h1>
          </div>
        </div>
      </div>
      
      <div className="container_a">
        <OutputBox images={imageUrl} />
      </div>

      <div className="conntainer_b">

        <InputBox label={"Description"} setAttribute={setUserPrompt} />
        <InputBox
          label={"Amount"}
          setAttribute={setNumber}
          stateAttribute={number}
        />

        <InputBoxA label={"Size"} setSize={setSize} size={size} />

        <div className="btnContainer">
          <button className="main-button" onClick={() => generateImage()}>
            Generate
          </button>
        </div>

      </div>
    </div>
  );
}

export default App;
