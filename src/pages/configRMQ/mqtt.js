import mqttjs from 'mqtt'
import config from './connection'
let mqtt = mqttjs.connect(config.rmqAddress, {
  username: config.rmqUsername,
  password: config.rmqPassword,
  // clientId: 'MesinAbsensi-' + Math.random().toString(16).substr(2, 8) + '-Assalam-',
  protocolId: 'MQTT'
})
export default mqtt
