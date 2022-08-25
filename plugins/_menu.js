const bot = require('../lib/events')
const {
	ctt,
	addSpace,
	textToStylist,
	PREFIX,
	getUptime,
	PLUGINS,
	getRam,
        genHydratedButtons,
        getBuffer,
        jidToNum,
        genThumbnail,
} = require('../lib/')
const { VERSION, FOOTERMARK, BOT_INFO, MENU_MEDIA, } = require('../config')
bot.addCommand(
	{
		pattern: 'help ?(.*)',
		fromMe: true,
		dontAddCommandList: true,
	},
	async (message, match) => {
		const date = new Date()
		let CMD_HELP = `╭────────────────╮
						ʟᴇᴠᴀɴᴛᴇʀ
╰────────────────╯

╭────────────────
│ Prefix : ${PREFIX}
│ User : ${message.pushName}
│ Time : ${date.toLocaleTimeString()}
│ Day : ${date.toLocaleString('en', { weekday: 'long' })}
│ Date : ${date.toLocaleDateString('hi')}
│ Version : ${VERSION}
│ Plugins : ${PLUGINS.count}
│ Ram : ${getRam()}
│ Uptime : ${getUptime('t')}
╰────────────────
╭────────────────
`
		const commands = []
		bot.commands.map(async (command, index) => {
			if (
				command.dontAddCommandList === false &&
				command.pattern !== undefined
			) {
				commands.push(ctt(command.pattern))
			}
		})
		commands.forEach((command, i) => {
			CMD_HELP += `│ ${i + 1} ${addSpace(
				i + 1,
				commands.length
			)}${textToStylist(command.toUpperCase(), 'mono')}\n`
		})
		CMD_HELP += `╰────────────────`
		return await message.send('' + CMD_HELP + '')
	}
)


bot.addCommand(
	{
		pattern: 'list ?(.*)',
		fromMe: true,
		dontAddCommandList: true,
	},
	async (message, match) => {
		const commands = {}
		bot.commands.map(async (command, index) => {
			if (
				command.dontAddCommandList === false &&
				command.pattern !== undefined
			) {
				if (!commands[command.type]) commands[command.type] = []
				commands[command.type].push(ctt(command.pattern).trim())
			}
		})
		const date = new Date()

		let msg =
			'' +
			`╔════⟬  ${BOT_INFO.split(",")[1]}  ⟭════❃
║
╠❐  𝐎𝐖𝐍𝐄𝐑 : ${BOT_INFO.split(",")[0]}
║ 
╠❐  𝐏𝐑𝐄𝐅𝐈𝐗 : ${PREFIX}
║
╠❐  𝐔𝐒𝐄𝐑: ${message.pushName}
║
╠❐  𝐓𝐈𝐌𝐄 : ${date.toLocaleTimeString()}
║
╠❐  𝐃𝐀𝐘 : ${date.toLocaleString('en', { weekday: 'long' })}
║
╠❐  𝐃𝐀𝐓𝐄 : ${date.toLocaleDateString('hi')}
║
╠❐  𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : ${VERSION}
║
╠❐  𝐓𝐎𝐓𝐀𝐋 𝐏𝐋𝐔𝐆𝐈𝐍𝐒 : ${PLUGINS.count}
║
╠❐  𝐔𝐏𝐓𝐈𝐌𝐄 : ${getUptime('t')}
║ 
║
║       
║   ▎▍▌▌▎▌▉▐▏▌
║   ▎▍▌▌▎▌▉▐▏▌
║   
║     ©${BOT_INFO.split(",")[0]}
╚═══════════════════❃
` +
			''
		for (const command in commands) {
			msg += `╔═❃ ${textToStylist(
				command.toLowerCase(),
				'smallcaps'
			)} ❃
`
			for (const plugin of commands[command])
				msg += `╠❐ ${textToStylist(plugin.toUpperCase(), 'mono')}\n`
			msg += `╚════════════════❃
`
	}
		await message.send(msg.trim())
	}
)
bot.addCommand(
	{
		pattern: 'cmd ?(.*)',
		fromMe: true,
		dontAddCommandList: true,
	},
	async (message, match) => {
		const commands = {}
		bot.commands.map(async (command, index) => {
			if (
				command.dontAddCommandList === false &&
				command.pattern !== undefined
			) {
				if (!commands[command.type]) commands[command.type] = []
				commands[command.type].push(ctt(command.pattern).trim())
			}
		})
		const date = new Date()

		let msg =
			'' +
			`╔════⟬  ${BOT_INFO.split(",")[1]}  ⟭════❃
╠❐  𝐎𝐖𝐍𝐄𝐑 : ${BOT_INFO.split(",")[0]}
╠❐  𝐔𝐒𝐄𝐑: ${message.pushName}
╚═══════════════════❃
` +
			''
		for (const command in commands) {
			msg += `╔═❃ ${textToStylist(
				command.toLowerCase(),
				'smallcaps'
			)} ❃
`
			for (const plugin of commands[command])
				msg += `╠❐ ${textToStylist(plugin.toUpperCase(), 'mono')}\n`
			msg += `╚════════════════❃
`
	}
		await message.send(msg.trim())
	}
)

bot.addCommand(
	{
		pattern: 'menu ?(.*)',
		fromMe: true,
		dontAddCommandList: true,
	},
	async (message, match) => {
        const date = new Date()
		await message.send(
            await genHydratedButtons( [
                  {         
                                       urlButton: {
								text: '𝐒𝐔𝐏𝐏𝐎𝐑𝐓',
								url: 'https://chat.whatsapp.com/GI1czKTYIyN9r1yjbmirB3',
							}
                                     },

                 {
                                       callButton: {displayText: 'Owner',
                                       phoneNumber: '+12345678901'}},
                             
						{ button: { id: 'ping', text: '𝐒𝐏𝐄𝐄𝐃 𝐓𝐄𝐒𝐓' } },
						{ button: { id: 'cmd', text: '𝐀𝐋𝐋 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒' } },
					],
                `\n╔════⟬ ${BOT_INFO.split(",")[1]} ⟭════❃
║
╠❐  𝐎𝐖𝐍𝐄𝐑 : ${BOT_INFO.split(",")[0]}
║
╠❐  𝐏𝐑𝐄𝐅𝐈𝐗 : ${PREFIX}
║
╠❐  𝐔𝐒𝐄𝐑 : ${message.pushName}
║
╠❐  𝐓𝐈𝐌𝐄 : ${date.toLocaleTimeString()}
║
╠❐  𝐃𝐀𝐘 : ${date.toLocaleString('en', { weekday: 'long' })}
║
╠❐  𝐃𝐀𝐓𝐄 : ${date.toLocaleDateString('hi')}
║
╠❐  𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : ${VERSION}
║
╠❐  𝐓𝐎𝐓𝐀𝐋 𝐏𝐋𝐔𝐆𝐈𝐍𝐒 : ${PLUGINS.count}
║
╠❐  𝐔𝐏𝐓𝐈𝐌𝐄 : ${getUptime('t')}
║ 
║
║       
║   ▎▍▌▌▎▌▉▐▏▌▎▍▌▌▌
║   ▎▍▌▌▎▌▉▐▏▌▎▍▌▌▌
║   
║                ${BOT_INFO.split(",")[1]}
╚═══════════════════❃\n`,
		    `${FOOTERMARK}`, message,{image: `${BOT_INFO.split(",")[2]}`}
            ),
            {},
            'template'
        ) 
 }
)

const image = 'https://i.imgur.com/l0t8EEC.jpeg' //MAIN IMAGE URL HERE
const logo = 'https://telegra.ph/file/b1a153ed50e122440e8bb.jpg'

bot.addCommand(
	{
		pattern: 'gruplinkgib ?(.*)',
		fromMe: true,
		dontAddCommandList: true,
	},   async (message, match) => {
        const jid = message.jid
        const number = message.client.user.jid
        const thumb = await getBuffer(image)
        const thumbnail = await getBuffer(logo)
        const viz = {}
        // ADDED /* TO REMOVE LINK PREVIEW TYPE
        viz.linkPreview = {
               renderLargerThumbnail: true,
               showAdAttribution: true,
               head: "𝐌𝐄𝐓𝐑𝐎-𝐁𝐎𝐓",
               body: "ᴄʟɪᴄᴋ ʜᴇʀᴇ ᴛᴏ ᴊᴏɪɴ ᴏᴜʀ sᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ 🫣 !",
               mediaType: 1,
               thumbnail: thumb.buffer,
               sourceUrl: "https://chat.whatsapp.com/GI1czKTYIyN9r1yjbmirB3"
             }
        // ADDED */ TO REMOVE LINK PREVIEW TYPE
        viz.quoted = {
            key: {
                fromMe: false,
                participant: "120363039942178922@g.us",
                remoteJid: "status@broadcast"
            },
           message: {
		'contactMessage': {
		'displayName': `${message.pushName}`, //ADD `${message.client.user.name}` TO DISPLAY CLIENT USER NAME.
		'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;'${message.client.user.name}',;;;\nFN:'${message.client.user.name}',\nitem1.TEL;waid=${jidToNum(number)}\nitem1.X-ABLabel:WhatsApp\nEND:VCARD`,
		'jpegThumbnail': await genThumbnail(thumbnail.buffer)
                }
            }
        }
     message.send(`👆🏻𝗝𝗢𝗜𝗡 𝗜𝗡 𝗢𝗨𝗥 𝗦𝗨𝗣𝗣𝗢𝗥𝗧 𝗚𝗥𝗢𝗨𝗣`,viz)
    }
);

bot.addCommand(
	{
		pattern: 'vmenu ?(.*)',
		fromMe: true,
		dontAddCommandList: true,
	},
	async (message, match) => {
        const date = new Date()
		await message.send(
            await genHydratedButtons( [{ button: { id: 'ping', text: '𝐒𝐏𝐄𝐄𝐃 𝐓𝐄𝐒𝐓' } },{ button: { id: 'cmd', text: '𝐀𝐋𝐋 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒' } }, { button: { id: 'gruplinkgib', text: '𝐒𝐔𝐏𝐏𝐎𝐑𝐓' } },],
                `\n╔════⟬ ${BOT_INFO.split(",")[1]} ⟭════❃
║
╠❐  𝐎𝐖𝐍𝐄𝐑 : ${BOT_INFO.split(",")[0]}
║
╠❐  𝐏𝐑𝐄𝐅𝐈𝐗 : ${PREFIX}
║
╠❐  𝐔𝐒𝐄𝐑 : ${message.pushName}
║
╠❐  𝐓𝐈𝐌𝐄 : ${date.toLocaleTimeString()}
║
╠❐  𝐃𝐀𝐘 : ${date.toLocaleString('en', { weekday: 'long' })}
║
╠❐  𝐃𝐀𝐓𝐄 : ${date.toLocaleDateString('hi')}
║
╠❐  𝐕𝐄𝐑𝐒𝐈𝐎𝐍 : ${VERSION}
║
╠❐  𝐓𝐎𝐓𝐀𝐋 𝐏𝐋𝐔𝐆𝐈𝐍𝐒 : ${PLUGINS.count}
║
╠❐  𝐔𝐏𝐓𝐈𝐌𝐄 : ${getUptime('t')}
║ 
║
║       
║   ▎▍▌▌▎▌▉▐▏▌▎▍▌▌▌
║   ▎▍▌▌▎▌▉▐▏▌▎▍▌▌▌
║   
║                ${BOT_INFO.split(",")[1]}
╚═══════════════════❃\n`,
		    `${FOOTERMARK}`, message ,{video: `${MENU_MEDIA.split(",")[1]}`}
            ),
            {},
            'template'
        ) 
 }
)

