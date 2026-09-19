import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";
import { generateText } from "ai";
import { moderateMentorText } from "./ai/moderation.server";
import { buildMentorReplyPrompt } from "./ai/prompt-builder";
import { getChatModel } from "./ai/provider.server";
import { enforceRateLimit } from "./ai/rate-limit.server";
import { MentorReplyInputSchema } from "./ai/validators";

export const replyToMentor = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => MentorReplyInputSchema.parse(input))
  .handler(async ({ data }): Promise<{ reply: string }> => {
    enforceRateLimit(getRequest().headers);

    const { prompt } = buildMentorReplyPrompt(data);

    const { text } = await generateText({
      model: getChatModel(data.selectedModel),
      prompt,
    });

    const reply = text.trim().replace(/^["']|["']$/g, "").trim();
    const safeReply = await moderateMentorText(reply);
    return {
      reply: safeReply || "Sit with that a moment longer — what is it really costing you?",
    };
  });
