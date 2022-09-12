<template>
  <div>
    <div class="everli-typography">
      <p class="eds-t-title-1-bold c-everli-green">Title 1 Bold Brand</p>
      <hr />
      <p class="eds-t-title-2-bold">Title 2 Bold Brand</p>
      <p class="eds-t-title-2-semibold">Title 2 Semibold</p>
      <hr />
      <p class="eds-t-title-3-bold">Title 3 Bold Brand</p>
      <p class="eds-t-title-3-semibold">Title 3 Semibold</p>
      <hr />
      <p class="eds-t-title-4-bold">Title 4 Bold Brand</p>
      <p class="eds-t-title-4-semibold">Title 4 Semibold</p>
      <p class="eds-t-title-4-regular">Title 4 Regular</p>
      <hr />
      <p class="eds-t-subtitle-semibold">Subtitle Semibold</p>
      <p class="eds-t-subtitle-regular">Subtitle Regular</p>
      <hr />
      <p class="eds-t-body-semibold">Body Semibold</p>
      <p class="eds-t-body-regular">Body Regular</p>
      <hr />
      <p class="eds-t-body-small-semibold">Body small Semibold</p>
      <p class="eds-t-body-small-regular">Body small Regular</p>
      <hr />
      <p class="eds-t-caption-semibold">Caption Semibold</p>
      <p class="eds-t-caption-regular">Caption Regular</p>
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
