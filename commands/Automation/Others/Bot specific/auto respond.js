module.exports = {
name: "$alwaysExecute",
code: `Hello there! My Prefix on this server is \`$getGuildVar[prefix]\`.
$cooldown[2s;]
$onlyIf[$hasPermsInChannel[$channelID;$clientID;viewchannel;sendmessages]==true;]
$onlyIf[$stringStartsWith[$message;<@$clientID>]==true;]
$onlyIf[$getGuildVar[autopingreply]==on;]
`
}