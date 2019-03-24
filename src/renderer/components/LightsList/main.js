// import debounce from 'debounce';
import * as yee from '@/common/yeelight-api';

const BRIGHT_STEPS = [...Array(101)]
  .map((item, idx) => idx)
  .slice(1)
  .reverse();

export default {
  name: 'lights-list',
  data: () => ({
    BRIGHT_STEPS,
    lightsList: [],
    slider: 0,
  }),
  async mounted() {
    const discover = await yee.getDiscover();
    const lights = await yee.scanSubNet(discover);

    const list = await Promise
      .all(lights
        .map(({ host, port }) => yee.getYeelight(host, port)));

    console.log(list);

    this.lightsList = list;
  },
  methods: {
    toggle(light) {
      light.connection.setPower(light.power, 'smooth', 300);
    },
    setBright(light) {
      light.connection.setBright(light.bright, 'smooth', 500);
    },
    setCt(light) {
      light.connection.setCtAbx(light.colorTemperature, 'smooth', 500);
    },
  },
};
