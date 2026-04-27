import { withBasePath } from "@/lib/site";

export type Teacher = {
  name: string;
  role: string;
  segment: "ielts" | "work" | "speaking";
  problem: string;
  outcome: string;
  points: string[];
  avatarSrc: string;
};

export const teachers: Teacher[] = [
  {
    name: "Anastasia Petrova",
    role: "IELTS Strategist",
    segment: "ielts",
    problem: "Слабый Writing и нестабильный speaking на пробниках.",
    outcome: "Поднимает IELTS Writing c 5.5 до 6.5-7.5 по структурному шаблону.",
    points: [
      "Фокус: структура эссе, тайминг, контроль ошибок",
      "Каждую неделю: разбор пробника + персональный фидбек",
      "Цель: предсказуемый рост band и уверенность на экзамене",
    ],
    avatarSrc: withBasePath("/images/teacher-1.jpg"),
  },
  {
    name: "David Mitchell",
    role: "Career English Coach",
    segment: "work",
    problem: "Страх звонков, сложность в рабочих письмах и переговорах.",
    outcome: "Помогает вести рабочие созвоны и интервью без переводчика.",
    points: [
      "Фокус: call scripts, email patterns, meeting facilitation",
      "Тренировка реальных кейсов клиента, а не учебных примеров",
      "Результат: уверенное рабочее общение за 6-10 недель",
    ],
    avatarSrc: withBasePath("/images/teacher-2.jpg"),
  },
  {
    name: "Elena Kim",
    role: "Speaking Barrier Specialist",
    segment: "speaking",
    problem: "Понимаете английский, но не можете быстро отвечать в диалоге.",
    outcome: "Снимает языковой барьер и ускоряет разговорную реакцию.",
    points: [
      "Фокус: разговорные паттерны и активный словарь",
      "Формат: speaking drills, role-plays, scenario practice",
      "Результат: переход от пассивного знания к живой речи",
    ],
    avatarSrc: withBasePath("/images/teacher-3.jpg"),
  },
  {
    name: "Michael Brown",
    role: "Pronunciation & Interview Mentor",
    segment: "work",
    problem: "Сильный акцент и неуверенность на собеседованиях.",
    outcome: "Готовит к интервью и делает речь понятной для международной команды.",
    points: [
      "Фокус: pronunciation, clarity, structured answers",
      "Симуляции интервью с разбором ответов",
      "Результат: выше конверсия интервью в оффер",
    ],
    avatarSrc: withBasePath("/images/teacher-4.jpg"),
  },
];
