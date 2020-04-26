---
title: PartInfoData
---

## Summary

### Constructors

|  |
| --- |
| **[PartInfoData](#constructor-0)**() |
| **[PartInfoData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "aabb" >}} | [AxisAlignedBox](/vext/ref/shared/type/axisalignedbox) |
| {{< prop "translation" >}} | [Vec3](/vext/ref/shared/type/vec3) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [PartInfoData](/vext/ref/fb/partinfodata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PartInfoData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PartInfoData {#constructor-0}

> **PartInfoData**()

Creates a new [PartInfoData](/vext/ref/fb/partinfodata) frostbite instance.

### PartInfoData {#constructor-1}

> **PartInfoData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PartInfoData](/vext/ref/fb/partinfodata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "aabb" %}}

> **[AxisAlignedBox](/vext/ref/shared/type/axisalignedbox)**

### {{% prop-heading "translation" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

## Methods

### Clone {#clone}

> **Clone**(): [PartInfoData](/vext/ref/fb/partinfodata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PartInfoData](/vext/ref/fb/partinfodata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PartInfoData](/vext/ref/fb/partinfodata) type.

