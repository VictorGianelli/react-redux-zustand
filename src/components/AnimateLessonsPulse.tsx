export function AnimateLessonsPulse() {
  return (
    <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-zinc-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          {/* <div className="grid grid-cols-3 gap-4">  */}
            <div className="h-2 w-32 bg-zinc-700 rounded col-span-2"></div>
            <div className="h-2 w-10 bg-zinc-700 rounded col-span-1"></div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}