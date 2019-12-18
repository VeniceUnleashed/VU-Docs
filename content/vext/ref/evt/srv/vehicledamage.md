---
title: Vehicle:Damage (Server Event)
---
## Description

## Parameters

| Type                                  | Name    | Description |
| ------------------------------------- | ------- | ----------- |
| [Entity](/vext/ref/cls/shr/entity) | vehicle |             |
| float                                 | damage  |             |

## Usage Example

``` lua
local function OnVehicleDamage(vehicle, damage)
    -- Add your logic here
end

Events:Subscribe('Vehicle:Damage', OnVehicleDamage)
```
