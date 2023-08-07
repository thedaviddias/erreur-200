import { PauseIcon } from '@/components/PauseIcon'
import { PlayIcon } from '@/components/PlayIcon'

export function PlayButton({ player }) {
  let Icon = player.playing ? PauseIcon : PlayIcon

  return (
    <button
      type="button"
      className="group relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-offset-2 md:h-14 md:w-14"
      onClick={player.toggle}
      aria-label={player.playing ? 'Pause' : 'Play'}
    >
      <div className="absolute -inset-3 md:hidden" />
      <Icon className="h-5 w-5 fill-white group-active:fill-white/80 md:h-7 md:w-7" />
    </button>
  )
}
