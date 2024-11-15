// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// const PORT = process.env.PORT;

// (async () => {
//   const { Configuration, OpenAIApi } = await import("openai");

//   const app = express();
//   app.use(cors());
//   app.use(express.json());

//   const configuration = new Configuration({
//     apiKey: process.env.GPT4_API_KEY,
//   });
//   const openai = new OpenAIApi(configuration);

//   app.post("/api/chat", async (req, res) => {
//     const { inputChat } = req.body;
//     console.log(inputChat)
//     try {
//       const response = await openai.createChatCompletion({
//         model: "gpt-4",
//         messages: [
//           { role: "system", content: "You are a helpful assistant. You explain software concepts simply to intermediate programmers." },
//           { role: "user", content: inputChat },
//         ],
//       });

//       const assistantMessage = response.data.choices[0].message.content;
//       console.log(assistantMessage)
//       res.json({ message: assistantMessage });
//     } catch (error) {
//       console.error("Error with OpenAI API:", error);
//       res.status(500).json({ error: "An error occurred" });
//     }
//   });

//   app.listen(PORT, (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("Connected to port", PORT);
//   });
// })();
