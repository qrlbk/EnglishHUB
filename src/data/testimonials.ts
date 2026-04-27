import { withBasePath } from "@/lib/site";

export type Testimonial = {
  name: string;
  age: string;
  course: string;
  text: string;
  rating: 5;
  avatarSrc: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Айнур",
    age: "24 года",
    course: "IELTS",
    text: "Сдала на 7.0, хотя в начале боялась письма. Разбор каждой ошибки и дедлайны сильно помогли.",
    rating: 5,
    avatarSrc: withBasePath("/images/student-1.jpg"),
  },
  {
    name: "Рустем",
    age: "31 год",
    course: "Business English",
    text: "Уверенно веду созвонов на английском. Шаблоны писем и мини-ролевые игры — топ.",
    rating: 5,
    avatarSrc: withBasePath("/images/student-2.jpg"),
  },
  {
    name: "Мадина",
    age: "17 лет",
    course: "General + Speaking",
    text: "Раньше молчала в классе, сейчас свободно говорю. Группа дружелюбная, без давления.",
    rating: 5,
    avatarSrc: withBasePath("/images/student-3.jpg"),
  },
  {
    name: "Ерлан",
    age: "28 лет",
    course: "General English",
    text: "Удобный график, живые материалы, много говорим на уроке — не как в школьном учебнике.",
    rating: 5,
    avatarSrc: withBasePath("/images/student-4.jpg"),
  },
];
