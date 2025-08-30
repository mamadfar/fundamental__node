const os = require("os");

const log = console.log;

log(os.platform());
log(os.arch());
log(os.version());
log(os.type());
log(os.hostname());
log(os.release());
log(os.cpus());
log(os.uptime() / 60);
log(os.loadavg());
log(os.freemem());
log(os.totalmem());
log(os.userInfo());
