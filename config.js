const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_52_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjExLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDczLFxuICAgICAgICA5MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OSxcbiAgICAgICAgODUsXG4gICAgICAgIDg4LFxuICAgICAgICA5OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDYyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI5LFxuICAgICAgICA1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDczLFxuICAgICAgICA3MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1QUY5ZTI4SGV2eTIyMmtwSGczK3hDNjB5QTFzVHU2czRrSkpTdmJZbWpBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MzcxOTY1ODg5OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkE4ODIxMTczQjEzQ0M1RDEwNDI0RTRCNEQyRkMxOTdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjE3NTIxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjVLamhLWGZZUlI2djVpeFhoRG1wTndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWVlN2M1ZDMtNWU5OS00MzI4LTllY2MtNmJjM2E5ZWE3NDI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNixcbiAgICAgIDQ0LFxuICAgICAgMTM5LFxuICAgICAgMTUwLFxuICAgICAgMTMzLFxuICAgICAgNzQsXG4gICAgICAxNTksXG4gICAgICAxNjAsXG4gICAgICAyMTUsXG4gICAgICAxOTUsXG4gICAgICAxODQsXG4gICAgICAxOTUsXG4gICAgICAxNTgsXG4gICAgICA2NyxcbiAgICAgIDM0LFxuICAgICAgMzYsXG4gICAgICAyMixcbiAgICAgIDE2NSxcbiAgICAgIDI0NyxcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMTQ5LFxuICAgICAgNTAsXG4gICAgICAxODgsXG4gICAgICAxNTEsXG4gICAgICAyNDUsXG4gICAgICAyNDgsXG4gICAgICAxMTMsXG4gICAgICAyMDQsXG4gICAgICAzMCxcbiAgICAgIDE3NixcbiAgICAgIDczLFxuICAgICAgMTYsXG4gICAgICA4OSxcbiAgICAgIDEyMSxcbiAgICAgIDEzMCxcbiAgICAgIDE3MixcbiAgICAgIDE2LFxuICAgICAgMjIxLFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko2VzdFNlc4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTk2NTg4OTk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODczMjEzNDkyNTUyNjQ6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJUYW5hLi4uLi4uXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjNWMmJnREVLbWR0TFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzQU1mSU1EcWFzTm1NVWo0RWM0RkNONjVPWDRhYnRLYzVOaUNhUyttcFQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZtYStOcFlCNkd3dzErZGY0Rjg2R3QyUmlqUkpRWGhaamQ1VTNrRFRHbTg0M21TeXZJWmFVdnhJcU1GTHljT28raDNjRnFkamN5NlFxakxBU25ZbkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkw1VmNUZVhKNmMzOTRWWkNMYXBKZk50RDlQZjFLWDFwcjI4MXlLcktOdEd3Z05wSDJGSFZiNisyVWY5Rk5rY29JWnpXS2p2bFpuRjU1U3JzY1QzTGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxOTY1ODg5OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjE3NTE2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQnBSXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCcFIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0eVVWUHgxZVhvUzRQZ3hyY0h1UlVROVVVWW5HRjhCRmZTeU5YaG1ldXlNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkyNDIxNTk2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNjE3NTE4NzQ0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
