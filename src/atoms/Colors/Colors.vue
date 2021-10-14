<template>
  <div>
    <div class="everli-colors">
      <div class="color-box">
        <div class="bg-deep-green" />
        <p>
          Deep green <br />
          (#3ca000)
        </p>
      </div>
      <div class="color-box">
        <div class="bg-everli-green" />
        <p>
          Everli green <br />
          (#64c828)
        </p>
      </div>
      <div class="color-box">
        <div class="bg-green-10" />
        <p>
          Green 10 <br />
          (#d6ffc2)
        </p>
      </div>
    </div>
    <div class="everli-colors">
      <div class="color-box">
        <div class="bg-violet-black" />
        <p>
          Violet black <br />
          (#302030)
        </p>
      </div>
      <div class="color-box">
        <div class="bg-gray-100" />
        <p>
          Gray 100 <br />
          (#302030)
        </p>
      </div>
      <div class="color-box">
        <div class="bg-link" />
        <p>
          Link <br />
          (#302030)
        </p>
      </div>
    </div>
    <div class="everli-colors">
      <div class="color-box">
        <div class="bg-gray-80" />
        <p>
          Gray 80 <br />
          (#302030)
        </p>
      </div>
      <div class="color-box">
        <div class="bg-gray-40" />
        <p>
          Gray 40 <br />
          (#302030)
        </p>
      </div>
      <div class="color-box">
        <div class="bg-gray-10" />
        <p>
          Gray 10 <br />
          (#302030)
        </p>
      </div>
      <div class="color-box">
        <div class="bg-walter-white" />
        <p>
          Walter white <br />
          (#302030)
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EverliColors",
}
</script>

<style scoped lang="scss">
.everli-colors {
  display: flex;
  margin-bottom: 20px;

  .color-box {
    margin-right: 10px;
    margin-bottom: 10px;

    div {
      width: 150px;
      height: 100px;
      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }

    p {
      line-height: 22px;
      margin-top: 5px;
    }
  }
}
</style>
