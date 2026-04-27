# EnglishHub

Лендинг школы EnglishHub на **Next.js (App Router)**: курсы, преподаватели, отзывы, цены. Заявки ведут в **WhatsApp** с предзаполненным текстом.

## Команды

- `npm run dev` — разработка
- `npm run build` / `npm run start` — продакшн
- `npm run lint` — линт

## Настройка WhatsApp и контактов

- Номер для `wa.me` и отображаемый телефон: [`src/lib/site.ts`](src/lib/site.ts)
- Тексты сообщений и сборка ссылок: [`src/lib/whatsapp.ts`](src/lib/whatsapp.ts)
- Список курсов: [`src/data/courses.ts`](src/data/courses.ts)

## Структура

- `src/app/page.tsx` — главная страница, сборка секций
- `src/components/*` — секции и шапка/подвал
