---
title: Vehicle:Disabled
---
## Description

## Parameters

| Type                                  | Name    | Description |
| ------------------------------------- | ------- | ----------- |
| [Entity](/vext/ref/shared/class/entity) | vehicle |             |

## Usage Example

``` lua
local function OnVehicleDisabled(vehicle)
    -- Add your logic here
end

Events:Subscribe('Vehicle:Disabled', OnVehicleDisabled)
```
