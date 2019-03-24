const y = require('yeelight-awesome');

let discover = null;

export const getDiscover = async () => {
  if (discover) {
    return discover;
  }

  discover = new y.Discover({
    port: 1982,
    debug: true,
  });

  await discover.start();

  return discover;
};

export const scanSubNet = async discover => [...await discover.scanByIp(0, 255)];

export const getYeelight = async (lightIp, lightPort) => {
  const yeelight = new y.Yeelight({ lightIp, lightPort });
  const connection = await yeelight.connect();
  const [
    bright,
    power,
    name,
    colorTemperature,
  ] = (await yeelight.getProperty([
    y.DevicePropery.BRIGHT,
    y.DevicePropery.POWER,
    y.DevicePropery.NAME,
    y.DevicePropery.CT,
  ])).result.result;

  return {
    lightIp,
    lightPort,
    connection,
    name,
    bright: parseInt(bright, 10),
    power: power === 'on',
    colorTemperature: parseInt(colorTemperature, 10),
  };
};
