export type StudentCase = {
  name: string;
  goal: string;
  before: string;
  after: string;
  period: string;
};

export const studentCases: StudentCase[] = [
  {
    name: "Айнур, 24",
    goal: "IELTS для магистратуры",
    before: "Боялась Writing, пробники на 5.5",
    after: "Стабильный 7.0, уверенный шаблон эссе",
    period: "за 12 недель",
  },
  {
    name: "Рустем, 31",
    goal: "Английский для работы",
    before: "Не проводил встречи без переводчика",
    after: "Ведет weekly calls и пишет письма сам",
    period: "за 10 недель",
  },
  {
    name: "Мадина, 17",
    goal: "Разговорный английский",
    before: "Понимала, но стеснялась говорить",
    after: "Свободно говорит в дискуссиях и проектах",
    period: "за 8 недель",
  },
];
