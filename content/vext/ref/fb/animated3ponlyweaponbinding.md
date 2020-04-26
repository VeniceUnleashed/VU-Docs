---
title: Animated3pOnlyWeaponBinding
---

## Summary

### Constructors

|  |
| --- |
| **[Animated3pOnlyWeaponBinding](#constructor-0)**() |
| **[Animated3pOnlyWeaponBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "deploy3P" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "hideWeapon3p" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [Animated3pOnlyWeaponBinding](/vext/ref/fb/animated3ponlyweaponbinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Animated3pOnlyWeaponBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Animated3pOnlyWeaponBinding {#constructor-0}

> **Animated3pOnlyWeaponBinding**()

Creates a new [Animated3pOnlyWeaponBinding](/vext/ref/fb/animated3ponlyweaponbinding) frostbite instance.

### Animated3pOnlyWeaponBinding {#constructor-1}

> **Animated3pOnlyWeaponBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [Animated3pOnlyWeaponBinding](/vext/ref/fb/animated3ponlyweaponbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "deploy3P" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "hideWeapon3p" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [Animated3pOnlyWeaponBinding](/vext/ref/fb/animated3ponlyweaponbinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Animated3pOnlyWeaponBinding](/vext/ref/fb/animated3ponlyweaponbinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [Animated3pOnlyWeaponBinding](/vext/ref/fb/animated3ponlyweaponbinding) type.

