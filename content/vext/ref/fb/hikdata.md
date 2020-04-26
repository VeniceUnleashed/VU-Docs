---
title: HIKData
---

## Summary

### Constructors

|  |
| --- |
| **[HIKData](#constructor-0)**() |
| **[HIKData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "reachT" >}} | float |
| {{< prop "reachR" >}} | float |
| {{< prop "pull" >}} | float |
| {{< prop "resist" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [HIKData](/vext/ref/fb/hikdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "HIKData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### HIKData {#constructor-0}

> **HIKData**()

Creates a new [HIKData](/vext/ref/fb/hikdata) frostbite instance.

### HIKData {#constructor-1}

> **HIKData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [HIKData](/vext/ref/fb/hikdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "reachT" %}}

> **float**

### {{% prop-heading "reachR" %}}

> **float**

### {{% prop-heading "pull" %}}

> **float**

### {{% prop-heading "resist" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [HIKData](/vext/ref/fb/hikdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HIKData](/vext/ref/fb/hikdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [HIKData](/vext/ref/fb/hikdata) type.

