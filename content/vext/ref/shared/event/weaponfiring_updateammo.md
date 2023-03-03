---
title: WeaponFiring:UpdateAmmo
---

> **WeaponFiring:UpdateAmmo**(weaponFiring: [WeaponFiring](/vext/ref/shared/type/weaponfiring), entity: [Entity](/vext/ref/shared/type/entity))

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **weaponFiring** | [WeaponFiring](/vext/ref/shared/type/weaponfiring) |  |
| **entity** | [Entity](/vext/ref/shared/type/entity) |  |

## Example

```lua
Events:Subscribe('WeaponFiring:UpdateAmmo', function(weaponFiring, entity)
    -- Do stuff here.
end)
```
