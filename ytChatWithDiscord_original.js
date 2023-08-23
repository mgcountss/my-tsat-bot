const fetch = require('node-fetch');
const Discord = require('discord.js');
const { Client, Events, GatewayIntentBits, WebhookClient } = require('discord.js');
var points = require('./points.json')
var votes = require('./votes.json')
var counts = require('./counts.json')
var oldD = "";
var oldDsfd = "";
var oldDCount = "";
async function saveData() {
    if (JSON.stringify(points) != oldD) {
        oldD = JSON.stringify(points)
        await fs.promises.writeFile("pointstemp.json", JSON.stringify(points, null, 2));
        await fs.promises.rename("pointstemp.json", "points.json");
        console.log("Yes saved data!");
    } else {
        console.log("Not saved data!");
    }
}
var CronJob = require('cron').CronJob;
var doubleXP = false;
var job2 = new CronJob(
    '0 0 0 * * SAT',
    async function () {
        doubleXP = true;
        sendMessageYT("Weekend's double xp has started. It's a good idea to grind XP now! :)")
    },
    null,
    true,
    'Europe/Helsinki'
);
var job3 = new CronJob(
    '0 0 0 * * MON',
    async function () {
        doubleXP = false;
        sendMessageYT("Weekend's double xp has ended!")
    },
    null,
    true,
    'Europe/Helsinki'
);
setInterval(() => {
    if (doubleXP == false) {
        var dayOfWeek = new Date().getDay();
        var isWeekend = (dayOfWeek === 6) || (dayOfWeek === 0); // 6 = Saturday, 0 = Sunday
        if (isWeekend == true) {
            doubleXP = true;
            //sendMessageYT("Weekend's double xp has started. It's a good idea to grind XP now! :)")

        } else {
            doubleXP = false;
        }
    } else {
        var dayOfWeek = new Date().getDay();
        var isWeekend = (dayOfWeek === 6) || (dayOfWeek === 0); // 6 = Saturday, 0 = Sunday
        if (isWeekend == true) {
            doubleXP = true;

        } else {
            doubleXP = false;
            //sendMessageYT("Weekend's double xp has ended!")
        }
    }
}, 1000);

setInterval(saveData, 1000);
async function saveDataVotes() {
    if (JSON.stringify(votes) != oldDsfd) {
        oldDsfd = JSON.stringify(votes)
        await fs.promises.writeFile("votestemp.json", JSON.stringify(votes, null, 2));
        await fs.promises.rename("votestemp.json", "votes.json");
        console.log("Yes saved datavotes!");
    } else {
        console.log("Not saved datavotes!");
    }
}
setInterval(saveDataVotes, 1000);
async function saveDataCounts() {
    if (JSON.stringify(counts) != oldDCount) {
        oldDCount = JSON.stringify(counts)
        await fs.promises.writeFile("countstemp.json", JSON.stringify(counts, null, 2));
        await fs.promises.rename("countstemp.json", "counts.json");
        console.log("Yes saved datacounts!");
    } else {
        console.log("Not saved datacounts!");
    }
}
setInterval(saveDataCounts, 1000);
function sendMessageYT(text) {
    fetch("https://www.youtube.com/youtubei/v1/live_chat/send_message?key=<APIKEY>&prettyPrint=false", {
        "headers": {
            "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "SAPISIDHASH <authorization>",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Chromium\";v=\"115\", \"Google Chrome\";v=\"115\"",
    "sec-ch-ua-arch": "\"x86\"",
    "sec-ch-ua-bitness": "\"64\"",
    "sec-ch-ua-full-version": "\"115.0.5790.171\"",
    "sec-ch-ua-full-version-list": "\"Not/A)Brand\";v=\"99.0.0.0\", \"Chromium\";v=\"115.0.5790.171\", \"Google Chrome\";v=\"115.0.5790.171\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": "\"\"",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-ch-ua-platform-version": "\"15.0.0\"",
    "sec-ch-ua-wow64": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "same-origin",
    "sec-fetch-site": "same-origin",
    "x-goog-authuser": "<x-goog-authuser>",
    "x-goog-pageid": "<x-goog-pageid>",
    "x-goog-visitor-id": "<x-goog-visitor-id>",
    "x-origin": "https://www.youtube.com",
    "x-youtube-bootstrap-logged-in": "true",
    "x-youtube-client-name": "1",
    "x-youtube-client-version": "2.20230817.02.00",
    "cookie": "<COOKIE>",
    "Referer": "<REFERER>",
    "Referrer-Policy": "strict-origin-when-cross-origin"
        }, body: JSON.stringify({
            "context": {
                "client": {
                    "hl": "en",
                    "gl": "FI",
                    "remoteHost": "<remoteHost>",
                    "deviceMake": "",
                    "deviceModel": "",
                    "visitorData": "<visitorData>",
                    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36,gzip(gfe)",
                    "clientName": "WEB",
                    "clientVersion": "<clientVersion>",
                    "osName": "Windows",
                    "osVersion": "10.0",
                    "originalUrl": "<originalUrl>",
                    "platform": "DESKTOP",
                    "clientFormFactor": "UNKNOWN_FORM_FACTOR",
                    "configInfo": {
                        "appInstallData": "<appInstallData>"
                    },
                    "userInterfaceTheme": "USER_INTERFACE_THEME_DARK",
                    "timeZone": "Europe/Kiev",
                    "browserName": "Chrome",
                    "browserVersion": "114.0.0.0",
                    "acceptHeader": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                    "deviceExperimentId": "<deviceExperimentId>",
                    "screenWidthPoints": 400,
                    "screenHeightPoints": 550,
                    "screenPixelDensity": 1,
                    "screenDensityFloat": 1,
                    "utcOffsetMinutes": 180,
                    "connectionType": "CONN_CELLULAR_4G",
                    "memoryTotalKbytes": "8000000",
                    "mainAppWebInfo": {
                        "graftUrl": "<graftUrl>",
                        "webDisplayMode": "WEB_DISPLAY_MODE_BROWSER",
                        "isWebNativeShareAvailable": true
                    }
                },
                "user": {
                    "lockedSafetyMode": false
                },
                "request": {
                    "useSsl": true,
                    "internalExperimentFlags": [],
                    "consistencyTokenJars": []
                },
                "clickTracking": {
                    "clickTrackingParams": "<clickTrackingParams>"
                },
                "adSignalsInfo": {
                    "params": []
                }
            },
            "params": "<params>",
            "clientMessageId": "<clientMessageId>",
            "richMessage": {
                "textSegments": [
                    {
                        "text": text
                    }
                ]
            }
        }),
        "method": "POST"
    });
}
sendMessageYT("hiii alll bot has started! :3")

let Daily = [];
let Weekly = [];
let Monthly = [];

async function getShit() {
    await fetch('http://localhost:2023/api/last30days').then(res => res.json()).then(data => {
        Monthly = data
    })
    await fetch('http://localhost:2023/api/last7days').then(res => res.json()).then(data => {
        Weekly = data
    })
    await fetch('http://localhost:2023/api/24hr').then(res => res.json()).then(data => {
        Daily = data
    })
}

getShit()
setInterval(() => {
    getShit()
}, 60000)


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers
    ]
});

function abbreviateV2(count) {
    count = count.toString()
    var first3 = count.slice(0, 3)
    var last = count.slice(3)
    var abbr = new Array(last.length).fill(0).join('')
    return parseFloat(first3 + abbr);
}
var job = new CronJob(
    '0 */5 * * * *',
    async function () {
        var activeUsers = 0;
        var activeUsersList = [];
        var xd = -1;
        for (let i of points) {
            xd++;
            if (i?.combinedwith == null) {
                if ((Date.now() - i.lastMessage) <= 1000 * 60 * 5) {
                    activeUsers++;
                    if (i.name != "Nia Bot") activeUsersList.push(i.name)
                    const currPoint = points[xd].points;

                    points[xd].points += 1;
                    if (points[xd].channel_id == "<limit someone CHANNELID>") points[xd].points -= 0.5;
                    points[xd].getPoint = false;
                    points[xd].time += 5;
                    if (points[xd].channel_id == "<limit someone CHANNELID>") points[xd].time -= 2.5;
                    if (points[xd].points >= 1000) {
                        if (points[xd].points != currPoint) {
                            if (abbreviateV2(points[xd].points) == points[xd].points) sendMessageYT(`Congrats @${i.name} on hitting ${points[xd].points.toLocaleString("en-US")} points!`)
                        }
                    }
                }
            } else {
                const findcombinedwith = points.findIndex((a) => a.channel_id == i.combinedwith);
                if (findcombinedwith != -1) {
                    const p = points[xd].points;
                    const xp = points[xd].xp;
                    const t = points[xd].time;
                    const msg = points[xd].messages;
                    if (points[xd].points > 0) {
                        points[xd].points -= p;
                        //if (points[xd]?.onSystem == null) points[findcombinedwith].points += p;
                    }
                    if (points[xd].xp > 0) {
                        points[xd].xp -= xp;
                        //if (points[xd]?.onSystem == null) points[findcombinedwith].xp += xp;
                    }
                    if (points[xd].time > 0) {
                        points[xd].time -= t;
                        //if (points[xd]?.onSystem == null) points[findcombinedwith].time += t;
                    }
                    if (points[xd].messages > 0) {
                        points[xd].messages -= msg;
                        //if (points[xd]?.onSystem == null) points[findcombinedwith].messages += msg;
                    }

                    points[xd].getPoint = false;
                }
            }
        }
        if (activeUsers > 1) {
            sendMessageYT(`${activeUsersList.join(",").slice(0, 150)} have gotten 1 point! (${activeUsers})`);
        }

    },
    null,
    true,
    'Europe/Helsinki'
);
var combining = new Map();
const getCont = require('./cont.json')
client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
    getChat(getCont.continuation, "<VIDEOID though this doesnt do anything lol>")
});

client.on("messageCreate", message => {
    if (message.channelId == "<CHANNELID>") {
        var msg = `${message?.member?.displayName ?? message?.author?.username} (DC): ${message.content}`.slice(0, 200);
        if (message.mentions.members.size > 0) {
            msg = `${message?.member?.displayName ?? message?.author?.username} (DC): ${message.content?.replace(`<@${message.mentions.members.first().id}>`, `#${(message.mentions.members.first())?.nickname ?? (message.mentions.members.first())?.user?.username}`)}`.slice(0, 200);
        }
        sendMessageYT(msg)
        message.react('✅');
    } else if (message.channelId == "<OTHERCHANNELID>") {
        if (message.webhookId != undefined) {
            var msg = `${message?.member?.displayName ?? message?.author?.username}: ${message.content}`.slice(0, 200);
            if (message.mentions.members.size > 0) {
                msg = `${message?.member?.displayName ?? message?.author?.username}: ${message.content?.replace(`<@${message.mentions.members.first().id}>`, `#${(message.mentions.members.first())?.nickname ?? (message.mentions.members.first())?.user?.username}`)}`.slice(0, 200);
            }
            sendMessageYT(msg)
            message.react('✅');
        }
    }
})

client.login("<BOTTOKEN>")
const credentials = {
    SAPISID: "",
    APISID: "",
    HSID: "",
    SID: "",
    SSID: "",
};
const { Masterchat } = require("./masterchat/lib/masterchat.js");
var msgList = [];
var mc;
(async () => {
    mc = await Masterchat.init("<VIDEOID>", { credentials: credentials });
})();
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
const fs = require('fs')
var spamThing = new Map();
function dhm(t) {
    var cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(t / cd),
        h = Math.floor((t - d * cd) / ch),
        m = Math.round((t - d * cd - h * ch) / 60000),
        pad = function (n) { return n < 10 ? '0' + n : n; };
    if (m === 60) {
        h++;
        m = 0;
    }
    if (h === 24) {
        d++;
        h = 0;
    }
    return `${d} days, ${pad(h)} hours and ${pad(m)} minutes`;
}
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
const webhookClient = new WebhookClient({ url: '<WEBHOOKURL>' });
function getChat(continuation, videoID = null) {
    fetch("https://www.youtube.com/youtubei/v1/live_chat/get_live_chat?key=<APIKEY>&prettyPrint=false", {
        "headers": {
            "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "SAPISIDHASH <authorization>",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Chromium\";v=\"115\", \"Google Chrome\";v=\"115\"",
    "sec-ch-ua-arch": "\"x86\"",
    "sec-ch-ua-bitness": "\"64\"",
    "sec-ch-ua-full-version": "\"115.0.5790.171\"",
    "sec-ch-ua-full-version-list": "\"Not/A)Brand\";v=\"99.0.0.0\", \"Chromium\";v=\"115.0.5790.171\", \"Google Chrome\";v=\"115.0.5790.171\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": "\"\"",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-ch-ua-platform-version": "\"15.0.0\"",
    "sec-ch-ua-wow64": "?0",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "same-origin",
    "sec-fetch-site": "same-origin",
    "x-goog-authuser": "<x-goog-authuser>",
    "x-goog-pageid": "<x-goog-pageid>",
    "x-goog-visitor-id": "<x-goog-visitor-id>",
    "x-origin": "https://www.youtube.com",
    "x-youtube-bootstrap-logged-in": "true",
    "x-youtube-client-name": "1",
    "x-youtube-client-version": "2.20230817.02.00",
    "cookie": "<COOKIE>",
    "Referer": "<REFERER>",
    "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": JSON.stringify({
            "context": {
                "client": {
                    "hl": "en",
                    "gl": "FI",
                    "remoteHost": "<remoteHost>",
                    "deviceMake": "",
                    "deviceModel": "",
                    "visitorData": "<visitorData>",
                    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36,gzip(gfe)",
                    "clientName": "WEB",
                    "clientVersion": "<clientVersion>",
                    "osName": "Windows",
                    "osVersion": "10.0",
                    "originalUrl": "<originalUrl>",
                    "platform": "DESKTOP",
                    "clientFormFactor": "UNKNOWN_FORM_FACTOR",
                    "configInfo": {
                        "appInstallData": "<appInstallData>"
                    },
                    "userInterfaceTheme": "USER_INTERFACE_THEME_DARK",
                    "timeZone": "Europe/Helsinki",
                    "browserName": "Chrome",
                    "browserVersion": "114.0.0.0",
                    "acceptHeader": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                    "deviceExperimentId": "<deviceExperimentId>",
                    "screenWidthPoints": 400,
                    "screenHeightPoints": 550,
                    "screenPixelDensity": 1,
                    "screenDensityFloat": 1,
                    "utcOffsetMinutes": 180,
                    "connectionType": "CONN_CELLULAR_4G",
                    "memoryTotalKbytes": "8000000",
                    "mainAppWebInfo": {
                        "graftUrl": "<graftUrl>",
                        "webDisplayMode": "WEB_DISPLAY_MODE_BROWSER",
                        "isWebNativeShareAvailable": true
                    }
                },
                "user": {
                    "lockedSafetyMode": false
                },
                "request": {
                    "useSsl": true,
                    "internalExperimentFlags": [],
                    "consistencyTokenJars": [
                        {
                            "encryptedTokenJarContents": "<encryptedTokenJarContents>",
                            "expirationSeconds": "600"
                        }
                    ]
                },
                "adSignalsInfo": {
                    "params": []
                }
            },
            "continuation": continuation,
            "webClientInfo": {
                "isDocumentHidden": false
            },
            "isInvalidationTimeoutRequest": "true"
        }),
        "method": "POST"
    }).then(res => res.json()).then(data => {
        try {
            if (!data?.continuationContents) {
                console.log("wawa");
                return setTimeout(() => { getChat(continuation) }, 1000);
            } else {
                if (data?.continuationContents?.liveChatContinuation?.continuations?.[0]?.reloadContinuationData?.continuation) {
                    fs.writeFileSync("cont.json", JSON.stringify({ continuation: data?.continuationContents?.liveChatContinuation?.continuations?.[0]?.reloadContinuationData?.continuation }, null, 2))
                    return setTimeout(() => { getChat(data?.continuationContents?.liveChatContinuation?.continuations?.[0]?.reloadContinuationData?.continuation) }, 1000);
                }
                for (let i of data?.continuationContents?.liveChatContinuation?.actions || []) {
                    if (i?.addChatItemAction?.item?.liveChatModerationMessageRenderer?.message?.runs) {
                        var mdx = []
                        for (let o of i.addChatItemAction.item.liveChatModerationMessageRenderer.message.runs) {
                            mdx.push(o.text)
                        }
                        fs.appendFileSync("./bans.txt", `${new Date().toISOString()}: ${mdx.join(" ")}\n`)
                        console.log("ban:", `${new Date().toISOString()}: ${mdx.join(" ")}`);

                        sendMessageYT(`${mdx.join(" ")}`);
                        client.channels.cache.get("<MODCHANNELID>").send(`<t:${Math.floor(Date.now() / 1000)}:R>: ${mdx.join(" ").replace(/@/g, "#")}`);
                    } else if (i?.markChatItemsByAuthorAsDeletedAction?.deletedStateMessage?.runs) {
                        var mdx = []
                        for (let o of i.markChatItemsByAuthorAsDeletedAction?.deletedStateMessage?.runs) {
                            mdx.push(o.text)
                        }
                        mdx.push(` (msg from ${i.markChatItemsByAuthorAsDeletedAction.externalChannelId})`)
                        fs.appendFileSync("./deletedmsgs.txt", `${new Date().toISOString()}: ${mdx.join(" ")}\n`)
                        console.log("del msg:", `${new Date().toISOString()}: ${mdx.join(" ")}`);

                        sendMessageYT(`${mdx.join(" ")}`);
                        client.channels.cache.get("<MODCHANNELID>").send(`<t:${Math.floor(Date.now() / 1000)}:R>: ${mdx.join(" ").replace(/@/g, "#")}`);
                    } else if (i?.addChatItemAction?.item?.liveChatTextMessageRenderer?.message?.runs) {

                        if (!spamThing.get(i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId)) spamThing.set(i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId, []);
                        var spamming = spamThing.get(i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId);
                        spamming.push({
                            msgId: i.addChatItemAction.item.liveChatTextMessageRenderer.id,
                            now: Date.now()
                        })
                        spamming = spamming.filter((a) => (Date.now() - a.now) < 10000);
                        spamThing.set(i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId, spamming);
                        if (spamming.length >= 6 && i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId != "<BOTCHANNELID>") {
                            for (let sfdijsfdji of spamming) {
                                try {
                                    mc.remove(sfdijsfdji.msgId)
                                } catch (e) {
                                    console.error(e);
                                }
                            }
                            var lastTime = spamThing.get("last_" + i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId) ?? 0
                            if ((Date.now() - lastTime) > 10000) {
                                sendMessageYT(`@${i?.addChatItemAction?.item?.liveChatTextMessageRenderer?.authorName?.simpleText} chill out! You've sent ${spamming.length} messages in the last 10 seconds!`);
                                spamThing.set("last_" + i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId, Date.now());
                            }

                        } else {
                            var mdx = []
                            for (let o of i?.addChatItemAction?.item?.liveChatTextMessageRenderer?.message?.runs) {
                                mdx.push(o.text)
                            }
                            const msgsss = mdx.join(" ").replace(/@/g, "#").replace("http://", "").replace("https://", "");
                            webhookClient.send({
                                content: `${msgsss == "" ? "***(empty message)***" : msgsss} [(channel)](<https://www.youtube.com/channel/${i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId}>) [(stream)](<https://www.youtube.com/watch?v=${videoID}>)`,
                                username: i?.addChatItemAction?.item?.liveChatTextMessageRenderer?.authorName?.simpleText.replace(/@/g, "#"),
                                avatarURL: i?.addChatItemAction?.item?.liveChatTextMessageRenderer?.authorPhoto?.thumbnails?.[1]?.url.replace("s64", "s200"),
                            });
                            msgList.push({
                                when: Date.now(),
                                msgID: i.addChatItemAction.item.liveChatTextMessageRenderer.id,
                                content: `${msgsss == "" ? "***(empty message)***" : msgsss}`,
                                username: i?.addChatItemAction?.item?.liveChatTextMessageRenderer?.authorName?.simpleText.replace(/@/g, "#"),
                                avatarURL: i?.addChatItemAction?.item?.liveChatTextMessageRenderer?.authorPhoto?.thumbnails?.[1]?.url.replace("s64", "s200"),
                            })
                            if (msgList.length > 20) {
                                for (let dfdgf = 0; dfdgf < (msgList.length - 20); dfdgf++) {
                                    msgList.shift()
                                }
                            };

                            const message = mdx.join(" ");
                            let getUser = points.findIndex((a) => a.channel_id == i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId);
                            if (points[getUser]?.combinedwith != null) getUser = points.findIndex((a) => a.channel_id == points[getUser].combinedwith);
                            if (getUser == -1) {
                                points.push({
                                    channel_id: i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId,
                                    name: i?.addChatItemAction?.item?.liveChatTextMessageRenderer?.authorName?.simpleText,
                                    avatar: i?.addChatItemAction?.item?.liveChatTextMessageRenderer?.authorPhoto.thumbnails?.[0]?.url?.replace("s32", "s800"),
                                    points: 0,
                                    getPoint: true,
                                    time: 0,
                                    messages: 0,
                                    lastMessage: Date.now(),
                                    onSystem: Date.now()
                                })
                                getUser = points.findIndex((a) => a.channel_id == i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId);
                            }
                            const cidId = i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId;
                            const asd = [...points].sort((a, b) => (b?.points??0) - (a?.points??0))
                            const findOriginal = asd[asd.findIndex((a) => a?.name?.replace(/ /g, "")?.toLowerCase() == i?.addChatItemAction?.item?.liveChatTextMessageRenderer?.authorName?.simpleText?.replace(/ /g, "")?.toLowerCase())]
                            let getUser2Original = points.findIndex((a) => a.channel_id == i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId);
                            console.log(findOriginal)
                            if (points[getUser].channel_id == cidId && findOriginal?.channel_id != i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId && findOriginal?.channel_id != null) {

                                sendMessageYT(`@${points[getUser].name} u fake? ${findOriginal.name} with ${findOriginal.points} points (u have ${points[getUser].points}) is real. we wrong? notify.`)
                                mc.hide(i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId)

                            } else {
                                const nextCount = (counts.count) + 1;
                                if (message.length >= 1) {

                                    if (parseInt(message) == nextCount) {
                                        counts.count += 1
                                        counts.counters.push({
                                            channel_id: i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId,
                                            name: i?.addChatItemAction?.item?.liveChatTextMessageRenderer?.authorName?.simpleText,
                                            avatar: i?.addChatItemAction?.item?.liveChatTextMessageRenderer?.authorPhoto.thumbnails?.[0]?.url?.replace("s32", "s800"),
                                            lastMessage: Date.now(),
                                            count: counts.count
                                        })
                                    } else if (isNaN(message) == false) {
                                        try {
                                            mc.remove(i.addChatItemAction.item.liveChatTextMessageRenderer.id)
                                        } catch (e) {
                                            console.error(e);
                                        }
                                    }
                                }
                                if (!points[getUser]?.lastXP) points[getUser].lastXP = 0;
                                var xpTime = points[getUser].channel_id == "<limit someones points gain CHANNELID>" ? 60000 * 5 : 60000
                                if ((Date.now() - points[getUser]?.lastXP) > xpTime) {
                                    if (!points[getUser]?.xp) points[getUser].xp = 0;
                                    if (!points[getUser]?.level) points[getUser].level = 0;
                                    if (doubleXP == true) {
                                        points[getUser].xp += getRandomArbitrary(20, 50);
                                    } else {
                                        points[getUser].xp += getRandomArbitrary(10, 25);
                                    }


                                    let nxtLvl = 1500 * (points[getUser].level + 1)
                                    let nxtLvl2 = 1500 * (points[getUser].level + 2)
                                    while (points[getUser]?.xp >= nxtLvl) {
                                        if (points[getUser]?.xp >= nxtLvl) {

                                            points[getUser].level += 1
                                            if (points[getUser]?.xp <= nxtLvl2) sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} with ${points[getUser]?.xp.toLocaleString("en-US")} xp, you just reached level ${points[getUser]?.level.toLocaleString("en-US")}! Get to ${nxtLvl2.toLocaleString("en-US")} xp to reach level ${((points[getUser]?.level) + 1).toLocaleString("en-US")}!`)
                                            nxtLvl = 1500 * (points[getUser].level + 1)
                                            nxtLvl2 = 1500 * (points[getUser].level + 2)
                                        }
                                    }


                                    points[getUser].lastXP = Date.now();
                                }

                                points[getUser].messages += 1
                                points[getUser].getPoint = true
                                if ((Date.now() - (points[getUser]?.lastMessage ?? Date.now())) > 86400 * 1000) {
                                    sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} welcome back! you were away for ${dhm((Date.now() - (points[getUser]?.lastMessage ?? Date.now())))}.`)
                                }
                                points[getUser].lastMessage = Date.now()
                                if (getUser == getUser2Original) points[getUser].name = i?.addChatItemAction?.item?.liveChatTextMessageRenderer?.authorName?.simpleText
                                if (getUser == getUser2Original) points[getUser].avatar = i?.addChatItemAction?.item?.liveChatTextMessageRenderer?.authorPhoto.thumbnails?.[0]?.url?.replace("s32", "s800")
                                if (message.toLocaleLowerCase().startsWith("!info")) {

                                    let getPoints = points[points.findIndex((a) => a.channel_id == points[getUser].channel_id)];

                                    let getRank = points.slice()/*.filter((a) => (Date.now() - a.lastMessage) < 30 * 86400 * 1000)*/.filter((a) => a.channel_id != "<BOTCHANNELID>").sort((a, b) => b.points - a.points).findIndex((a) => a.channel_id == points[getUser].channel_id)
                                    if (!getPoints?.points) {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have 0 points, 0 hours, 0 messages, 0 xp and 0 levels. Welcome to the stream!`)
                                    } else {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have ${getPoints.points.toLocaleString("en-US")} points (rank: ${getRank + 1}), ${(getPoints.time * (12 * 5) / 3600).toFixed(2)} hours, ${getPoints.messages.toLocaleString("en-US")} messages, ${getPoints.xp.toLocaleString("en-US")} xp and ${getPoints.level.toLocaleString("en-US")} levels.`)
                                    }
                                } else if (message.toLocaleLowerCase().startsWith("!combine")) {
                                    if (points[getUser].channel_id != cidId) {
                                        sendMessageYT(`@${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you already have been combined with ${points[getUser].name}!`)
                                    }
                                    else if (points[getUser]?.onSystem != null) {
                                        sendMessageYT(`@${points[getUser].name} too new.`)
                                    } else if (points[getUser]?.combinedwith != null) {
                                        sendMessageYT(`@${points[getUser].name} this account is merged.`)
                                    } else if (points[getUser]?.combined != null) {
                                        sendMessageYT(`@${points[getUser].name} currently max mergings is 1. error 3.`)
                                    } else {
                                        const randId = makeid(6).toLowerCase();
                                        combining.set("need_" + randId, cidId);
                                        sendMessageYT(`@${points[getUser].name} type !accept ${randId} on your main account`)
                                    }

                                } else if (message.toLocaleLowerCase().startsWith("!accept")) {
                                    if (points[getUser].channel_id != cidId) {
                                        sendMessageYT(`@${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you already have been combined with ${points[getUser].name}!`)
                                    }
                                    else if (points[getUser]?.onSystem != null) {
                                        sendMessageYT(`@${points[getUser].name} too new.`)
                                    } else if (points[getUser]?.combinedwith != null) {
                                        sendMessageYT(`@${points[getUser].name} this account is merged.`)
                                    } else if (points[getUser]?.combined != null) {
                                        sendMessageYT(`@${points[getUser].name} currently max mergings is 1. error 3.`)
                                    } else {

                                        const dcas = combining.get("need_" + message.toLocaleLowerCase().split("!accept ")[1]);
                                        if (!dcas) {
                                            sendMessageYT(`@${points[getUser].name} id doesnt exist.`)
                                        } else if (dcas == cidId) {
                                            sendMessageYT(`@${points[getUser].name} cant merge with yourself. good try though haha.`)
                                        } else {
                                            const randId = makeid(3).toLowerCase();
                                            combining.set("done_" + randId, message.toLocaleLowerCase().split("!accept ")[1] + "$" + randId + "$" + cidId);
                                            const getpro = points.findIndex((a) => a.channel_id == dcas);
                                            sendMessageYT(`@${points[getpro].name} (@${points[getUser].name}) now do !done ${randId} and the process will startt.`)
                                        }
                                    }

                                } else if (message.toLocaleLowerCase().startsWith("!done")) {
                                    if (points[getUser].channel_id != cidId) {
                                        sendMessageYT(`@${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you already have been combined with ${points[getUser].name}!`)
                                    }
                                    else if (points[getUser]?.onSystem != null) {
                                        sendMessageYT(`@${points[getUser].name} too new.`)
                                    } else if (points[getUser]?.combinedwith != null) {
                                        sendMessageYT(`@${points[getUser].name} this account is merged.`)
                                    } else if (points[getUser]?.combined != null) {
                                        sendMessageYT(`@${points[getUser].name} currently max mergings is 1. error 3.`)
                                    } else {

                                        const dcas = combining.get("done_" + message.toLocaleLowerCase().split("!done ")[1]);
                                        if (!dcas) {
                                            sendMessageYT(`@${points[getUser].name} the id doesnt exist.`)
                                        } else {
                                            const getoriginalchannel = combining.get("need_" + dcas.split("$")[0])
                                            const getmain = dcas.split("$")[2]
                                            if (getoriginalchannel == cidId) {
                                                const getmain2 = points.findIndex((a) => a.channel_id == getmain);
                                                points[getmain2].combined = [cidId];
                                                points[getUser].combinedwith = getmain
                                                combining.delete("done_" + message.toLocaleLowerCase().split("!done ")[1])
                                                combining.delete("need_" + dcas.split("$")[2])
                                                sendMessageYT(`@${points[getmain2].name} okay your alt account @${points[getUser].name} is going to be merged to you.`)
                                            } else {
                                                sendMessageYT(`@${points[getUser].name} not you or the id doesnt exist.`)
                                            }
                                        }
                                    }

                                } else if (message.toLocaleLowerCase().startsWith("!addpoints") && i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId == "<OWNERCHANNELID>") {

                                    sendMessageYT(`giving users who chatted last ${message.toLocaleLowerCase().split("!addpoints ")[1].split(" ")[0] ?? 0}ms ${message.toLocaleLowerCase().split("!addpoints ")[1].split(" ")[1] ?? 0} points!`);

                                    var coufnt = 0;

                                    for (let sdffdi = 0; sdffdi < points.length; sdffdi++) {
                                        if ((Date.now() - points[sdffdi].lastMessage) <= parseFloat(message.toLocaleLowerCase().split("!addpoints ")[1].split(" ")[0])) {
                                            coufnt++;
                                            points[sdffdi].points += parseInt(message.toLocaleLowerCase().split("!addpoints ")[1].split(" ")[1] ?? 0);
                                        }
                                    }
                                    sendMessageYT(`${coufnt} users got ${message.toLocaleLowerCase().split("!addpoints ")[1].split(" ")[1] ?? 0} points!`);


                                } else if (message.toLocaleLowerCase().startsWith("!ban") && i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId == "<OWNERCHANNELID>") {

                                    const findChannel = points.findIndex((a) => a.channel_id == message.split("!ban ")[1])
                                    if (findChannel != -1) {
                                        points[findChannel].ban = true;
                                        mc.hide(points[findChannel].channel_id)
                                        sendMessageYT("ok @Nia")
                                    }


                                } else if (message.toLocaleLowerCase().startsWith("!unban") && i.addChatItemAction.item.liveChatTextMessageRenderer.authorExternalChannelId == "<OWNERCHANNELID>") {

                                    const findChannel = points.findIndex((a) => a.channel_id == message.split("!unban ")[1])
                                    if (findChannel != -1) {
                                        points[findChannel].ban = false;
                                        mc.unhide(points[findChannel].channel_id)
                                        sendMessageYT("ok @Nia")
                                    }


                                } else if (message.toLocaleLowerCase().startsWith("!hours")) {
                                    let getPoints = points[points.findIndex((a) => a.channel_id == points[getUser].channel_id)];
                                    if (!getPoints?.points) {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have no hours. Welcome to the stream!`)
                                    } else {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have ${(getPoints.time * (12 * 5) / 3600).toFixed(2)} hours.`)
                                    }
                                } else if (message.toLocaleLowerCase().startsWith("!messages")) {
                                    let getPoints = points[points.findIndex((a) => a.channel_id == points[getUser].channel_id)];
                                    if (!getPoints?.messages) {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have no messages. Welcome to the stream!`)
                                    } else {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have ${getPoints.messages.toLocaleString("en-US")} messages.`)
                                    }
                                } else if (message.toLocaleLowerCase().startsWith("!xp")) {
                                    let getPoints = points[points.findIndex((a) => a.channel_id == points[getUser].channel_id)];
                                    if (!getPoints?.xp) {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have no xp. Welcome to the stream!`)
                                    } else {
                                        const nxtLvl = 1500 * (points[getUser].level + 1)//20 * (Math.pow(2, points[getUser].level) - 1);
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have ${getPoints.xp.toLocaleString("en-US")} xp. To reach level ${(getPoints.level + 1).toLocaleString("en-US")}, you have to reach ${nxtLvl.toLocaleString("en-US")} xp.`)
                                    }
                                } else if (message.toLocaleLowerCase().startsWith("!levels")) {
                                    let getPoints = points[points.findIndex((a) => a.channel_id == points[getUser].channel_id)];
                                    if (!getPoints?.level) {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have no levels. Welcome to the stream!`)
                                    } else {
                                        const nxtLvl = 1500 * (points[getUser].level + 1)//20 * (Math.pow(2, points[getUser].level) - 1);
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have ${getPoints.level.toLocaleString("en-US")} levels. To reach level ${(getPoints.level + 1).toLocaleString("en-US")}, you have to reach ${nxtLvl.toLocaleString("en-US")} xp.`)
                                    }
                                } else if (message.toLocaleLowerCase().startsWith("!points")) {
                                    let getPoints = points[points.findIndex((a) => a.channel_id == points[getUser].channel_id)];
                                    if (!getPoints?.xp) {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have no points. Welcome to the stream!`)
                                    } else {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have ${getPoints.points.toLocaleString("en-US")} points.`)
                                    }
                                } else if (message.toLocaleLowerCase().startsWith("!rank")) {
                                    //let getPoints = points[ points.findIndex((a) => a.channel_id == points[getUser].channel_id) ];
                                    let getRank = points.slice().sort((a, b) => b.points - a.points).findIndex((a) => a.channel_id == points[getUser].channel_id)
                                    if (getRank == -1) {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you dont have a rank. Get some points and then you can try again.`)
                                    } else {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you are at the rank ${getRank + 1}.`)
                                    }
                                } else if (message.toLocaleLowerCase().startsWith("!daily")) {
                                    let getPoints = Daily[Daily.findIndex((a) => a.id == points[getUser].channel_id)];
                                    if (getPoints == -1) {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you haven't gotten any points in the last 24 hours.`)
                                    } else {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have gotten ${getPoints?.points} points in the last 24 hours.`)
                                    }
                                } else if (message.toLocaleLowerCase().startsWith("!weekly")) {
                                    let getPoints = Weekly[Weekly.findIndex((a) => a.id == points[getUser].channel_id)];
                                    if (getPoints == -1) {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you haven't gotten any points in the last 7 days.`)
                                    } else {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have gotten ${getPoints?.points} points in the last 7 days.`)
                                    }
                                } else if (message.toLocaleLowerCase().startsWith("!monthly")) {
                                    let getPoints = Monthly[Monthly.findIndex((a) => a.id == points[getUser].channel_id)];
                                    if (getPoints == -1) {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you haven't gotten any points in the last 30 days.`)
                                    } else {
                                        sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you have gotten ${getPoints?.points} points in the last 30 days.`)
                                    }
                                } else if ((message.toLocaleLowerCase().startsWith("!bye") && (message.length == 3 || message.includes(" "))) || ((message.toLocaleLowerCase().startsWith("bye") || message.toLocaleLowerCase().startsWith("cya")) && (message.length == 3 || message.includes(" ") == false)) || message.toLocaleLowerCase().startsWith("!cya")) {
                                    sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} is leaving the chat!`)
                                } else if ((message.toLocaleLowerCase().startsWith("!afk") && (message.length == 3 || message.includes(" "))) || ((message.startsWith("afk")) && (message.length == 3 || message.includes(" ") == false))) {
                                    sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} will be away for a while!`)
                                } else if ((message.toLocaleLowerCase().startsWith("!brb") && (message.length == 3 || message.includes(" "))) || ((message.startsWith("brb")) && (message.length == 3 || message.includes(" ") == false))) {
                                    sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} will be right back!`)
                                } else if ((message.toLocaleLowerCase().startsWith("!back") && (message.length == 4 || message.includes(" "))) || ((message.startsWith("back")) && (message.length == 4 || message.includes(" ") == false))) {
                                    sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} is back!`)
                                } else if ((message.toLocaleLowerCase().startsWith("!hi") && (message.length == 2 || message.includes(" "))) || message.toLocaleLowerCase().startsWith("!hello") || (((message.toLocaleLowerCase().startsWith("hi") && message.length == 2) || (message.toLocaleLowerCase().startsWith("hello") && message.length == 5)) && message.includes(" ") == false)) {
                                    sendMessageYT(`Hello @${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""}!`)
                                } else if (message.toLocaleLowerCase().split(" ")[0].startsWith("!")) {
                                    if (message.toLocaleLowerCase().split(" ")[0].split("!")[1].length > 0) {
                                        let getPoints = points[points.findIndex((a) => a.channel_id == points[getUser].channel_id)];
                                        if (!getPoints || getPoints.points < 2) {
                                            sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} you need to reach ${2} points to vote!`)
                                        } else {

                                            const vote = message.toLocaleLowerCase().split(" ")[0].split("!")[1];
                                            const hell = votes.findIndex((a) => a.value == vote);
                                            let getVoteData = votes[hell];
                                            if (!getVoteData) {
                                                votes.push({
                                                    value: vote,
                                                    count: 1
                                                })
                                                sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} has voted for ${vote}. ${vote} has been voted ${1} times.`)
                                            } else {
                                                votes[hell].count += 1;
                                                sendMessageYT(`@${points[getUser].name} ${points[getUser].channel_id != cidId ? `(@${points[getUser2Original].name})` : ""} has voted for ${vote}. ${vote} has been voted ${votes[hell].count} times.`)
                                            }
                                        }
                                    }
                                }
                            }


                        }


                    }
                }
                console.log("succ msg")
                fs.writeFileSync("cont.json", JSON.stringify({ continuation: data.continuationContents.liveChatContinuation.continuations[0].invalidationContinuationData.continuation }, null, 2))
                return setTimeout(() => { getChat(data.continuationContents.liveChatContinuation.continuations[0].invalidationContinuationData.continuation) }, 1000);
            }
        } catch (h) {
            console.error(h, data)
            fs.writeFileSync("error.json", JSON.stringify(data, null, 2))
            return setTimeout(() => { getChat(continuation) }, 1000);
        }
    }).catch(e => {
        console.error(e);
        return setTimeout(() => { getChat(continuation) }, 1000);
    });
}
function getBannedUsers() {
    /fetch("https://studio.youtube.com/youtubei/v1/creator/get_creator_channels?alt=json&key=<apikey>", {
        "headers": {
            hheader shit here
          },
          "body": you know just find this request in the network tab of yt studio, copy it as node fetch and replace the shit between / and /,
          "method": "POST"
    })/.then(res => res.json()).then(async data => {
        if (data?.channels?.[0]?.settings?.comments?.hiddenUsers != null) {
            for await (let i of data.channels[0].settings.comments.hiddenUsers) {
                const asd = [...points].sort((a, b) => (b?.points??0) - (a?.points??0))
                const findOriginal = asd[asd.findIndex((a) => a?.name?.replace(/ /g, "")?.toLowerCase() == i?.displayName?.replace(/ /g, "")?.toLowerCase())]
                console.log({ findOriginal })
                if (findOriginal?.channel_id == i.externalChannelId && findOriginal?.channel_id != null) {
                    if ((findOriginal.points > 1000 || findOriginal.combinedwith != null || (findOriginal.combined != null&&(findOriginal?.combined??[]).length > 0)) && findOriginal.ban != true) mc.unhide(i.externalChannelId)
                }
            }
        } else {
            console.log(data)
        }
    }).catch(console.error);
}
setTimeout(() => {
    getBannedUsers()
}, 10000);
setInterval(getBannedUsers, 60000);
async function updateUsers(idString) {
    const data = await fetch('http://localhost:4204/channels/' + idString, {
        timeout: 5000
    }).then(res => res.json()).catch(console.error); // ur yt api
    try {
        for (let i of data.items) {
            const findIDX = points.findIndex((a) => a.channel_id == i.id)
            if (findIDX != -1) {
                points[findIDX].name = i.snippet.title
                points[findIDX].avatar = i.snippet.thumbnails.default.url.replace("s88", "s200")
            }
        }
    } catch (e) {
        console.error(e)
    }
    return "ok";
}
async function updating() {
    const getChunked = chunk(points);
    var idList = [];
    for (let i of getChunked) {
        var a = [];
        for (let j of i) {
            a.push(j.channel_id);
        }
        idList.push(a.join(","));
    }
    for await (let i of idList) {
        console.log(await updateUsers(i));
    }
    console.log("updating done");
}
updating();
setInterval(async () => {
    updating()
}, 3600 * 1000)
function chunk(inputArray, perChunk = 50) {
    const result = inputArray.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / perChunk)

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
    }, [])
    return result;
}
const express = require('express');
const app = express();
app.listen(5632, () => console.log("http://localhost:5632"));
app.use(require('cors')('*'))
app.get("/list", async (req, res) => {
    return res.send(points);
});

app.get("/votelist", async (req, res) => {
    return res.send(votes);
});
app.get("/counters", async (req, res) => {
    return res.send({
        count: counts.count,
        counters: counts.counters.filter((a) => a.count >= ((counts.count) - 5))
    });
});
app.get("/addPoints/:channelid/:points", async (req, res) => {
    let getUser = points.findIndex((a) => a.channel_id == req.params.channelid);
    if (getUser == -1) {
        points.push({
            channel_id: req.params.channelid,
            name: "",
            avatar: "",
            points: parseInt(req.params.points),
            time: parseInt(req.params.points) * 5,
            messages: 0,
            lastMessage: Date.now()
        })
        getUser = points.findIndex((a) => a.channel_id == req.params.channelid);
    } else {
        points[getUser].points = parseInt(req.params.points)
        points[getUser].time = (parseInt(req.params.points) * 5)
    }
    return res.send(points[getUser]);
});
app.get("/combine/:channelidfrom/:channelidto", async (req, res) => {
    let getUser = points.findIndex((a) => a.channel_id == req.params.channelidto);
    let getUserFrom = points.findIndex((a) => a.channel_id == req.params.channelidfrom);
    if (points[getUser]?.combined == null) points[getUser].combined = [];
    if (points[getUser].combined.indexOf(req.params.channelidfrom) == -1) points[getUser].combined.push(req.params.channelidfrom);
    points[getUserFrom].combinedwith = req.params.channelidto
    return res.send({
        channelidto: points[getUser],
        channelidfrom: points[getUserFrom]
    });
});
app.get("/addVotes/:value/:count", async (req, res) => {
    let getUser = votes.findIndex((a) => a.value == req.params.value);
    if (getUser == -1) {
    } else {
        votes[getUser].count = parseInt(req.params.count)
    }
    return res.send(votes[getUser]);
});
app.get("/chat", (req, res) => {
    return res.send(msgList);
})
app.get("/viewers", async (req, res) => {
    try {
        var activeUsers = 0;
        for (let i of points) {
            if ((Date.now() - i.lastMessage) <= 1000 * 60 * 5) {
                activeUsers++;
            }
        }
        return res.send({ activeUsers });
    } catch (e) {
        console.error(e);
        return res.send(e);
    }
})