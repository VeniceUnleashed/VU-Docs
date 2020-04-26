---
title: RotateToHitData
---

## Summary

### Constructors

|  |
| --- |
| **[RotateToHitData](#constructor-0)**() |
| **[RotateToHitData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rotationSpeedFactor" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [RotateToHitData](/vext/ref/fb/rotatetohitdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RotateToHitData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RotateToHitData {#constructor-0}

> **RotateToHitData**()

Creates a new [RotateToHitData](/vext/ref/fb/rotatetohitdata) frostbite instance.

### RotateToHitData {#constructor-1}

> **RotateToHitData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RotateToHitData](/vext/ref/fb/rotatetohitdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "rotationSpeedFactor" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [RotateToHitData](/vext/ref/fb/rotatetohitdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[RotateToHitData](/vext/ref/fb/rotatetohitdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RotateToHitData](/vext/ref/fb/rotatetohitdata) type.

