import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_VISION_AI_API_KEY });

export async function POST(req) {
  try {
    const { text } = await req.json(); // Parse JSON from the request body

    if (!text) {
      return new Response(
        JSON.stringify({ message: "Extracted text is missing" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Send the extracted text to GPT-4 and ask it to structure it in JSON format
    const gptResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You are an assistant that processes text to extract menu items and their prices, responding in JSON format.",
        },
        {
          role: "user",
            content: `Here is a menu in plain text: ${text}. Please extract the items and their prices and respond in this JSON format: [{"item": "item name", "price": "item price"}]. If the price, is missing, let it be null or an empty string. If there are no food/edible items in the list provided to you, let the whole JSON output be null.`,
        },
      ],
    });

    console.log(gptResponse.choices[0].message.content);

    // Check if the response from GPT-4 contains valid choices
    if (!gptResponse.choices || !gptResponse.choices.length) {
      throw new Error("No choices found in GPT-4 response");
    }

    const responseContent = gptResponse.choices[0].message.content;

    // Attempt to extract valid JSON from GPT-4's response
    let cleanedData;
    try {
      // This will try to find and parse the JSON portion of the response
      cleanedData = JSON.parse(responseContent);
    } catch (parseError) {
      console.error("GPT-4 response is not valid JSON:", responseContent);
      return new Response(
        JSON.stringify({
          message: "GPT-4 response is not in valid JSON format",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Return the structured JSON response from GPT-4
    return new Response(JSON.stringify(cleanedData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error communicating with GPT-4:", error);
    return new Response(
      JSON.stringify({ message: "Error processing the text" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
