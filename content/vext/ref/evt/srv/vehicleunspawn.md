---
title: Vehicle:Unspawn (Server Event)
---
## Description

## Parameters

| Type                                  | Name    | Description |
| ------------------------------------- | ------- | ----------- |
| [Entity](/vext/ref/cls/shr/entity) | vehicle |             |

## Usage Example

``` lua
local function OnVehicleDisabled(vehicle)
    -- Add your logic here
end

Events:Subscribe('Vehicle:Disabled', OnVehicleDisabled)
```
