---
title: ContinueWeaponAmmoData
---

## Summary

### Constructors

|  |
| --- |
| **[ContinueWeaponAmmoData](#constructor-0)**() |
| **[ContinueWeaponAmmoData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "minMags" >}} | int |
| {{< prop "weaponSlot" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ContinueWeaponAmmoData](/vext/ref/fb/continueweaponammodata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ContinueWeaponAmmoData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ContinueWeaponAmmoData {#constructor-0}

> **ContinueWeaponAmmoData**()

Creates a new [ContinueWeaponAmmoData](/vext/ref/fb/continueweaponammodata) frostbite instance.

### ContinueWeaponAmmoData {#constructor-1}

> **ContinueWeaponAmmoData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ContinueWeaponAmmoData](/vext/ref/fb/continueweaponammodata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "minMags" %}}

> **int**

### {{% prop-heading "weaponSlot" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [ContinueWeaponAmmoData](/vext/ref/fb/continueweaponammodata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ContinueWeaponAmmoData](/vext/ref/fb/continueweaponammodata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ContinueWeaponAmmoData](/vext/ref/fb/continueweaponammodata) type.

