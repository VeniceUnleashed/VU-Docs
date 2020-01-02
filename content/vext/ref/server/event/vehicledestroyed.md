---
title: Vehicle:Destroyed (Server Event)
---
## Description

## Parameters

| Type                                  | Name          | Description |
| ------------------------------------- | ------------- | ----------- |
| [Entity](/vext/ref/shared/class/entity) | vehicle       |             |
| int                                   | vehiclePoints |             |
| [TeamId](/vext/ref/fb/teamid)  | hotTeam       |             |

## Usage Example

``` lua
local function OnVehicleDestroyed(vehicle, vehiclePoints, hotTeam)
    -- Add your logic here
end

Events:Subscribe('Vehicle:Destroyed', OnVehicleDestroyed)
```
