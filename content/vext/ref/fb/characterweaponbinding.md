---
title: CharacterWeaponBinding
---

## Summary

### Constructors

|  |
| --- |
| **[CharacterWeaponBinding](#constructor-0)**() |
| **[CharacterWeaponBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "weaponId" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [CharacterWeaponBinding](/vext/ref/fb/characterweaponbinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CharacterWeaponBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CharacterWeaponBinding {#constructor-0}

> **CharacterWeaponBinding**()

Creates a new [CharacterWeaponBinding](/vext/ref/fb/characterweaponbinding) frostbite instance.

### CharacterWeaponBinding {#constructor-1}

> **CharacterWeaponBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CharacterWeaponBinding](/vext/ref/fb/characterweaponbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "weaponId" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [CharacterWeaponBinding](/vext/ref/fb/characterweaponbinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[CharacterWeaponBinding](/vext/ref/fb/characterweaponbinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CharacterWeaponBinding](/vext/ref/fb/characterweaponbinding) type.

