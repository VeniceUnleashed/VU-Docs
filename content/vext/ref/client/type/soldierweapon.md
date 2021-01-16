---
title: SoldierWeapon
---

Inherits from [GameEntity](/vext/ref/client/type/gameentity)

## Summary

### Constructors

|  |
| --- |
| **[SoldierWeapon](#constructor-0)**(other: [Entity](/vext/ref/shared/type/entity)) |
| **[SoldierWeapon](#constructor-1)**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity)) |
| **[SoldierWeapon](#constructor-2)**(other: [GameEntity](/vext/ref/client/type/gameentity)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "weaponModifier" true >}} | [WeaponModifier](/vext/ref/fb/weaponmodifier) \| nil |
| {{< prop "correctedWeaponFiring" true >}} | [WeaponFiring](/vext/ref/shared/type/weaponfiring) \| nil |
| {{< prop "predictedWeaponFiring" true >}} | [WeaponFiring](/vext/ref/shared/type/weaponfiring) \| nil |
| {{< prop "aimingSimulation" true >}} | [AimingSimulation](/vext/ref/client/type/aimingsimulation) \| nil |
| {{< prop "name" true >}} | string |
| {{< prop "primaryAmmo" true >}} | int |
| {{< prop "secondaryAmmo" true >}} | int |
| {{< prop "fireLogic" true >}} | [FireLogicType](/vext/ref/fb/firelogictype) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierWeapon" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierWeapon {#constructor-0}

> **SoldierWeapon**(other: [Entity](/vext/ref/shared/type/entity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Entity](/vext/ref/shared/type/entity) |  |

### SoldierWeapon {#constructor-1}

> **SoldierWeapon**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntity](/vext/ref/shared/type/spatialentity) |  |

### SoldierWeapon {#constructor-2}

> **SoldierWeapon**(other: [GameEntity](/vext/ref/client/type/gameentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntity](/vext/ref/client/type/gameentity) |  |

## Properties

### {{% prop-heading "weaponModifier" true %}}

> **[WeaponModifier](/vext/ref/fb/weaponmodifier)** \| **nil**

### {{% prop-heading "correctedWeaponFiring" true %}}

> **[WeaponFiring](/vext/ref/shared/type/weaponfiring)** \| **nil**

### {{% prop-heading "predictedWeaponFiring" true %}}

> **[WeaponFiring](/vext/ref/shared/type/weaponfiring)** \| **nil**

### {{% prop-heading "aimingSimulation" true %}}

> **[AimingSimulation](/vext/ref/client/type/aimingsimulation)** \| **nil**

### {{% prop-heading "name" true %}}

> **string**

### {{% prop-heading "primaryAmmo" true %}}

> **int**

### {{% prop-heading "secondaryAmmo" true %}}

> **int**

### {{% prop-heading "fireLogic" true %}}

> **[FireLogicType](/vext/ref/fb/firelogictype)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

