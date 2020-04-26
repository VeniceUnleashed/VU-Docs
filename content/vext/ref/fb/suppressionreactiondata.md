---
title: SuppressionReactionData
---

## Summary

### Constructors

|  |
| --- |
| **[SuppressionReactionData](#constructor-0)**() |
| **[SuppressionReactionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "suppressionHighThreshold" >}} | float |
| {{< prop "suppressionLowThreshold" >}} | float |
| {{< prop "suppressionUIThreshold" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SuppressionReactionData](/vext/ref/fb/suppressionreactiondata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SuppressionReactionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SuppressionReactionData {#constructor-0}

> **SuppressionReactionData**()

Creates a new [SuppressionReactionData](/vext/ref/fb/suppressionreactiondata) frostbite instance.

### SuppressionReactionData {#constructor-1}

> **SuppressionReactionData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SuppressionReactionData](/vext/ref/fb/suppressionreactiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "suppressionHighThreshold" %}}

> **float**

### {{% prop-heading "suppressionLowThreshold" %}}

> **float**

### {{% prop-heading "suppressionUIThreshold" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [SuppressionReactionData](/vext/ref/fb/suppressionreactiondata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SuppressionReactionData](/vext/ref/fb/suppressionreactiondata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SuppressionReactionData](/vext/ref/fb/suppressionreactiondata) type.

