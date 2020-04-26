---
title: RectangularCoverageData
---

## Summary

### Constructors

|  |
| --- |
| **[RectangularCoverageData](#constructor-0)**() |
| **[RectangularCoverageData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [RectangularCoverageData](/vext/ref/fb/rectangularcoveragedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RectangularCoverageData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RectangularCoverageData {#constructor-0}

> **RectangularCoverageData**()

Creates a new [RectangularCoverageData](/vext/ref/fb/rectangularcoveragedata) frostbite instance.

### RectangularCoverageData {#constructor-1}

> **RectangularCoverageData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RectangularCoverageData](/vext/ref/fb/rectangularcoveragedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Methods

### Clone {#clone}

> **Clone**(): [RectangularCoverageData](/vext/ref/fb/rectangularcoveragedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[RectangularCoverageData](/vext/ref/fb/rectangularcoveragedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RectangularCoverageData](/vext/ref/fb/rectangularcoveragedata) type.

