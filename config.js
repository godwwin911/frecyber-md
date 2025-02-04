//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Dar Es Salam,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "2349012464012";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Frecyber/Frecyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1d4a42b28790d0f7a7195.jpg";
global.devs = "2349012464012";
global.sudo = process.env.SUDO || "2349012464012";
global.owner = process.env.OWNER_NUMBER || "2349012464012";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUR6QUVhVEprcTVidm5HMkE0TVcxMWRWRkJ4SjV3a2NQcVNyVzJmLzgzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibThGVHlOU2RvU0VzVmtaQWM4TC9VWG00WGdpTE1VMmMxdDUyNnhFa0RHYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5RlRzQU9xN3Q2eE5LcG5XZUg3YW5rNTJBMW13Mk4ySnVuTEwwUXFuZ204PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSWhRWWtqT3gwTXhxNkxtUnZXajZHR3kxdVcxczNCRlB1OEN3RUdpblZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCM0hjazhoS1BML3dsZzV5UWUzUDVWdUtoSFRmblNzWjlDYTAzWEZZMWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9RNW1VeThEeU85YVMvTVpZODFRM3hzS0YyM29UWmIzR2NkMFlsZkxHVWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEEzTk1hRFBDR1hXWVVNaEZxZElwcDR6QmVnTUFIMm0wUmVucUMvMTRXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieC9BQVpRdnd1enU5RnBwV2c2d3lYMTZWZGlGZlMxL1dQVnRESlkxMmV3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZWT0JDeWRVV0tScFBHQWFpY0tYc0VEVGowSzVZdGRsK0RxcHRqdjF3a1MyR3ZWcHArQmZmRktNUHBaS1FncktGMkpjako4V1Q5M25leVVqcjk3OURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiJzVzc0N0RZMjQrN1luY2FYbFlPejJNTDlzRmFQQ3ljM0dtWUUyUEljeU1NPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOWEpCaEhsUVFMaTFLeDE0RE1LdHNRIiwicGhvbmVJZCI6IjY4NDJkZGMxLTFiODktNGFhNy04MTQyLTc5Y2NlMzhlZGIyYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGOWcranJCZGUwRlgzbVh1S0M3b2ppbGZkb2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHU4UVJSckhnR1BKSUNZVnhMUExJeWJBWHRJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhNSkRYRVM1IiwibWUiOnsiaWQiOiIyMzQ5MDEyNDY0MDEyOjk1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZm40TE1ERUt2QWlyMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJYbzhRbHZTK2NVY0J4cnk2NUl3MmZKc1JPemxPTWNRTU0xbE5tNDZFclJvPSIsImFjY291bnRTaWduYXR1cmUiOiI5dEVDaHgzdkFDT2lCZ3l2V2kvQjQ4SFZ2cWlsSjRmSHlBVUo0bjJ6d2JTcXV0Z3VVLytaNzY1S0RQQUpEMWYvaktvdXNMYllTZTNPR3o2MmY4a3VEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRHpUQTc3ZnpLb2t0cm5wdHdWL29sMUExNm9EZGxmRlBtNmZHZGJYTDViVHkxWEFxcVplakZ0VDF4RytkTXRjaDdwSTJ5MEtIL1dQeFBjUjZuR0I2REE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDEyNDY0MDEyOjk1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlY2UEVKYjB2bkZIQWNhOHV1U01ObnliRVRzNVRqSEVERE5aVFp1T2hLMGEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzg3MTEwOTZ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "❌PAY_EVIL_WITH_EVIL❌",
  author: process.env.PACK_AUTHER || "FRECYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "❌G҉O҉D҉W҉I҉N҉❌",
  ownername: process.env.OWNER_NAME || "❌G҉O҉D҉W҉I҉N҉❌",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "GODWIN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
