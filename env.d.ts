/// <reference types="vite/client" />
/// <reference types="tailwindcss" />

// .vue
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// .json
declare module '*.json' {
  const value: any
  export default value
}

// images
declare module '*.png' {
  const src: string
  export default src
}
declare module '*.jpg' {
  const src: string
  export default src
}
declare module '*.jpeg' {
  const src: string
  export default src
}
declare module '*.gif' {
  const src: string
  export default src
}
declare module '*.svg' {
  const src: string
  export default src
}
declare module '*.webp' {
  const src: string
  export default src
}

// audio
declare module '*.mp3' {
  const src: string
  export default src
}
declare module '*.ogg' {
  const src: string
  export default src
}
declare module '*.wav' {
  const src: string
  export default src
}

// video (cutscene animation?)
declare module '*.mp4' {
  const src: string
  export default src
}
declare module '*.webm' {
  const src: string
  export default src
}
