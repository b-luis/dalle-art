import { surpriseMePrompts } from "../constants";

export const getRandomPrompt = (prompt) => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  // check - to make sure that we dont get the same random prompt
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
};
