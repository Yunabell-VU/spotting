<template>
<!-- Navigations to wallet, about us and settings -->
    <div class="navi-wrapper">
        <div class="navi"
        v-for="(item, index) in naviList"
        :key="index"
        @click="handleNavigation(item.destination)">
            <span class="navi__name">{{item.name}}</span>
            <span class="iconfont">&#xe692;</span>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Navi',
  setup () {
    const naviList = [
          { name: 'My Wallet', destination: 'Wallet' },
          { name: 'About Spotting', destination: 'AboutUs' },
          { name: 'Settings', destination: '' }
      ]
    const router = useRouter()
    const handleNavigation = (destination) => {
        router.push({ name: destination })
    }
    return { naviList, handleNavigation }
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";
    .navi-wrapper {
        position: absolute;
        top: 45%;
        left: 0;
        height: 45%;
        width: 100%;
    }
    .navi {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20%;
        width: 100%;
        margin-bottom: 10%;
        box-shadow: 0.01rem 0.02rem 0.1rem 0.01rem rgba(0, 0, 0, 0.2);
        color: $content-themeViceColor;
        font-weight: bold;
        &__name {
            font-size: .17rem;
            margin-left: 5%;
            margin-right: 5%;
        }
        .iconfont {
            font-weight: bold;
            font-size: .3rem;
        }
    }
</style>
