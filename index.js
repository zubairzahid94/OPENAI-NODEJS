import "dotenv/config";

import OpenAI from "openai";
const openai = new OpenAI();

const result = await openai.chat.completions.create({
	model: "gpt-3.5-turbo",
	messages: [
		{
			role: "system",
			content:
				"You are an AI assistant , Answer all my question to the best of your ability",
		},
		{
			role: "user",
			content: "Hello, whats the average temperature of Islamabad",
		},
	],
});

console.log(result.choices[0].message.content);
