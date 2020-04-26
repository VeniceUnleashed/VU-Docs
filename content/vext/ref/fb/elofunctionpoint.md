---
title: EloFunctionPoint
---

## Summary

### Constructors

|  |
| --- |
| **[EloFunctionPoint](#constructor-0)**() |
| **[EloFunctionPoint](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "xValue" >}} | float |
| {{< prop "yValue" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EloFunctionPoint](/vext/ref/fb/elofunctionpoint) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EloFunctionPoint" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EloFunctionPoint {#constructor-0}

> **EloFunctionPoint**()

Creates a new [EloFunctionPoint](/vext/ref/fb/elofunctionpoint) frostbite instance.

### EloFunctionPoint {#constructor-1}

> **EloFunctionPoint**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EloFunctionPoint](/vext/ref/fb/elofunctionpoint) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "xValue" %}}

> **float**

### {{% prop-heading "yValue" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [EloFunctionPoint](/vext/ref/fb/elofunctionpoint)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EloFunctionPoint](/vext/ref/fb/elofunctionpoint)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EloFunctionPoint](/vext/ref/fb/elofunctionpoint) type.

