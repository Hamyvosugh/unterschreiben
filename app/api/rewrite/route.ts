import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { text, language } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const languageInstructions = {
      en: "English",
      de: "German",
      fa: "Persian/Farsi",
    };

    const prompt = `You are a text rewriter that helps prevent spam detection by making minor variations to email content while preserving the original message.

CRITICAL RULES:
- Keep 95% of the content EXACTLY the same
- the content have to be only in german language 
- Only make MINIMAL changes to sentence structure and phrasing
- DO NOT change the meaning, tone, or key points
- DO NOT add or remove information
- DO NOT make it more formal or informal
- Only rephrase slightly to avoid identical duplicate emails
- Keep the same paragraph structure
- Maintain the same language: ${languageInstructions[language as keyof typeof languageInstructions] || language}

Original text:
${text}

Rewritten text (with minimal variation):`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a subtle text rewriter that makes minimal changes to avoid spam detection while keeping content 95% identical.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.3,
      max_tokens: 1000,
    });

    const rewrittenText = completion.choices[0]?.message?.content?.trim();

    if (!rewrittenText) {
      return NextResponse.json(
        { error: "Failed to rewrite text" },
        { status: 500 },
      );
    }

    return NextResponse.json({ rewrittenText });
  } catch (error) {
    console.error("Error rewriting text:", error);
    return NextResponse.json(
      { error: "Failed to rewrite text" },
      { status: 500 },
    );
  }
}
