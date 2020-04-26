---
title: GroundHeightData
---

## Summary

### Constructors

|  |
| --- |
| **[GroundHeightData](#constructor-0)**() |
| **[GroundHeightData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "heightSpan" >}} | [Vec2](/vext/ref/shared/type/vec2) |
| {{< prop "worldSize" >}} | float |
| {{< prop "data" >}} | int[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [GroundHeightData](/vext/ref/fb/groundheightdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GroundHeightData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GroundHeightData {#constructor-0}

> **GroundHeightData**()

Creates a new [GroundHeightData](/vext/ref/fb/groundheightdata) frostbite instance.

### GroundHeightData {#constructor-1}

> **GroundHeightData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GroundHeightData](/vext/ref/fb/groundheightdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "heightSpan" %}}

> **[Vec2](/vext/ref/shared/type/vec2)**

### {{% prop-heading "worldSize" %}}

> **float**

### {{% prop-heading "data" %}}

> **int**[]

## Methods

### Clone {#clone}

> **Clone**(): [GroundHeightData](/vext/ref/fb/groundheightdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[GroundHeightData](/vext/ref/fb/groundheightdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GroundHeightData](/vext/ref/fb/groundheightdata) type.

