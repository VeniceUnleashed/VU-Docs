---
title: ScoringSystem:StatEvent
---

> **ScoringSystem:StatEvent**(player: [Player](/vext/ref/server/type/player), objectPlayer: [Player](/vext/ref/server/type/player) \| nil, statEvent: [StatEvent](/vext/ref/fb/statevent), paramX: [DataContainer](/vext/ref/shared/type/datacontainer) \| nil, paramY: [DataContainer](/vext/ref/shared/type/datacontainer) \| nil, value: float)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **objectPlayer** | [Player](/vext/ref/server/type/player) \| nil |  |
| **statEvent** | [StatEvent](/vext/ref/fb/statevent) |  |
| **paramX** | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |  |
| **paramY** | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |  |
| **value** | float |  |

## Example

```lua
Events:Subscribe('ScoringSystem:StatEvent', function(player, objectPlayer, statEvent, paramX, paramY, value)
    -- Do stuff here.
end)
```
