import SvgSprite from "../../components/SvgSprite/symbol/svg/sprite.symbol.vue"

export default {
  title: "Icons/SvgIcons",
}

export const _SvgSprite = () => ({
  components: { SvgSprite },
  template: `<div>
        <SvgSprite />
        <svg class="icon">
            <use xlink:href="#cart"></use>
        </svg>
    </div> `,
})

_SvgSprite.story = {
  name: "Svg sprite",
}
