import { twMerge } from "tailwind-merge";

const rowClassName = "px-4 pt-1 text-left items-center h-[50px]";
const idClassName = twMerge(rowClassName, "w-[30px]");
const miscClassName = twMerge(rowClassName, "w-[70px] text-center");
const ownerClassName = twMerge(rowClassName, "w-[150px] text-center");

interface Project {
  id: number;
  type: "Task" | "Project";
  name: string;
  priority: "Low" | "Medium" | "High";
  deadline: string;
  owner: string;
}

interface Props {
  tasks: Project[];
}

export default function SubProjectList({ tasks }: Props) {
  if (tasks.length == 0) {
    return;
  }

  return (
    <table className="w-full">
      <thead className="bg-gray-100 bg-opacity-65">
        <tr>
          <th className={idClassName}>ID</th>
          <th className={miscClassName}>Type</th>
          <th className={rowClassName}>Name</th>
          <th className={miscClassName}>Priority</th>
          <th className={miscClassName}>Deadline</th>
          <th className={ownerClassName}>Owner</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map(({ id, type, name, priority, deadline, owner }) => (
          <tr key={id} className="border-t hover:bg-white">
            <td className={rowClassName}>{id}</td>
            <td className={rowClassName}>
              <p className="rounded-full text-center border px-3 bg-white">
                {type}
              </p>
            </td>
            <td className={rowClassName}>{name}</td>
            <td className={rowClassName}>
              <p className="border rounded-full text-center bg-white">
                {priority}
              </p>
            </td>
            <td className={rowClassName}>{deadline}</td>
            <td className={ownerClassName}>{owner}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
