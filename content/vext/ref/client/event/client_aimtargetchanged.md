---
title: Client:AimTargetChanged
---

> **Client:AimTargetChanged**(entity: [Entity](/vext/ref/shared/type/entity) \| nil, hasFriend: bool, hasEnemy: bool, hasVehicle: bool, hasSoldier: bool)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entity** | [Entity](/vext/ref/shared/type/entity) \| nil |  |
| **hasFriend** | bool |  |
| **hasEnemy** | bool |  |
| **hasVehicle** | bool |  |
| **hasSoldier** | bool |  |

## Example

```lua
Events:Subscribe('Client:AimTargetChanged', function(entity, hasFriend, hasEnemy, hasVehicle, hasSoldier)
    -- Do stuff here.
end)
```
