export type FunnelGoal = "speaking" | "ielts" | "work";

export type FunnelQuestion = {
  id: string;
  prompt: string;
  options: { label: string; score: number }[];
};

export type FunnelRecommendation = {
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  courseId: string;
  courseTitle: string;
  reason: string;
};

export const funnelGoals: { id: FunnelGoal; title: string; description: string }[] = [
  { id: "speaking", title: "Хочу говорить", description: "Убрать языковой барьер и говорить уверенно." },
  { id: "ielts", title: "IELTS", description: "Подготовиться к экзамену и набрать нужный балл." },
  { id: "work", title: "Работа", description: "Свободно общаться в рабочих задачах и переписке." },
];

export const funnelQuestions: FunnelQuestion[] = [
  {
    id: "understand",
    prompt: "Как хорошо вы понимаете английскую речь?",
    options: [
      { label: "Почти не понимаю", score: 0 },
      { label: "Понимаю отдельные фразы", score: 1 },
      { label: "Понимаю общий смысл", score: 2 },
      { label: "Понимаю уверенно", score: 3 },
    ],
  },
  {
    id: "speak",
    prompt: "Насколько свободно вы говорите?",
    options: [
      { label: "Почти не говорю", score: 0 },
      { label: "Короткими фразами", score: 1 },
      { label: "Поддерживаю диалог", score: 2 },
      { label: "Говорю свободно", score: 3 },
    ],
  },
  {
    id: "grammar",
    prompt: "Как вы оцениваете свою грамматику?",
    options: [
      { label: "Базовые ошибки постоянно", score: 0 },
      { label: "Знаю основы, но путаюсь", score: 1 },
      { label: "В целом стабильно", score: 2 },
      { label: "Уверенно и точно", score: 3 },
    ],
  },
  {
    id: "reading",
    prompt: "Можете ли вы читать тексты по вашей теме?",
    options: [
      { label: "Почти не могу", score: 0 },
      { label: "Только простые тексты", score: 1 },
      { label: "Средние тексты понимаю", score: 2 },
      { label: "Читаю свободно", score: 3 },
    ],
  },
];

export function getLevelByScore(score: number): FunnelRecommendation["level"] {
  if (score <= 3) return "A1";
  if (score <= 6) return "A2";
  if (score <= 9) return "B1";
  if (score <= 11) return "B2";
  return "C1";
}

export function getFunnelRecommendation(goal: FunnelGoal, totalScore: number): FunnelRecommendation {
  const level = getLevelByScore(totalScore);

  if (goal === "ielts") {
    return {
      level,
      courseId: "ielts",
      courseTitle: "IELTS Preparation",
      reason: "Фокус на структуре экзамена, writing/speaking и пробных тестах под ваш текущий уровень.",
    };
  }

  if (goal === "work") {
    return {
      level,
      courseId: "business",
      courseTitle: "Business English",
      reason: "Нужен прикладной английский для рабочих встреч, переписки и презентаций.",
    };
  }

  if (level === "A1" || level === "A2") {
    return {
      level,
      courseId: "general",
      courseTitle: "General English",
      reason: "Сначала важно собрать базу и запустить стабильную разговорную практику.",
    };
  }

  return {
    level,
    courseId: "speaking",
    courseTitle: "Speaking Club",
    reason: "Базу уже можно перевести в беглость речи через интенсивную разговорную практику.",
  };
}
