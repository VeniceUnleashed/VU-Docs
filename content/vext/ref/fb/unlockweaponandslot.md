---
title: UnlockWeaponAndSlot
---

## Summary

### Constructors

|  |
| --- |
| **[UnlockWeaponAndSlot](#constructor-0)**() |
| **[UnlockWeaponAndSlot](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "weapon" >}} | [SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset) \| nil |
| {{< prop "slot" >}} | [WeaponSlot](/vext/ref/fb/weaponslot) |
| {{< prop "unlockAssets" >}} | [UnlockAssetBase](/vext/ref/fb/unlockassetbase)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UnlockWeaponAndSlot" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UnlockWeaponAndSlot {#constructor-0}

> **UnlockWeaponAndSlot**()

Creates a new [UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot) frostbite instance.

### UnlockWeaponAndSlot {#constructor-1}

> **UnlockWeaponAndSlot**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "weapon" %}}

> **[SoldierWeaponUnlockAsset](/vext/ref/fb/soldierweaponunlockasset)** \| **nil**

### {{% prop-heading "slot" %}}

> **[WeaponSlot](/vext/ref/fb/weaponslot)**

### {{% prop-heading "unlockAssets" %}}

> **[UnlockAssetBase](/vext/ref/fb/unlockassetbase)**[]

## Methods

### Clone {#clone}

> **Clone**(): [UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot) type.

