<template>
  <div>
    <div class="everli-typography">
      <p class="t-title-1 c-everli-green">Title 1 Bold Brand</p>
      <hr />
      <p class="t-title-2">Title 2 Bold Brand</p>
      <p class="t-title-2 t-semibold">Title 2 Semibold</p>
      <hr />
      <p class="t-title-3">Title 3 Bold Brand</p>
      <p class="t-title-3 t-semibold">Title 3 Semibold</p>
      <hr />
      <p class="t-title-4">Title 4 Bold Brand</p>
      <p class="t-title-4 t-semibold">Title 4 Semibold</p>
      <p class="t-title-4 t-regular">Title 4 Regular</p>
      <hr />
      <p class="t-subtitle">Subtitle Semibold</p>
      <p class="t-subtitle t-regular">Subtitle Regular</p>
      <hr />
      <p class="t-body">Body</p>
      <p class="t-body t-regular">Body Regular</p>
      <hr />
      <p class="t-body-small">Body small</p>
      <p class="t-body-small t-regular">Body small regular</p>
      <hr />
      <p class="t-caption">Caption</p>
      <p class="t-caption t-regular">Caption regular</p>
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
