---
title: Animated1pOnlyWeaponBinding
---

## Summary

### Constructors

|  |
| --- |
| **[Animated1pOnlyWeaponBinding](#constructor-0)**() |
| **[Animated1pOnlyWeaponBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "undeployFinished" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "cameraFreeWeight" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "deploy1P" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "hideWeapon1p" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [Animated1pOnlyWeaponBinding](/vext/ref/fb/animated1ponlyweaponbinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Animated1pOnlyWeaponBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Animated1pOnlyWeaponBinding {#constructor-0}

> **Animated1pOnlyWeaponBinding**()

Creates a new [Animated1pOnlyWeaponBinding](/vext/ref/fb/animated1ponlyweaponbinding) frostbite instance.

### Animated1pOnlyWeaponBinding {#constructor-1}

> **Animated1pOnlyWeaponBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [Animated1pOnlyWeaponBinding](/vext/ref/fb/animated1ponlyweaponbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "undeployFinished" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "cameraFreeWeight" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "deploy1P" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "hideWeapon1p" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [Animated1pOnlyWeaponBinding](/vext/ref/fb/animated1ponlyweaponbinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Animated1pOnlyWeaponBinding](/vext/ref/fb/animated1ponlyweaponbinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [Animated1pOnlyWeaponBinding](/vext/ref/fb/animated1ponlyweaponbinding) type.

