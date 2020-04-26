---
title: WeaponModifierData
---

## Summary

### Constructors

|  |
| --- |
| **[WeaponModifierData](#constructor-0)**() |
| **[WeaponModifierData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "unlockAsset" >}} | [UnlockAssetBase](/vext/ref/fb/unlockassetbase) \| nil |
| {{< prop "modifiers" >}} | [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [WeaponModifierData](/vext/ref/fb/weaponmodifierdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponModifierData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponModifierData {#constructor-0}

> **WeaponModifierData**()

Creates a new [WeaponModifierData](/vext/ref/fb/weaponmodifierdata) frostbite instance.

### WeaponModifierData {#constructor-1}

> **WeaponModifierData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponModifierData](/vext/ref/fb/weaponmodifierdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "unlockAsset" %}}

> **[UnlockAssetBase](/vext/ref/fb/unlockassetbase)** \| **nil**

### {{% prop-heading "modifiers" %}}

> **[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)**[]

## Methods

### Clone {#clone}

> **Clone**(): [WeaponModifierData](/vext/ref/fb/weaponmodifierdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[WeaponModifierData](/vext/ref/fb/weaponmodifierdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponModifierData](/vext/ref/fb/weaponmodifierdata) type.

