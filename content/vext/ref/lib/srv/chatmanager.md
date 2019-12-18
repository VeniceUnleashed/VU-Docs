---
title: ChatManager (Server Manager)
---
## Description

The server chat manager allows you to send server messages to everyone, team, or squad.

## Methods

| Type | Name                        | Parameters                                                                                                          |
| ---- | --------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| bool | [SendMessage](#sendmessage) | string **message**                                                                                                  |
| bool | [SendMessage](#sendmessage) | string **message**, [TeamId](/vext/ref/cls/fb/teamid) **team**                                                   |
| bool | [SendMessage](#sendmessage) | string **message**, [TeamId](/vext/ref/cls/fb/teamid) **team**, [SquadId](/vext/ref/cls/fb/squadid) **squad** |

### SendMessage

> bool **SendMessage**(string **message**)

Sends a chat message to the entire server.

#### Parameters

| Name    | Type   | Description                       |
| ------- | ------ | --------------------------------- |
| message | string | Message to send to entire server. |

### SendMessage

> bool **SendMessage**(string **message**, [TeamId](/vext/ref/cls/fb/teamid) **team**)

Sends a chat message to a specific team.

#### Parameters

| Name    | Type                                 | Description                  |
| ------- | ------------------------------------ | ---------------------------- |
| message | string                               | Message to send to the team. |
| team    | [TeamId](/vext/ref/cls/fb/teamid) | Team to send the message to. |

### SendMessage

> bool **SendMessage**(string **message**, [TeamId](/vext/ref/cls/fb/teamid) **team**, [SquadId](/vext/ref/cls/fb/squadid) **squad**)

Sends a chat message to a specific squad.

#### Parameters

| Name    | Type                                   | Description                   |
| ------- | -------------------------------------- | ----------------------------- |
| message | string                                 | Message to send to the squad. |
| team    | [TeamId](/vext/ref/cls/fb/teamid)   | Team that the squad is in.    |
| squad   | [SquadId](/vext/ref/cls/fb/squadid) | Squad to send the message to. |

\=== Example ===

``` lua
-- Send a message
local result = ChatManager:SendMessage("hello world!")
if result == false then
    return
end
```
