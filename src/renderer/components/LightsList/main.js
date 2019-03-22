import debounce from 'debounce';
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
  }),
  async mounted() {
    const discover = await yee.getDiscover();
    const lights = await yee.scanSubNet(discover);

    const list = await Promise
      .all(lights
        .map(({ host, port }) => yee.getYeelight(host, port)));

    this.lightsList = list;
  },
  methods: {
    toggle: debounce((light) => {
      light.power = !light.power;
      light.connection.setPower(light.power, 'smooth', 300);
    }, 100, true),
    setBright: (light) => {
      light.connection.setBright(light.bright, 'smooth', 500);
    },
  },
};
