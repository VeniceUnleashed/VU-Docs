---
title: UIGPSPosition
---

## Summary

### Constructors

|  |
| --- |
| **[UIGPSPosition](#constructor-0)**() |
| **[UIGPSPosition](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "latitude" >}} | float |
| {{< prop "longitude" >}} | float |
| {{< prop "seaLevelOffset" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIGPSPosition](/vext/ref/fb/uigpsposition) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIGPSPosition" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIGPSPosition {#constructor-0}

> **UIGPSPosition**()

Creates a new [UIGPSPosition](/vext/ref/fb/uigpsposition) frostbite instance.

### UIGPSPosition {#constructor-1}

> **UIGPSPosition**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIGPSPosition](/vext/ref/fb/uigpsposition) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "latitude" %}}

> **float**

### {{% prop-heading "longitude" %}}

> **float**

### {{% prop-heading "seaLevelOffset" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [UIGPSPosition](/vext/ref/fb/uigpsposition)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIGPSPosition](/vext/ref/fb/uigpsposition)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIGPSPosition](/vext/ref/fb/uigpsposition) type.

