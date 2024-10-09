interface Props {
  name: string;
  description: string;
  progress: number;
  owner: string;
}

export default function ProjectHeader(props: Props) {
  const { name, description, progress, owner } = props;

  return (
    <header className="flex bg-white border rounded-xl p-6 justify-between space-x-5 bg-opacity-65">
      <div className="flex flex-col space-y-3 mt-2 text-slate-900">
        <h1 className="text-5xl font-bold">{name}</h1>
        <p className="text-justify">{description}</p>
      </div>
      <div className="space-y-2">
        <div>
          <label className="mr-2" htmlFor="progress">
            Progress:
          </label>
          <progress
            value={progress}
            max={100}
            className="h-3 w-[200px] rounded-full"
          >
            32%
          </progress>
        </div>

        <div>
          Owner: <span className="font-bold">{owner}</span>
        </div>
      </div>
    </header>
  );
}
