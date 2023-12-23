const Redis = require("ioredis")
const redis = new Redis({
  port: 19380, // Redis port
  host: "redis-19380.c301.ap-south-1-1.ec2.cloud.redislabs.com", // Redis host
  password: "Sv6DvDWyShs38EpZzyaBf07WRKAkSUsF",
})

export default redis
