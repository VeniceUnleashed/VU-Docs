---
title: ClientSoldier:HealthAction
---
## Description

## Parameters

| Type                                                        | Name    | Description |
| ----------------------------------------------------------- | ------- | ----------- |
| [SoldierEntity](/vext/ref/cls/clt/soldierentity)         | soldier |             |
| [HealthStateAction](/vext/ref/shared/class/healthstateaction) | action  |             |

## Usage Example

``` lua
local function OnClientSoldierHealthAction(soldier, action)
    -- Add your logic here
end

Events:Subscribe('ClientSoldier:HealthAction', OnClientSoldierHealthAction)
```
