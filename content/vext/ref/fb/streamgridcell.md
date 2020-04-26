---
title: StreamGridCell
---

## Summary

### Constructors

|  |
| --- |
| **[StreamGridCell](#constructor-0)**() |
| **[StreamGridCell](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "referenceData" >}} | [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) \| nil |
| {{< prop "x" >}} | int |
| {{< prop "z" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [StreamGridCell](/vext/ref/fb/streamgridcell) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StreamGridCell" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StreamGridCell {#constructor-0}

> **StreamGridCell**()

Creates a new [StreamGridCell](/vext/ref/fb/streamgridcell) frostbite instance.

### StreamGridCell {#constructor-1}

> **StreamGridCell**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StreamGridCell](/vext/ref/fb/streamgridcell) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "referenceData" %}}

> **[ReferenceObjectData](/vext/ref/fb/referenceobjectdata)** \| **nil**

### {{% prop-heading "x" %}}

> **int**

### {{% prop-heading "z" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [StreamGridCell](/vext/ref/fb/streamgridcell)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[StreamGridCell](/vext/ref/fb/streamgridcell)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StreamGridCell](/vext/ref/fb/streamgridcell) type.

