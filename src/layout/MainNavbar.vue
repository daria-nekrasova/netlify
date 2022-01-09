<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
<!--    <template>-->
<!--      <router-link v-popover:popover1 class="navbar-brand" to="/">-->
<!--        Now Ui Kit-->
<!--      </router-link>-->
<!--      <el-popover-->
<!--        ref="popover1"-->
<!--        popper-class="popover"-->
<!--        placement="bottom"-->
<!--        width="200"-->
<!--        trigger="hover"-->
<!--      >-->
<!--        <div class="popover-body">-->
<!--          Created by Anton Glebov.-->
<!--        </div>-->
<!--      </el-popover>-->
<!--    </template>-->
    <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          href="#bio"
        >
          <i class="now-ui-icons education_paper"></i>
          <p>Биография</p>
        </a>
      </li>
      <li class="nav-item">
        <a
            class="nav-link"
            href="#retro"
        >
          <i class="now-ui-icons design_bullet-list-67"></i>
          <p>Ретроспектива</p>
        </a>
      </li>
      <li class="nav-item">
        <a
            class="nav-link"
            href="#awards"
        >
          <i class="now-ui-icons sport_trophy"></i>
          <p>Награды</p>
        </a>
      </li>
      <li class="nav-item">
        <a
            class="nav-link"
            href="#photo"
        >
          <i class="now-ui-icons design_image"></i>
          <p>Фото</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
