---
title: Vehicle:Destroyed (Server Event)
---
## Description

## Parameters

| Type                                  | Name          | Description |
| ------------------------------------- | ------------- | ----------- |
| [Entity](/vext/ref/cls/shr/entity) | vehicle       |             |
| int                                   | vehiclePoints |             |
| [TeamId](/vext/ref/cls/fb/teamid)  | hotTeam       |             |

## Usage Example

``` lua
local function OnVehicleDestroyed(vehicle, vehiclePoints, hotTeam)
    -- Add your logic here
end

Events:Subscribe('Vehicle:Destroyed', OnVehicleDestroyed)
```
