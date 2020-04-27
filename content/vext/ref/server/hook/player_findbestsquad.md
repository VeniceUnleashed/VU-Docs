---
title: Player:FindBestSquad
---

> **Player:FindBestSquad**(player: [Player](/vext/ref/server/type/player)): [SquadId](/vext/ref/fb/squadid)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player**{{< hook-ro >}} | [Player](/vext/ref/server/type/player) |  |

## Returns

| Type | Description |
| ---- | ----------- |
| **[SquadId](/vext/ref/fb/squadid)** |  |

## Example

```lua
Hooks:Install('Player:FindBestSquad', 1, function(hook, player)
    -- Do stuff here.
end)
```
