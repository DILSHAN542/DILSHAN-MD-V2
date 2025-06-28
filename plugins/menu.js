const { cmd, commands } = require("../command");
const config = require('../config');
const { runtime } = require("../lib/functions");

cmd(
  {
    pattern: "menu",
    alise: ["getmenu"],
    react: "📔",
    desc: "get cmd list",
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      quoted,
      body,
      isCmd,
      command,
      args,
      q,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      reply,
    }
  ) => {
    try {
      let menu = {
        main: "",
        download: "",
        group: "",
        owner: "",
        convert: "",
        search: "",
      };

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern && !commands[i].dontAddCommandList) {
          menu[
            commands[i].category
          ] += `${config.PREFIX}${commands[i].pattern}\n`;
        }
      }
  let platform = process.platform; 
  let madeMenu = `👋𝐇𝐄𝐋𝐋𝐎  ${pushname}*
  ╭━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷
 *𝐃𝐈𝐋𝐒𝐇𝐀𝐍 𝐌𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓*
  ╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

> *╭────────────●●►*
  *│1. DOWNLOAD MENU*📥
  *│2. SEARCH MENU*📚
  *│3. AI MENU*🤖
  *│4. OWNER MENU*🤴
  *│5. GROUP MENU*🃏
  *│6. INFO MENU*🪂
  *│7. CONVERTER MENU*🔮
  *│8. FAN MENU*🪀
  *│9. WALLPAPERS MENU*🖼
  *│10. OTHER MENU*
> *╰────────────●●►*

> ©𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐃𝐈𝐋𝐒𝐇𝐀𝐍 𝐌𝐃`;
      
      const newsletterContext = {
        mentionedJid: [sender],
        forwardingScore: 1000,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363292876277898@newsletter',
          newsletterName: "𝐇𝐀𝐍𝐒 𝐁𝐘𝐓𝐄 𝐌𝐃",
          serverMessageId: 143,
        },
      };

      await robin.sendMessage(
        from,
        {
          image: {
            url: "https://i.ibb.co/6Rxhg321/Chat-GPT-Image-Mar-30-2025-03-39-42-AM.png",
          },
          caption: madeMenu,
          contextInfo: newsletterContext,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.log(e);
      reply(`${e}`);
    }
  }
);
