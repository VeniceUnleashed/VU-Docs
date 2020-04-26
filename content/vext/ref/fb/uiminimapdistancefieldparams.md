---
title: UIMinimapDistanceFieldParams
---

## Summary

### Constructors

|  |
| --- |
| **[UIMinimapDistanceFieldParams](#constructor-0)**() |
| **[UIMinimapDistanceFieldParams](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "colorTint" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "outlineColor" >}} | [Vec4](/vext/ref/shared/type/vec4) |
| {{< prop "distanceScale" >}} | float |
| {{< prop "alphaThreshold" >}} | float |
| {{< prop "outlineInner" >}} | float |
| {{< prop "outlineOuter" >}} | float |
| {{< prop "distanceField" >}} | [UIDistanceFieldAsset](/vext/ref/fb/uidistancefieldasset) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIMinimapDistanceFieldParams" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIMinimapDistanceFieldParams {#constructor-0}

> **UIMinimapDistanceFieldParams**()

Creates a new [UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams) frostbite instance.

### UIMinimapDistanceFieldParams {#constructor-1}

> **UIMinimapDistanceFieldParams**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "colorTint" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "outlineColor" %}}

> **[Vec4](/vext/ref/shared/type/vec4)**

### {{% prop-heading "distanceScale" %}}

> **float**

### {{% prop-heading "alphaThreshold" %}}

> **float**

### {{% prop-heading "outlineInner" %}}

> **float**

### {{% prop-heading "outlineOuter" %}}

> **float**

### {{% prop-heading "distanceField" %}}

> **[UIDistanceFieldAsset](/vext/ref/fb/uidistancefieldasset)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIMinimapDistanceFieldParams](/vext/ref/fb/uiminimapdistancefieldparams) type.

