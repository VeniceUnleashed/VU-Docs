---
title: TurnEffectData
---

## Summary

### Constructors

|  |
| --- |
| **[TurnEffectData](#constructor-0)**() |
| **[TurnEffectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "maxRollAngle" >}} | float |
| {{< prop "maxPitchAngle" >}} | float |
| {{< prop "yawVelocityThreshhold" >}} | float |
| {{< prop "velocityThreshhold" >}} | float |
| {{< prop "safeTime" >}} | float |
| {{< prop "beginTime" >}} | float |
| {{< prop "holdTime" >}} | float |
| {{< prop "endTime" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [TurnEffectData](/vext/ref/fb/turneffectdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TurnEffectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TurnEffectData {#constructor-0}

> **TurnEffectData**()

Creates a new [TurnEffectData](/vext/ref/fb/turneffectdata) frostbite instance.

### TurnEffectData {#constructor-1}

> **TurnEffectData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TurnEffectData](/vext/ref/fb/turneffectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "maxRollAngle" %}}

> **float**

### {{% prop-heading "maxPitchAngle" %}}

> **float**

### {{% prop-heading "yawVelocityThreshhold" %}}

> **float**

### {{% prop-heading "velocityThreshhold" %}}

> **float**

### {{% prop-heading "safeTime" %}}

> **float**

### {{% prop-heading "beginTime" %}}

> **float**

### {{% prop-heading "holdTime" %}}

> **float**

### {{% prop-heading "endTime" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [TurnEffectData](/vext/ref/fb/turneffectdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[TurnEffectData](/vext/ref/fb/turneffectdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TurnEffectData](/vext/ref/fb/turneffectdata) type.

