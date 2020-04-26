---
title: OverHeatData
---

## Summary

### Constructors

|  |
| --- |
| **[OverHeatData](#constructor-0)**() |
| **[OverHeatData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "heatPerBullet" >}} | float |
| {{< prop "heatDropPerSecond" >}} | float |
| {{< prop "overHeatPenaltyTime" >}} | float |
| {{< prop "overHeatThreshold" >}} | float |
| {{< prop "overHeatEffect" >}} | [FireEffectData](/vext/ref/fb/fireeffectdata) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [OverHeatData](/vext/ref/fb/overheatdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "OverHeatData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### OverHeatData {#constructor-0}

> **OverHeatData**()

Creates a new [OverHeatData](/vext/ref/fb/overheatdata) frostbite instance.

### OverHeatData {#constructor-1}

> **OverHeatData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [OverHeatData](/vext/ref/fb/overheatdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "heatPerBullet" %}}

> **float**

### {{% prop-heading "heatDropPerSecond" %}}

> **float**

### {{% prop-heading "overHeatPenaltyTime" %}}

> **float**

### {{% prop-heading "overHeatThreshold" %}}

> **float**

### {{% prop-heading "overHeatEffect" %}}

> **[FireEffectData](/vext/ref/fb/fireeffectdata)**

## Methods

### Clone {#clone}

> **Clone**(): [OverHeatData](/vext/ref/fb/overheatdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[OverHeatData](/vext/ref/fb/overheatdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [OverHeatData](/vext/ref/fb/overheatdata) type.

