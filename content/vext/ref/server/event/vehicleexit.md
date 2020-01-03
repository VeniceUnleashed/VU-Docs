---
title: Vehicle:Exit
---
## Description

## Parameters

| Type                                  | Name    | Description |
| ------------------------------------- | ------- | ----------- |
| [Entity](/vext/ref/shared/class/entity) | vehicle |             |
| [Player](/vext/ref/server/class/player) | player  |             |

## Usage Example

``` lua
local function OnVehicleExit(vehicle, player)
    -- Add your logic here
end

Events:Subscribe('Vehicle:Exit', OnVehicleExit)
```
