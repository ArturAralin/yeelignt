<template>
  <el-row>
    <el-col :span="24">
      <el-card
        :key="light.lightIp"
        v-for="light in lightsList"
      >
        <div slot="header">
          <h1 class="card_header">{{light.name || 'Blub'}} ({{light.lightIp}})</h1>
          <el-switch
            class="toggle_button"
            v-model="light.power"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="Enable"
            @change="toggle(light)"
          ></el-switch>
        </div>
        <div>
          <span>Bright</span>
          <el-slider
            v-model="light.bright"
            :min="1"
            :max="100"
            @change="setBright(light)"
          ></el-slider>
          <span>Color temperature</span>
          <el-slider
            v-model="light.colorTemperature"
            :min="1700"
            :max="6500"
            @change="setCt(light)"
          ></el-slider>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script src="./LightsList/main.js"></script>
<style src="./LightsList/style.css"></style>
