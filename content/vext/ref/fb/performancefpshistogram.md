---
title: PerformanceFpsHistogram
---

## Summary

### Constructors

|  |
| --- |
| **[PerformanceFpsHistogram](#constructor-0)**() |
| **[PerformanceFpsHistogram](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "below5" >}} | float |
| {{< prop "below10" >}} | float |
| {{< prop "below15" >}} | float |
| {{< prop "below20" >}} | float |
| {{< prop "below25" >}} | float |
| {{< prop "below30" >}} | float |
| {{< prop "below60" >}} | float |
| {{< prop "above60" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [PerformanceFpsHistogram](/vext/ref/fb/performancefpshistogram) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PerformanceFpsHistogram" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PerformanceFpsHistogram {#constructor-0}

> **PerformanceFpsHistogram**()

Creates a new [PerformanceFpsHistogram](/vext/ref/fb/performancefpshistogram) frostbite instance.

### PerformanceFpsHistogram {#constructor-1}

> **PerformanceFpsHistogram**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PerformanceFpsHistogram](/vext/ref/fb/performancefpshistogram) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "below5" %}}

> **float**

### {{% prop-heading "below10" %}}

> **float**

### {{% prop-heading "below15" %}}

> **float**

### {{% prop-heading "below20" %}}

> **float**

### {{% prop-heading "below25" %}}

> **float**

### {{% prop-heading "below30" %}}

> **float**

### {{% prop-heading "below60" %}}

> **float**

### {{% prop-heading "above60" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [PerformanceFpsHistogram](/vext/ref/fb/performancefpshistogram)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PerformanceFpsHistogram](/vext/ref/fb/performancefpshistogram)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PerformanceFpsHistogram](/vext/ref/fb/performancefpshistogram) type.

