---
title: WeaponUnlockPickupData
---

## Summary

### Constructors

|  |
| --- |
| **[WeaponUnlockPickupData](#constructor-0)**() |
| **[WeaponUnlockPickupData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "unlockWeaponAndSlot" >}} | [UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot) |
| {{< prop "altWeaponSlot" >}} | int |
| {{< prop "linkedToWeaponSlot" >}} | int |
| {{< prop "minAmmo" >}} | int |
| {{< prop "maxAmmo" >}} | int |
| {{< prop "defaultToFullAmmo" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [WeaponUnlockPickupData](/vext/ref/fb/weaponunlockpickupdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponUnlockPickupData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponUnlockPickupData {#constructor-0}

> **WeaponUnlockPickupData**()

Creates a new [WeaponUnlockPickupData](/vext/ref/fb/weaponunlockpickupdata) frostbite instance.

### WeaponUnlockPickupData {#constructor-1}

> **WeaponUnlockPickupData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponUnlockPickupData](/vext/ref/fb/weaponunlockpickupdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "unlockWeaponAndSlot" %}}

> **[UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot)**

### {{% prop-heading "altWeaponSlot" %}}

> **int**

### {{% prop-heading "linkedToWeaponSlot" %}}

> **int**

### {{% prop-heading "minAmmo" %}}

> **int**

### {{% prop-heading "maxAmmo" %}}

> **int**

### {{% prop-heading "defaultToFullAmmo" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [WeaponUnlockPickupData](/vext/ref/fb/weaponunlockpickupdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[WeaponUnlockPickupData](/vext/ref/fb/weaponunlockpickupdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponUnlockPickupData](/vext/ref/fb/weaponunlockpickupdata) type.

