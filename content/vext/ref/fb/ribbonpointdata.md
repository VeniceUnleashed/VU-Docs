---
title: RibbonPointData
---

## Summary

### Constructors

|  |
| --- |
| **[RibbonPointData](#constructor-0)**() |
| **[RibbonPointData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "userMaskRight" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "userMaskLeft" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "right" >}} | float |
| {{< prop "left" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [RibbonPointData](/vext/ref/fb/ribbonpointdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RibbonPointData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RibbonPointData {#constructor-0}

> **RibbonPointData**()

Creates a new [RibbonPointData](/vext/ref/fb/ribbonpointdata) frostbite instance.

### RibbonPointData {#constructor-1}

> **RibbonPointData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RibbonPointData](/vext/ref/fb/ribbonpointdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "userMaskRight" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "userMaskLeft" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "right" %}}

> **float**

### {{% prop-heading "left" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [RibbonPointData](/vext/ref/fb/ribbonpointdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[RibbonPointData](/vext/ref/fb/ribbonpointdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RibbonPointData](/vext/ref/fb/ribbonpointdata) type.

