<template>
  <div id="wrapper">
    <v-card
      :key="light.lightIp"
      v-for="light in lightsList"
    >
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{light.name || 'Blub'}}</h3>
          <div> {{ light.lightIp }} </div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-switch
          v-model="light.power"
          :label="`Enable`"
          @click="toggle(light)"
        ></v-switch>
        <v-select
          v-model="light.bright"
          :items="BRIGHT_STEPS"
          @change="setBright(light)"
          label="Bright"
          single-line
        ></v-select>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script src="./LightsList/main.js"></script>
<style src="./LightsList/style.css"></style>
