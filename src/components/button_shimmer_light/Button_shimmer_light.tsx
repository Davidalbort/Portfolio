import '@/styles/components/button_shimmer_light.scss'
export function ButtonShimmerLight({ name, url }: ButtonShimmerLightParams) {
  return (
    <a href={url} target="__blank" className="button">
      <div className="button__slider-container">
        <div className="button__slider">
          <div className="button__light"></div>
        </div>
      </div>
      <div className="button__hidden"></div>
      <div className="button__name">{name}</div>
    </a>
  )
}

export interface ButtonShimmerLightParams {
  name: string
  url: string
}
