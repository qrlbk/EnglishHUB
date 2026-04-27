import { withBasePath } from "@/lib/site";

export type Teacher = {
  name: string;
  role: string;
  points: string[];
  avatarSrc: string;
};

export const teachers: Teacher[] = [
  {
    name: "Anastasia Petrova",
    role: "Преподаватель IELTS & Academic",
    points: [
      "10+ лет опыта, сертификат CELTA",
      "Средний band учеников: 6.5–7.5",
      "Сильная зона: Writing & Reading",
    ],
    avatarSrc: withBasePath("/images/teacher-1.jpg"),
  },
  {
    name: "David Mitchell",
    role: "Business English Coach",
    points: [
      "Корпоративные программы, презентации",
      "Опыт в международных IT-компаниях",
      "Формат: интенсив / индивидуально",
    ],
    avatarSrc: withBasePath("/images/teacher-2.jpg"),
  },
  {
    name: "Elena Kim",
    role: "General English Teacher",
    points: [
      "Игровые методики для детей и подростков",
      "Фокус на мотивации и речи",
      "Создаёт дружелюбную атмосферу",
    ],
    avatarSrc: withBasePath("/images/teacher-3.jpg"),
  },
  {
    name: "Michael Brown",
    role: "Kids English Teacher",
    points: [
      "Постановка произношения, connected speech",
      "Материалы: подкасты, дебаты, ролевые игры",
      "Сильный акцент на уверенность",
    ],
    avatarSrc: withBasePath("/images/teacher-4.jpg"),
  },
];
