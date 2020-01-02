---
title: ChatManager (Client Manager)
---
## Description

## Methods

| Type | Name                        | Parameters                                                                                                          |
| ---- | --------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| bool | [SendMessage](#sendmessage) | string **message**                                                                                                  |
| bool | [SendMessage](#sendmessage) | string **message**, [TeamId](/vext/ref/fb/teamid) **team**                                                   |
| bool | [SendMessage](#sendmessage) | string **message**, [TeamId](/vext/ref/fb/teamid) **team**, [SquadId](/vext/ref/fb/squadid) **squad** |

### SendMessage

> bool **SendMessage**(string **message**)

#### Parameters

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| message | string |             |

### SendMessage

> bool **SendMessage**(string **message**, [TeamId](/vext/ref/fb/teamid) **team**)

#### Parameters

| Name    | Type                                 | Description |
| ------- | ------------------------------------ | ----------- |
| message | string                               |             |
| team    | [TeamId](/vext/ref/fb/teamid) |             |

### SendMessage

> bool **SendMessage**(string **message**, [TeamId](/vext/ref/fb/teamid) **team**, [SquadId](/vext/ref/fb/squadid) **squad**)

#### Parameters

| Name    | Type                                   | Description |
| ------- | -------------------------------------- | ----------- |
| message | string                                 |             |
| team    | [TeamId](/vext/ref/fb/teamid)   |             |
| squad   | [SquadId](/vext/ref/fb/squadid) |             |
