---
title: WeaponPickupData
---

## Summary

### Constructors

|  |
| --- |
| **[WeaponPickupData](#constructor-0)**() |
| **[WeaponPickupData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "weapon" >}} | [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint) \| nil |
| {{< prop "weaponSlot" >}} | int |
| {{< prop "altWeaponSlot" >}} | int |
| {{< prop "linkedToWeaponSlot" >}} | int |
| {{< prop "minAmmo" >}} | int |
| {{< prop "maxAmmo" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [WeaponPickupData](/vext/ref/fb/weaponpickupdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponPickupData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponPickupData {#constructor-0}

> **WeaponPickupData**()

Creates a new [WeaponPickupData](/vext/ref/fb/weaponpickupdata) frostbite instance.

### WeaponPickupData {#constructor-1}

> **WeaponPickupData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponPickupData](/vext/ref/fb/weaponpickupdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "weapon" %}}

> **[SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint)** \| **nil**

### {{% prop-heading "weaponSlot" %}}

> **int**

### {{% prop-heading "altWeaponSlot" %}}

> **int**

### {{% prop-heading "linkedToWeaponSlot" %}}

> **int**

### {{% prop-heading "minAmmo" %}}

> **int**

### {{% prop-heading "maxAmmo" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [WeaponPickupData](/vext/ref/fb/weaponpickupdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[WeaponPickupData](/vext/ref/fb/weaponpickupdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponPickupData](/vext/ref/fb/weaponpickupdata) type.

