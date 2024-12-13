import Link from "next/link";

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
const questions = [
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
      picture: "",
    },
    upvotes: 1000000,
    views: 1000,
    answers: [],
    createdAt: new Date("2021-09-01T00:00:00.000Z"),
  },
  {
    _id: "2",
    title: "React is the best library",
    tags: [
      { _id: "1", name: "next js" },
      { _id: "2", name: "react" },
    ],
    author: {
      _id: "1",
      name: "The King",
      picture: "",
    },
    upvotes: 100,
    views: 1000,
    answers: [],
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
      Home
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};
export default Home;
