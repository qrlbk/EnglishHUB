export type StudentCase = {
  name: string;
  segment: "ielts" | "work" | "speaking";
  courseId: string;
  courseTitle: string;
  format: string;
  packagePrice: string;
  sessions: string;
  goal: string;
  before: string;
  after: string;
  period: string;
  metric: string;
};

export const studentCases: StudentCase[] = [
  {
    name: "Айнур, 24",
    segment: "ielts",
    courseId: "ielts",
    courseTitle: "IELTS Preparation",
    format: "Индивидуально",
    packagePrice: "от 20 000 ₸ / месяц",
    sessions: "20 занятий",
    goal: "IELTS для магистратуры",
    before: "Боялась Writing, пробники на 5.5",
    after: "Стабильный 7.0, уверенный шаблон эссе",
    period: "за 12 недель",
    metric: "+1.5 band",
  },
  {
    name: "Рустем, 31",
    segment: "work",
    courseId: "business",
    courseTitle: "Business English",
    format: "Мини-группа",
    packagePrice: "от 18 000 ₸ / месяц",
    sessions: "16 занятий",
    goal: "Английский для работы",
    before: "Не проводил встречи без переводчика",
    after: "Ведет weekly calls и пишет письма сам",
    period: "за 10 недель",
    metric: "4/5 встреч ведет сам",
  },
  {
    name: "Мадина, 17",
    segment: "speaking",
    courseId: "speaking",
    courseTitle: "Speaking Club",
    format: "Группа",
    packagePrice: "от 6 000 ₸ / месяц",
    sessions: "12 занятий",
    goal: "Разговорный английский",
    before: "Понимала, но стеснялась говорить",
    after: "Свободно говорит в дискуссиях и проектах",
    period: "за 8 недель",
    metric: "x2 активность в речи",
  },
];
