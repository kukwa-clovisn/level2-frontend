<template>
  <div class="logo-main">
    <!-- <div class="logo">k</div> -->
    <div class="logo">
      <!-- <img src="/assets/seven-advanced-academy-logo.de75a23.png" alt=""> -->
     <img src="../assets/seven-logo.svg" alt="">
    </div>
    <p><span>kcn</span> <br><br> is inviting you to take a quiz</p>
    <h2>
      <span class="online">57,345 online</span>
      <span class="members">45,935210 members</span>
    </h2>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>
 <style lang="scss">
.logo-main {
  width: 100%;
  margin: 1% 0;
  .logo {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: white;
    color: green;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2vh auto;
    cursor: pointer;
    border: 4px solid rgb(55,107,146);
    font-size: 35px;
    img{
      width: 70%;
      color: red;
    }
    animation: round 2s infinite linear;
  }

  @keyframes round {
    0%{
      transform: rotateZ(0deg);
    }
    100%{
      transform: rotateZ(360deg);
    }
  }

  p {
    text-align: center;
    text-transform: capitalize;
    cursor: pointer;
    font-size: 12px;

    span {
      text-transform: uppercase;
      color: rgb(59,165,93);
      font-size: 14px;
      cursor: pointer;
    //   margin: 3% 0;
    }
  }

  h2 {
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    .online {
        cursor: pointer;
      &::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgb(59,165,93);
        margin: 0 3% 0 0;
      }
    }
    .members {
        cursor: pointer;
      &::before {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgb(189, 189, 189);
        margin: 0 3% 0 0;
      }
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding: 5px 0;
    //   margin: 1% 3%;
    font-weight: 300;
    min-width: 50%;
      text-transform: capitalize;
    //   opacity: 0.6;
    color: #949393;
    cursor: pointer;
    }
  }
}
</style>