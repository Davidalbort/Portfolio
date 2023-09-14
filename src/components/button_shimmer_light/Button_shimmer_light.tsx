import '@/styles/components/button_shimmer_light.scss'
export function ButtonShimmerLight() {
  return (
    <button className="button">
      <div className="button__slider-container">
        <div className="button__slider">
          <div className="button__light"></div>
        </div>
      </div>
      <div className="button__hidden"></div>
      <div className="button__name">button</div>
    </button>
  )
}
