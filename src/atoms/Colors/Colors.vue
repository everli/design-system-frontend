<template>
  <div>
    <div class="everli-colors">
      <div class="color-box">
        <div class="eds-bg-deep-green" />
        <p>
          Deep green <br />
          (#3ca000)
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-everli-green" />
        <p>
          Everli green <br />
          (#64c828)
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-green-10" />
        <p>
          Green 10 <br />
          (#d6ffc2)
        </p>
      </div>
    </div>
    <div class="everli-colors">
      <div class="color-box">
        <div class="eds-bg-violet-black" />
        <p>
          Violet black <br />
          (#302030)
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-gray-100" />
        <p>
          Gray 100 <br />
          (#756075)
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-link" />
        <p>
          Link <br />
          (#1a73e8)
        </p>
      </div>
    </div>
    <div class="everli-colors">
      <div class="color-box">
        <div class="eds-bg-gray-80" />
        <p>
          Gray 80 <br />
          (#9e8f9e)
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-gray-40" />
        <p>
          Gray 40 <br />
          (#e3dfe3)
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-gray-10" />
        <p>
          Gray 10 <br />
          (#f8f7f8)
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-walter-white" />
        <p>
          Walter white <br />
          (#ffffff)
        </p>
      </div>
    </div>
    <div class="everli-colors">
      <div class="color-box">
        <div class="eds-bg-blue-plus" />
        <p>
          Blue Plus <br />
          (#007e91)
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-purple-rain" />
        <p>
          Purple rain <br />
          (#8a3264)
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-red-hot" />
        <p>
          Red hot <br />
          (#dc325f)
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-teal-waves" />
        <p>
          Teal waves <br />
          (#46c6c6)
        </p>
      </div>
    </div>
    <div class="everli-colors">
      <div class="color-box">
        <div class="eds-bg-yellow-sun" />
        <p>
          Yellow sun <br />
          (#ffd050)
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-red-20" />
        <p>
          Red 20 <br />
          (#ffcedc)
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-teal-20" />
        <p>
          Teal 20 <br />
          (#daf4f4)
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-yellow-20" />
        <p>
          Yellow 20 <br />
          (#fff6dc)
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
  font-family: "Fira Sans";
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
