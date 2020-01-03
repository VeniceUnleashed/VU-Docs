---
title: ServerSoldier:HealthAction
---
## Description

## Parameters

| Type                                                        | Name    | Description |
| ----------------------------------------------------------- | ------- | ----------- |
| [SoldierEntity](/vext/ref/server/class/soldierentity)         | soldier |             |
| [HealthStateAction](/vext/ref/shared/class/healthstateaction) | action  |             |

## Usage Example

``` lua
local function OnServerSoldierHealthAction(soldier, action)
    -- Add your logic here
end

Events:Subscribe('ServerSoldier:HealthAction', OnServerSoldierHealthAction)
```
