export type FunnelGoal = "speaking" | "ielts" | "work";

export type FunnelQuestion = {
  id: string;
  prompt: string;
  options: { label: string; score: number }[];
};

export type FunnelRoute = {
  id: string;
  title: string;
  badge: "recommended" | "popular" | "fast" | "career";
  durationHint: string;
};

export type FunnelRecommendation = {
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  primaryRoute: FunnelRoute;
  backupRoute: FunnelRoute;
  reason: string;
  whyNotOther: string;
  risk: string;
  riskIfDelayed: string;
  diagnosticSignals: string[];
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
  const diagnosticSignals =
    level === "A1" || level === "A2"
      ? ["Низкий активный словарь", "Нестабильная грамматика", "Медленная речевая реакция"]
      : level === "B1"
        ? ["База есть, но нестабильная беглость", "Пробелы в аргументации", "Нужна регулярная разговорная нагрузка"]
        : ["Хорошее понимание речи", "Нужна специализация под цель", "Критична точность и скорость ответов"];

  if (goal === "ielts" && (level === "A1" || level === "A2")) {
    return {
      level,
      primaryRoute: {
        id: "general",
        title: "General English",
        badge: "recommended",
        durationHint: "8-12 недель базы",
      },
      backupRoute: {
        id: "ielts",
        title: "IELTS Preparation",
        badge: "career",
        durationHint: "после выхода на B1",
      },
      reason: "Сначала нужно поднять базу до B1, затем переходить в экзаменационный трек.",
      whyNotOther: "Прямой вход в IELTS сейчас даст стресс и низкую конверсию усилий в балл.",
      risk: "Вы теряете баллы в IELTS из-за слабой базы по грамматике и listening.",
      riskIfDelayed: "Если отложить старт, подготовка к целевому band сдвинется минимум на 2-3 месяца.",
      diagnosticSignals,
    };
  }

  if (goal === "ielts") {
    return {
      level,
      primaryRoute: {
        id: "ielts",
        title: "IELTS Preparation",
        badge: "recommended",
        durationHint: "6-10 недель",
      },
      backupRoute: {
        id: "speaking",
        title: "Speaking Club",
        badge: "fast",
        durationHint: "2-4 недели параллельно",
      },
      reason: "Фокус на структуре экзамена, writing/speaking и пробных тестах под ваш текущий уровень.",
      whyNotOther: "General сейчас даст прогресс, но не закроет экзаменационный формат и тайминг.",
      risk: "Вы теряете до 0.5-1.0 band из-за неструктурных ответов и тайминга.",
      riskIfDelayed: "Без системной подготовки растет риск пересдачи и дополнительных затрат.",
      diagnosticSignals,
    };
  }

  if (goal === "work") {
    return {
      level,
      primaryRoute: {
        id: "business",
        title: "Business English",
        badge: "career",
        durationHint: "6-10 недель",
      },
      backupRoute: {
        id: "speaking",
        title: "Speaking Club",
        badge: "fast",
        durationHint: "3-6 недель",
      },
      reason: "Нужен прикладной английский для рабочих встреч, переписки и презентаций.",
      whyNotOther: "Speaking без рабочего контекста не решает email/meeting задачи.",
      risk: "Вы теряете карьерные возможности из-за неуверенных звонков и переписки.",
      riskIfDelayed: "Каждый месяц без прокачки рабочей коммуникации снижает скорость карьерного роста.",
      diagnosticSignals,
    };
  }

  if (level === "A1" || level === "A2") {
    return {
      level,
      primaryRoute: {
        id: "general",
        title: "General English",
        badge: "recommended",
        durationHint: "8-12 недель",
      },
      backupRoute: {
        id: "kids",
        title: "English for Kids",
        badge: "popular",
        durationHint: "12+ недель",
      },
      reason: "Сначала важно собрать базу и запустить стабильную разговорную практику.",
      whyNotOther: "Интенсивный speaking на слабой базе дает краткий эффект без закрепления.",
      risk: "Вы теряете уверенность в разговоре из-за пробелов в базовой грамматике.",
      riskIfDelayed: "Без фундаментального трека прогресс остается нестабильным и быстро откатывается.",
      diagnosticSignals,
    };
  }

  return {
    level,
    primaryRoute: {
      id: "speaking",
      title: "Speaking Club",
      badge: "fast",
      durationHint: "4-8 недель",
    },
    backupRoute: {
      id: "business",
      title: "Business English",
      badge: "career",
      durationHint: "6-10 недель",
    },
    reason: "Базу уже можно перевести в беглость речи через интенсивную разговорную практику.",
    whyNotOther: "General на этом этапе медленнее и не дает нужной разговорной интенсивности.",
    risk: "Вы теряете скорость речи и уверенность из-за недостатка регулярной практики.",
    riskIfDelayed: "Без разговорного трека язык остается пассивным и редко используется в жизни.",
    diagnosticSignals,
  };
}

export function routeBadgeLabel(badge: FunnelRoute["badge"]): string {
  if (badge === "recommended") return "Рекомендуем для вас";
  if (badge === "popular") return "Самый популярный";
  if (badge === "fast") return "Быстрый результат";
  return "Для карьеры";
}
