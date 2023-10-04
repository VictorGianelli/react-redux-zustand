import { useCurrentLesson } from "../store/slices/player";

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson()

  if (!currentModule || !currentLesson) return false

  return (
    <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
        <span className="texu-sm text-zinc-400">Módulo "{currentModule.title}"</span>
    </div>
  )
}