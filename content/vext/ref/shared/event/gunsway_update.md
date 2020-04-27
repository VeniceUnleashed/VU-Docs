---
title: GunSway:Update
---

> **GunSway:Update**(gunSway: [GunSway](/vext/ref/shared/type/gunsway), weapon: [Entity](/vext/ref/shared/type/entity) \| nil, weaponFiring: [WeaponFiring](/vext/ref/shared/type/weaponfiring) \| nil, deltaTime: float)

## Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **gunSway** | [GunSway](/vext/ref/shared/type/gunsway) |  |
| **weapon** | [Entity](/vext/ref/shared/type/entity) \| nil |  |
| **weaponFiring** | [WeaponFiring](/vext/ref/shared/type/weaponfiring) \| nil |  |
| **deltaTime** | float |  |

## Example

```lua
Events:Subscribe('GunSway:Update', function(gunSway, weapon, weaponFiring, deltaTime)
    -- Do stuff here.
end)
```
