import Link from "next/link";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
const questions: Question[] = [
  {
    _id: "1",
    title: "Next js is awesome",
    tags: [
      { _id: "1", name: "next js" },
      { _id: "2", name: "typescript" },
    ],
    author: {
      _id: "2",
      name: "Money",
      image: "",
    },
    upvotes: 1000000,
    views: 1000,
    answers: 10,
    content: "",
    createdAt: new Date("2021-09-01T00:00:00.000Z"),
  },
  {
    _id: "2",
    title: "React is the best library",
    content: "",
    tags: [
      { _id: "1", name: "next js" },
      { _id: "2", name: "react" },
    ],
    author: {
      _id: "1",
      name: "The King",
      image: "",
    },
    upvotes: 100,
    views: 1000,
    answers: 10,
    createdAt: new Date("2023-10-11T00:00:00.000Z"),
  },
];

const Home = async ({ searchParams }: RouteParams) => {
  const { query = "" } = await searchParams;
  const filteredQuestions = questions.filter((currentQuestion) =>
    currentQuestion.title.toLowerCase().includes(query?.toLowerCase())
  );
  return (
    <>
      {" "}
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};
export default Home;
