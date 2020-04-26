---
title: SubScreenData
---

## Summary

### Constructors

|  |
| --- |
| **[SubScreenData](#constructor-0)**() |
| **[SubScreenData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "screenPosition" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "projectionAngleY" >}} | float |
| {{< prop "projectionAngleZ" >}} | float |
| {{< prop "projectionAngleX" >}} | float |
| {{< prop "screenSize" >}} | float |
| {{< prop "iconSize" >}} | float |
| {{< prop "scaleIconSizeByDepthStrength" >}} | float |
| {{< prop "renderTargetApectRatio" >}} | float |
| {{< prop "renderTargetIndex" >}} | int |
| {{< prop "useRenderTarget" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SubScreenData](/vext/ref/fb/subscreendata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SubScreenData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SubScreenData {#constructor-0}

> **SubScreenData**()

Creates a new [SubScreenData](/vext/ref/fb/subscreendata) frostbite instance.

### SubScreenData {#constructor-1}

> **SubScreenData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SubScreenData](/vext/ref/fb/subscreendata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "screenPosition" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "projectionAngleY" %}}

> **float**

### {{% prop-heading "projectionAngleZ" %}}

> **float**

### {{% prop-heading "projectionAngleX" %}}

> **float**

### {{% prop-heading "screenSize" %}}

> **float**

### {{% prop-heading "iconSize" %}}

> **float**

### {{% prop-heading "scaleIconSizeByDepthStrength" %}}

> **float**

### {{% prop-heading "renderTargetApectRatio" %}}

> **float**

### {{% prop-heading "renderTargetIndex" %}}

> **int**

### {{% prop-heading "useRenderTarget" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [SubScreenData](/vext/ref/fb/subscreendata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SubScreenData](/vext/ref/fb/subscreendata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SubScreenData](/vext/ref/fb/subscreendata) type.

