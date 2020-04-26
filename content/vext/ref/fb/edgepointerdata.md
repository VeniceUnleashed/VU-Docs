---
title: EdgePointerData
---

## Summary

### Constructors

|  |
| --- |
| **[EdgePointerData](#constructor-0)**() |
| **[EdgePointerData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "negativeXLimit" >}} | float |
| {{< prop "positiveXLimit" >}} | float |
| {{< prop "negativeYLimit" >}} | float |
| {{< prop "positiveYLimit" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EdgePointerData](/vext/ref/fb/edgepointerdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EdgePointerData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EdgePointerData {#constructor-0}

> **EdgePointerData**()

Creates a new [EdgePointerData](/vext/ref/fb/edgepointerdata) frostbite instance.

### EdgePointerData {#constructor-1}

> **EdgePointerData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EdgePointerData](/vext/ref/fb/edgepointerdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "negativeXLimit" %}}

> **float**

### {{% prop-heading "positiveXLimit" %}}

> **float**

### {{% prop-heading "negativeYLimit" %}}

> **float**

### {{% prop-heading "positiveYLimit" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [EdgePointerData](/vext/ref/fb/edgepointerdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EdgePointerData](/vext/ref/fb/edgepointerdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EdgePointerData](/vext/ref/fb/edgepointerdata) type.

