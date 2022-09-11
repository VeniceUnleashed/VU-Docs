---
title: Player:Score
---

> **Player:Score**(player: [Player](/vext/ref/server/type/player), scoringTypeData: [DataContainer](/vext/ref/shared/type/datacontainer), score: int)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **scoringTypeData** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **score** | int |  |

## Example

```lua
Events:Subscribe('Player:Score', function(player, scoringTypeData, score)
    -- Do stuff here.
end)
```
