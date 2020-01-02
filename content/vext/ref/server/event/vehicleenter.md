---
title: Vehicle:Enter (Server Event)
---
## Description

## Parameters

| Type                                  | Name    | Description |
| ------------------------------------- | ------- | ----------- |
| [Entity](/vext/ref/shared/class/entity) | vehicle |             |
| [Player](/vext/ref/server/class/player) | player  |             |

## Usage Example

``` lua
local function OnVehicleEnter(vehicle, player)
    -- Add your logic here
end

Events:Subscribe('Vehicle:Enter', OnVehicleEnter)
```
