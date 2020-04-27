---
title: Player:EnteredCapturePoint
---

> **Player:EnteredCapturePoint**(player: [Player](/vext/ref/server/type/player), capturePoint: [Entity](/vext/ref/shared/type/entity))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **player** | [Player](/vext/ref/server/type/player) |  |
| **capturePoint** | [Entity](/vext/ref/shared/type/entity) |  |

## Example

```lua
Events:Subscribe('Player:EnteredCapturePoint', function(player, capturePoint)
    -- Do stuff here.
end)
```
