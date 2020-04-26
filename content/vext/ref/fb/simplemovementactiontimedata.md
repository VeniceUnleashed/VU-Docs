---
title: SimpleMovementActionTimeData
---

## Summary

### Constructors

|  |
| --- |
| **[SimpleMovementActionTimeData](#constructor-0)**() |
| **[SimpleMovementActionTimeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "time" >}} | float |
| {{< prop "maxVariation" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SimpleMovementActionTimeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SimpleMovementActionTimeData {#constructor-0}

> **SimpleMovementActionTimeData**()

Creates a new [SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata) frostbite instance.

### SimpleMovementActionTimeData {#constructor-1}

> **SimpleMovementActionTimeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "time" %}}

> **float**

### {{% prop-heading "maxVariation" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata) type.

