---
title: ClientSoldier:HealthAction (Client Event)
---
## Description

## Parameters

| Type                                                        | Name    | Description |
| ----------------------------------------------------------- | ------- | ----------- |
| [SoldierEntity](/vext/ref/cls/clt/soldierentity)         | soldier |             |
| [HealthStateAction](/vext/ref/cls/shr/healthstateaction) | action  |             |

## Usage Example

``` lua
local function OnClientSoldierHealthAction(soldier, action)
    -- Add your logic here
end

Events:Subscribe('ClientSoldier:HealthAction', OnClientSoldierHealthAction)
```
