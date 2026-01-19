import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    // Check API key availability
    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY is not configured");
      return NextResponse.json(
        { error: "Service configuration error" },
        { status: 500 },
      );
    }

    // Parse JSON
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const { text, language } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    // Basic length check
    if (text.length > 10000) {
      return NextResponse.json(
        { error: "Text too long (max 10000 characters)" },
        { status: 400 },
      );
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

    try {
      const completion = await openai.chat.completions.create(
        {
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
        },
        {
          timeout: 25000, // 25 seconds timeout
        },
      );

      const rewrittenText = completion.choices[0]?.message?.content?.trim();

      if (!rewrittenText) {
        console.error("OpenAI returned empty response");
        return NextResponse.json(
          { error: "Failed to rewrite text" },
          { status: 500 },
        );
      }

      // OpenAI output is safe, no need to sanitize
      // We trust OpenAI's content filtering
      return NextResponse.json(
        { rewrittenText: rewrittenText },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Content-Type-Options": "nosniff",
          },
        },
      );
    } catch (openaiError) {
      console.error("OpenAI API error:", openaiError);
      return NextResponse.json(
        { error: "Failed to rewrite text - AI service error" },
        { status: 500 },
      );
    }
  } catch (error) {
    // Don't expose internal error details
    console.error("Error rewriting text:", error);
    return NextResponse.json(
      { error: "An error occurred processing your request" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "X-Content-Type-Options": "nosniff",
        },
      },
    );
  }
}
