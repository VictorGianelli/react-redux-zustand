import ReactPlayer from "react-player";

export function Video() {
  return (
    <div className="w-full dg-zinc-950 aspect-video">
        <ReactPlayer 
            width="100%"
            height="100%"
            controls
            url="https://www.youtube.com/watch?v=jfKfPfyJRdk"
        />
    </div>
  )
}