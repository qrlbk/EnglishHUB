export type Course = {
  id: string;
  title: string;
  description: string;
  level: string;
  format: string;
  price: string;
  /** Short label for an icon/emoji in the card (optional visual aid) */
  icon: "book" | "chart" | "briefcase" | "mic" | "pen" | "child";
};

export const courses: Course[] = [
  {
    id: "general",
    title: "General English",
    description: "Практика говорения, грамматика и лексика на каждом уровне в комфортном темпе.",
    level: "A1–C1",
    format: "Группы / Индивидуально",
    price: "от 12 000 ₸ / мес",
    icon: "book",
  },
  {
    id: "ielts",
    title: "IELTS Preparation",
    description: "Системная подготовка к формату экзамена: все секции, пробные тесты, разбор ошибок.",
    level: "B1+",
    format: "Группы / Индивидуально",
    price: "от 15 000 ₸ / мес",
    icon: "chart",
  },
  {
    id: "business",
    title: "Business English",
    description: "Переговоры, презентации, письма и деловая лексика для работы в международной среде.",
    level: "B1–C1",
    format: "Индивидуально / мини-группы",
    price: "от 18 000 ₸ / мес",
    icon: "briefcase",
  },
  {
    id: "speaking",
    title: "Speaking & Pronunciation",
    description: "Акцент на разговорную речь, уверенность и чистое произношение.",
    level: "A2–B2",
    format: "Группы / Индивидуально",
    price: "от 10 000 ₸ / мес",
    icon: "mic",
  },
  {
    id: "writing",
    title: "Academic & Writing",
    description: "Эссе, письма и академическое письмо: структура, логика, стилистика.",
    level: "B1+",
    format: "Индивидуально",
    price: "от 14 000 ₸ / мес",
    icon: "pen",
  },
  {
    id: "kids",
    title: "English for Teens & Kids",
    description: "Интерактивные занятия, игры и проекты, чтобы дети говорили без стеснения.",
    level: "A1–A2",
    format: "Группы (по возрасту)",
    price: "от 9 000 ₸ / мес",
    icon: "child",
  },
];
