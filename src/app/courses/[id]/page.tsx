import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { CourseDetailsPage } from "@/components/course-details-page";

export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

export default async function CoursePage(props: PageProps<"/courses/[id]">) {
  const { id } = await props.params;
  const course = courses.find((item) => item.id === id);
  if (!course) notFound();
  return <CourseDetailsPage course={course} />;
}
