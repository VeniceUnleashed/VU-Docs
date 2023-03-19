---
title: SoldierWeaponsComponent
---

Inherits from [Component](/vext/ref/shared/type/component)

## Summary

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "isZooming" true >}} | bool |
| {{< prop "currentWeapon" true >}} | [SoldierWeapon](/vext/ref/server/type/soldierweapon) |
| {{< prop "weapons" true >}} | [SoldierWeapon](/vext/ref/server/type/soldierweapon)[] |
| {{< prop "currentWeaponSlot" true >}} | [WeaponSlot](/vext/ref/fb/weaponslot) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[EquipWeapon](#equipweapon)**(weaponSlot: [WeaponSlot](/vext/ref/fb/weaponslot), weaponUnlockAsset: [DataContainer](/vext/ref/shared/type/datacontainer), unlockAssets: [DataContainer](/vext/ref/shared/type/datacontainer){}) | void |
| **[UnequipWeapon](#unequipweapon)**(weaponSlot: [WeaponSlot](/vext/ref/fb/weaponslot)) | void |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierWeaponsComponent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Properties

### {{% prop-heading "isZooming" true %}}

> **bool**

### {{% prop-heading "currentWeapon" true %}}

> **[SoldierWeapon](/vext/ref/server/type/soldierweapon)**

### {{% prop-heading "weapons" true %}}

> **[SoldierWeapon](/vext/ref/server/type/soldierweapon)**[]

### {{% prop-heading "currentWeaponSlot" true %}}

> **[WeaponSlot](/vext/ref/fb/weaponslot)**

## Methods

### EquipWeapon {#equipweapon}

> **EquipWeapon**(weaponSlot: [WeaponSlot](/vext/ref/fb/weaponslot), weaponUnlockAsset: [DataContainer](/vext/ref/shared/type/datacontainer), unlockAssets: [DataContainer](/vext/ref/shared/type/datacontainer){})

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **weaponSlot** | [WeaponSlot](/vext/ref/fb/weaponslot) |  |
| **weaponUnlockAsset** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **unlockAssets** | [DataContainer](/vext/ref/shared/type/datacontainer){} |  |

### UnequipWeapon {#unequipweapon}

> **UnequipWeapon**(weaponSlot: [WeaponSlot](/vext/ref/fb/weaponslot))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **weaponSlot** | [WeaponSlot](/vext/ref/fb/weaponslot) |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

