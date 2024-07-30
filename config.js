
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUdvMmo0NkR6YVlVRTBac0hHYk1KbWtTT05lYVMvd1I1Um9KZEwyK1dIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWnRNL1VSa1pHTnY1aEd6ckNPcFVhM3JhQVdVVG9aTG1ySzBYMHZUVXRSYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSXc1ZHY4ZTBETkpQVVdVNkszcDJiWU5NSE1sQnBzbWI2YjQ1aUl5RG5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2aFRPZDNGbFkvYkIzUElyNHhvSGxXUGswdm5GalMxdm9nRGREd2tJNDNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdQRGk2ZDNKZnBrNndTSVNXemZWU0F6dkNQVlpPSmUwWGZXZlhoVnBZRzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im15RVdMTWdTMG0yL0ZaQUJkdjlTTlVjMUJJV3BaRWdiWFNXK3NSUGJreDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1iOHEwU0IybnU5T0pJT0xiUkdmdTUzellnRnl0TUIzSnp4QWVQdVQwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmNLZGpvMDQ4K2xqSExwd0RCNzQveFVrYzIvSDkwVC9YUm1TSFo1akxFTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkplY1htRlpDdHBQaDVVR0kvbXVpQWxqSVdqenYrcDJKYnk1MkVxUE1OaGIrb0JIY3pBL21iTVpZRnlxYVk2cTZuc2RJWUFqWXFGbHlIQWhIaDI3S2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY5LCJhZHZTZWNyZXRLZXkiOiJCMTZhQWVVOUd6Q2taZk85TWdVRnNsUngzRkxCdjFSajV1QkJCQnZNS3JRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNjE5MDQ1NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUM3RjgxMzdGQjUyRjQxMkE1OUY0RjE5QzQ4OEZDMEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjM4MjEyMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTE2MTkwNDU0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGRDlBNzRFNzFBMzJFNkVBM0RGOEVGMjJCQjdFRjk1NiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyMzgyMTIyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaNzAxT2tNUFR1U240Y2dYZndWN2h3IiwicGhvbmVJZCI6IjIxOWY2YmUxLWI2YjItNDk0Yi1iZWM1LWY0ZjI0NjdiODUwYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwaWZ1ZlFTMm0zR0hadEN5NUg1VTFBYjlVdXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODVZYlF5d0xYMmF5RFdrL1dYRUo4VzMvMm1RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilg5RUo1QkhYIiwibWUiOnsiaWQiOiIyMzQ5MTYxOTA0NTQzOjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuGsiuGthMaWxp1TVMaWxp1DVCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWlIOWU4QkVKZnVwYlVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTTJ6VXFpQ2pRRWppYWlkem9CM2VGTUswZ0lvSEVZcFBWVGFGaWtlYi9RUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZTM2M2EyVGV4MVhadERLN1NkRGpZbVNxTlJtWXZpSGg4RVB2c2s4cFNrRklMWFo1MGFyaC9zUmZaLy9jb0pBb1hWV05RMWtXQnFja1lvNGFCb1dGREE9PSIsImRldmljZVNpZ25hdHVyZSI6InVxUHNGRUp4Z0c5djJ0Yjk1Y29CUWhNMWQ5U2hpNTR2a3lMdmxRM1NZVWVDUjN6cUxaM2JuTEF1V2lpdmcrMDRGZEVLOWFwRFhMMkhvT0hPdGpQbmlRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE2MTkwNDU0MzoyMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUTnMxS29nbzBCSTRtb25jNkFkM2hUQ3RJQ0tCeEdLVDFVMmhZcEhtLzBFIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMzgyMTE2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURFciJ9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
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
