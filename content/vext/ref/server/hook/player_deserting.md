---
title: Player:Deserting
---

> **Player:Deserting**(player: [Player](/vext/ref/server/type/player), outsideAreaTime: int)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player**{{< hook-ro >}} | [Player](/vext/ref/server/type/player) |  |
| **outsideAreaTime**{{< hook-ro >}} | int |  |

## Example

```lua
Hooks:Install('Player:Deserting', 1, function(hook, player, outsideAreaTime)
    -- Do stuff here.
end)
```
