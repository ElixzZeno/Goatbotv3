module.exports = {
	config: {
		name: "goiadmin",
		author: "yukinori",
		role: 2,
		shortDescription: " ",
		longDescription: "",
		category: "BOT",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "100092377898995") {
		var aid = ["100092377898995"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["what do you need from my yukinori ʚĭɞ admin?", "Tag Admin again, I'll punch you", "don't disturb my admin","he's pooping","my admin is sleeping"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};