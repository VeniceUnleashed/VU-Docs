---
title: VoipChannel:PlayerLeft
---

> **VoipChannel:PlayerLeft**(channel: [VoipChannel](/vext/ref/client/type/voipchannel), player: [Player](/vext/ref/client/type/player))

A player has left a VoIP channel they were previously in.

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **channel** | [VoipChannel](/vext/ref/client/type/voipchannel) |  |
| **player** | [Player](/vext/ref/client/type/player) |  |

## Example

```lua
Events:Subscribe('VoipChannel:PlayerLeft', function(channel, player)
    -- Do stuff here.
end)
```
