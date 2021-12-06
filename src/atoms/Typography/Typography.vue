<template>
  <div>
    <div class="everli-typography">
      <p class="t-title-1-bold c-everli-green">Title 1 Bold Brand</p>
      <hr />
      <p class="t-title-2-bold">Title 2 Bold Brand</p>
      <p class="t-title-2-semibold">Title 2 Semibold</p>
      <hr />
      <p class="t-title-3-bold">Title 3 Bold Brand</p>
      <p class="t-title-3-semibold">Title 3 Semibold</p>
      <hr />
      <p class="t-title-4-bold">Title 4 Bold Brand</p>
      <p class="t-title-4-semibold">Title 4 Semibold</p>
      <p class="t-title-4-regular">Title 4 Regular</p>
      <hr />
      <p class="t-subtitle-semibold">Subtitle Semibold</p>
      <p class="t-subtitle-regular">Subtitle Regular</p>
      <hr />
      <p class="t-body-semibold">Body semibold</p>
      <p class="t-body-regular">Body Regular</p>
      <hr />
      <p class="t-body-small-semibold">Body small semibold</p>
      <p class="t-body-small-regular">Body small regular</p>
      <hr />
      <p class="t-caption-semibold">Caption semibold</p>
      <p class="t-caption-regular">Caption regular</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EverliTypography",
}
</script>

<style scoped lang="scss">
.everli-typography {
  background: #fff;

  hr {
    margin: 10px 0;
    border: none;
    border-top: 1px solid #eee;
  }

  p {
    margin: 5px 0;
  }
}
</style>
