---
title: ColorTintData
---

## Summary

### Constructors

|  |
| --- |
| **[ColorTintData](#constructor-0)**() |
| **[ColorTintData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "contrast" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "brightness" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "saturation" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "hue" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [ColorTintData](/vext/ref/fb/colortintdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ColorTintData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ColorTintData {#constructor-0}

> **ColorTintData**()

Creates a new [ColorTintData](/vext/ref/fb/colortintdata) frostbite instance.

### ColorTintData {#constructor-1}

> **ColorTintData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ColorTintData](/vext/ref/fb/colortintdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "contrast" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "brightness" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "saturation" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "hue" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [ColorTintData](/vext/ref/fb/colortintdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[ColorTintData](/vext/ref/fb/colortintdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ColorTintData](/vext/ref/fb/colortintdata) type.

