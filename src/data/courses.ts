export type Course = {
  id: string;
  title: string;
  forWhom: string;
  result: string;
  duration: string;
  estimatedSessions: string;
  expectedOutcome: string;
  bestFor: "speaking" | "ielts" | "work";
  badge: "recommended" | "popular" | "fast" | "career";
  priorityScore: number;
  format: string;
  price: string;
  icon: "book" | "chart" | "briefcase" | "mic" | "pen" | "child";
};

export const courses: Course[] = [
  {
    id: "general",
    title: "General English",
    forWhom: "Новички и продолжающие, кому нужен стабильный фундамент.",
    result: "Уверенная база + рост словаря и понимания речи.",
    duration: "2-6 месяцев",
    estimatedSessions: "24 занятия",
    expectedOutcome: "Сможете вести базовый диалог без страха.",
    bestFor: "speaking",
    badge: "popular",
    priorityScore: 80,
    format: "Группы / Индивидуально",
    price: "от 12 000 ₸ / мес",
    icon: "book",
  },
  {
    id: "ielts",
    title: "IELTS Preparation",
    forWhom: "Тем, кто сдает IELTS для учебы или релокации.",
    result: "Рост band score за счет стратегий и регулярных пробников.",
    duration: "2-4 месяца",
    estimatedSessions: "20 занятий",
    expectedOutcome: "Прогнозируемый рост IELTS на 0.5-1.0 band.",
    bestFor: "ielts",
    badge: "career",
    priorityScore: 95,
    format: "Группы / Индивидуально",
    price: "от 20 000 ₸ / месяц",
    icon: "chart",
  },
  {
    id: "business",
    title: "Business English",
    forWhom: "Специалисты и руководители, работающие с англоязычными задачами.",
    result: "Уверенные звонки, письма, переговоры и презентации.",
    duration: "2-5 месяцев",
    estimatedSessions: "16-24 занятия",
    expectedOutcome: "Уверенные рабочие коммуникации на английском.",
    bestFor: "work",
    badge: "career",
    priorityScore: 92,
    format: "Индивидуально / мини-группы",
    price: "от 18 000 ₸ / месяц",
    icon: "briefcase",
  },
  {
    id: "speaking",
    title: "Speaking Club",
    forWhom: "Тем, кто знает язык, но стесняется говорить.",
    result: "Свободнее речь, лучше произношение и скорость реакции.",
    duration: "1-3 месяца",
    estimatedSessions: "12 занятий",
    expectedOutcome: "Снижение языкового барьера уже в первый месяц.",
    bestFor: "speaking",
    badge: "fast",
    priorityScore: 90,
    format: "Группы / Индивидуально",
    price: "от 6 000 ₸ / месяц",
    icon: "mic",
  },
  {
    id: "corporate",
    title: "Corporate Training",
    forWhom: "Команды и компании с рабочими KPI на английском.",
    result: "Рост уровня коммуникации команды под реальные процессы.",
    duration: "по согласованию",
    estimatedSessions: "по согласованию",
    expectedOutcome: "Улучшение командной коммуникации в рабочих процессах.",
    bestFor: "work",
    badge: "popular",
    priorityScore: 75,
    format: "В компании / онлайн",
    price: "по запросу",
    icon: "pen",
  },
  {
    id: "kids",
    title: "English for Kids",
    forWhom: "Дети и подростки с делением по возрасту и уровню.",
    result: "Интерес к языку, регулярная практика и контроль прогресса.",
    duration: "3-9 месяцев",
    estimatedSessions: "36 занятий",
    expectedOutcome: "Стабильная языковая база и мотивация ребенка.",
    bestFor: "speaking",
    badge: "popular",
    priorityScore: 70,
    format: "Группы (по возрасту)",
    price: "от 10 000 ₸ / месяц",
    icon: "child",
  },
];
