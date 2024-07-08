<template>
  <div>
    <div class="everli-colors">
      <div class="color-box">
        <div class="eds-bg-green-100" />
        <p>
          Green 100<br />
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-green-110" />
        <p>
          Green 110 <br />
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-green-10" />
        <p>
          Green 10 <br />
        </p>
      </div>
    </div>
    <div class="everli-colors">
      <div class="color-box">
        <div class="eds-bg-violet-black" />
        <p>
          Violet black <br />
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-gray-100" />
        <p>
          Gray 100 <br />
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-link" />
        <p>
          Link <br />
        </p>
      </div>
    </div>
    <div class="everli-colors">
      <div class="color-box">
        <div class="eds-bg-gray-80" />
        <p>
          Gray 80 <br />
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-gray-40" />
        <p>
          Gray 40 <br />
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-gray-10" />
        <p>
          Gray 10 <br />
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-walter-white" />
        <p>
          Walter white <br />
        </p>
      </div>
    </div>
    <div class="everli-colors">
      <div class="color-box">
        <div class="eds-bg-blue-plus" />
        <p>
          Blue Plus <br />
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-blue-20" />
        <p>
          Blue 20 <br />
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-purple-rain" />
        <p>
          Purple rain <br />
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-red-hot" />
        <p>
          Red hot <br />
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-teal-waves" />
        <p>
          Teal waves <br />
        </p>
      </div>
    </div>
    <div class="everli-colors">
      <div class="color-box">
        <div class="eds-bg-yellow-sun" />
        <p>
          Yellow sun <br />
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-red-20" />
        <p>
          Red 20 <br />
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-teal-20" />
        <p>
          Teal 20 <br />
        </p>
      </div>
      <div class="color-box">
        <div class="eds-bg-yellow-20" />
        <p>
          Yellow 20 <br />
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
