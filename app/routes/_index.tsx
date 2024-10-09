import type { MetaFunction } from "@remix-run/node";
import SideBar from "~/components/sideBar";
import ProjectHeader from "~/components/projectheader";
import SubProjectList from "~/components/subprojectList";

const lorem = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit,",
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi",
  "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  "in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui",
  "officia deserunt mollit anim id est laborum.",
].join(" ");

const tasks = [
  {
    id: 1,
    type: "Task" as const,
    name: "Hello, world!",
    priority: "High" as const,
    deadline: "Sep 23",
    owner: "minhnbnt",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex w-full h-full">
      <SideBar />

      <main className="m-6 flex grow flex-col space-y-4">
        <ProjectHeader
          owner="Minhnbnt"
          name="Golang is the bezt!"
          description={lorem}
          progress={60}
        />
        <div className="grow overflow-hidden rounded-xl border bg-white bg-opacity-75">
          <SubProjectList tasks={tasks} />
        </div>
      </main>
    </div>
  );
}
