let handler  = async (m, { conn, usedPrefix }) => { 
	conn.sendButton(m.chat, `Halo Kak👋\nsaya adalah WarD BOT, WarD BOT adalah Sebuah Bot yang bisa membantumu di grup ini, klik tombol dibawah ini jika kamu ingin menggunakan bot!`.trim(), '©WarD-BOT', 'Menu', '.menu', m)
	}

handler.command = /^(salken)$/i

module.exports = handler
