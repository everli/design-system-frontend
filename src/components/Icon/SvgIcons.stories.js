import IconsDemo from "./IconsDemo.vue"

export default {
  title: "Icons/Icons",
}

export const Icons = () => ({
  components: { IconsDemo },
  template: "<IconsDemo />",
})

Icons.story = {
  name: "Sprite",
}
