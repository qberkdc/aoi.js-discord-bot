module.exports = [{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:Build Info}{field:General:
* **Dodo-Bot**#COLON# v$getVar[version]
* **Codename**#COLON# Tower Valley
* **Branch of the build**#COLON# Refresh
* **Revision**#COLON# $getVar[buildRevision]
* **Build number**#COLON# $getVar[buildNumber]:true}
{field:Progress:
* **Status**#COLON# Incomplete
* **Type**#COLON# $getVar[buildType]
:true}}{actionRow:{button:Home:2:statshome_$authorID:false:🏠}}]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==buildinfo;]
`
    },{
    type: "interaction",
    prototype: "button",
    code: `
    $interactionUpdate[{newEmbed:{title:$username[$clientID] stats}{field:**Users**:$allMembersCount:true}{field:**RAM Usage**:$round[$ram]MB:true}{field:**CPU Usage**:$cpu:true}{field:**Ping**:$pingms:true}{field:**Uptime Bot**:$uptime[humanize]:true}{field:**Aoi.js**:\`v$packageVersion\`:true}{field:**Servers**:$guildCount:true}{field:**Node.js**:\`$nodeVersion\`:true}{field:**Dodo-Bot**:\`v$getVar[version]\`:true}{thumbnail:$userAvatar[$clientID]}}{actionRow:{button:Build Info:2:buildinfo_$authorID:false}}]
   

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{newEmbed:{title:Uh, Oh!}{description:You're not the author of this interaction.}{color:Red}}
  {ephemeral}
{interaction}
  ]
  $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==statshome;]
`
    }]