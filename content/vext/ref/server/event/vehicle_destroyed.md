---
title: Vehicle:Destroyed
---

> **Vehicle:Destroyed**(vehicle: [Entity](/vext/ref/shared/type/entity), vehiclePoints: int, hotTeam: [TeamId](/vext/ref/fb/teamid))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **vehicle** | [Entity](/vext/ref/shared/type/entity) |  |
| **vehiclePoints** | int |  |
| **hotTeam** | [TeamId](/vext/ref/fb/teamid) |  |

## Example

```lua
Events:Subscribe('Vehicle:Destroyed', function(vehicle, vehiclePoints, hotTeam)
    -- Do stuff here.
end)
```
