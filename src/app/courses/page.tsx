import CourseListLoading from "@/components/learning/course/CourseListLoading";
import dynamic from "next/dynamic";

const CourseList = dynamic(
  () => import("@/components/learning/course/CourseList"),
  {
    loading: () => <CourseListLoading />,
    ssr: false,
  }
);

export default function CoursePage() {
  return <CourseList />;
}
