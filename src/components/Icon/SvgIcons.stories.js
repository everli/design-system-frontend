import IconsDemo from "./IconsDemo.vue"

export default {
  title: "Atoms/Icons",
}

export const Icons = () => ({
  components: { IconsDemo },
  template: "<IconsDemo />",
})

Icons.story = {
  name: "Sprite",
}
