---
title: UI:CreateKillMessage
---

> **UI:CreateKillMessage**(victimId: int, killerId: int, weapon: [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset) \| [VehicleEntityData](/vext/ref/fb/vehicleentitydata) \| nil, isHeadshot: bool)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **victimId** | int |  |
| **killerId** | int |  |
| **weapon** | [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset) \| [VehicleEntityData](/vext/ref/fb/vehicleentitydata) \| nil |  |
| **isHeadshot** | bool |  |

## Example

```lua
Hooks:Install('UI:CreateKillMessage', 1, function(hook, victimId, killerId, weapon, isHeadshot)
    -- Do stuff here.
end)
```
