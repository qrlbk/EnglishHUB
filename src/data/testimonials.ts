import { withBasePath } from "@/lib/site";

export type Testimonial = {
  name: string;
  age: string;
  track: string;
  before: string;
  after: string;
  period: string;
  format: string;
  text: string;
  rating: 5;
  avatarSrc: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Айнур",
    age: "24 года",
    track: "IELTS",
    before: "Пробный тест 5.5, слабый Writing",
    after: "Официальный результат 7.0",
    period: "12 недель",
    format: "Индивидуально",
    text: "Структурный план и еженедельные пробники убрали хаос в подготовке.",
    rating: 5,
    avatarSrc: withBasePath("/images/student-1.jpg"),
  },
  {
    name: "Рустем",
    age: "31 год",
    track: "Business English",
    before: "Избегал англоязычных созвонов",
    after: "Проводит weekly sync на английском",
    period: "10 недель",
    format: "Мини-группа",
    text: "Рабочие сценарии и шаблоны писем сразу переносились в реальные задачи.",
    rating: 5,
    avatarSrc: withBasePath("/images/student-2.jpg"),
  },
  {
    name: "Мадина",
    age: "17 лет",
    track: "General + Speaking",
    before: "Стеснялась отвечать устно",
    after: "Уверенно выступает на занятиях",
    period: "8 недель",
    format: "Группа",
    text: "Регулярная разговорная практика помогла быстро снять языковой барьер.",
    rating: 5,
    avatarSrc: withBasePath("/images/student-3.jpg"),
  },
  {
    name: "Ерлан",
    age: "28 лет",
    track: "General English",
    before: "Читал только простые тексты",
    after: "Свободно ведет диалоги в поездках",
    period: "14 недель",
    format: "Индивидуально",
    text: "Пошаговый трек и живая практика дали заметный прогресс без перегруза.",
    rating: 5,
    avatarSrc: withBasePath("/images/student-4.jpg"),
  },
];
