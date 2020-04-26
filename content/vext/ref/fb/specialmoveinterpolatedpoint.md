---
title: SpecialMoveInterpolatedPoint
---

## Summary

### Constructors

|  |
| --- |
| **[SpecialMoveInterpolatedPoint](#constructor-0)**() |
| **[SpecialMoveInterpolatedPoint](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "time" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SpecialMoveInterpolatedPoint" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SpecialMoveInterpolatedPoint {#constructor-0}

> **SpecialMoveInterpolatedPoint**()

Creates a new [SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint) frostbite instance.

### SpecialMoveInterpolatedPoint {#constructor-1}

> **SpecialMoveInterpolatedPoint**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "value" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "time" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SpecialMoveInterpolatedPoint](/vext/ref/fb/specialmoveinterpolatedpoint) type.

