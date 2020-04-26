---
title: UavCameraPointData
---

## Summary

### Constructors

|  |
| --- |
| **[UavCameraPointData](#constructor-0)**() |
| **[UavCameraPointData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "minTime" >}} | float |
| {{< prop "maxTime" >}} | float |
| {{< prop "speed" >}} | float |
| {{< prop "accelerationTime" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UavCameraPointData](/vext/ref/fb/uavcamerapointdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UavCameraPointData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UavCameraPointData {#constructor-0}

> **UavCameraPointData**()

Creates a new [UavCameraPointData](/vext/ref/fb/uavcamerapointdata) frostbite instance.

### UavCameraPointData {#constructor-1}

> **UavCameraPointData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UavCameraPointData](/vext/ref/fb/uavcamerapointdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "minTime" %}}

> **float**

### {{% prop-heading "maxTime" %}}

> **float**

### {{% prop-heading "speed" %}}

> **float**

### {{% prop-heading "accelerationTime" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [UavCameraPointData](/vext/ref/fb/uavcamerapointdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UavCameraPointData](/vext/ref/fb/uavcamerapointdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UavCameraPointData](/vext/ref/fb/uavcamerapointdata) type.

