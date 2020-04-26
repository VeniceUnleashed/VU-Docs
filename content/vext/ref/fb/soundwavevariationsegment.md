---
title: SoundWaveVariationSegment
---

## Summary

### Constructors

|  |
| --- |
| **[SoundWaveVariationSegment](#constructor-0)**() |
| **[SoundWaveVariationSegment](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "samplesOffset" >}} | int |
| {{< prop "seekTableOffset" >}} | int |
| {{< prop "segmentLength" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoundWaveVariationSegment](/vext/ref/fb/soundwavevariationsegment) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundWaveVariationSegment" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundWaveVariationSegment {#constructor-0}

> **SoundWaveVariationSegment**()

Creates a new [SoundWaveVariationSegment](/vext/ref/fb/soundwavevariationsegment) frostbite instance.

### SoundWaveVariationSegment {#constructor-1}

> **SoundWaveVariationSegment**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundWaveVariationSegment](/vext/ref/fb/soundwavevariationsegment) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "samplesOffset" %}}

> **int**

### {{% prop-heading "seekTableOffset" %}}

> **int**

### {{% prop-heading "segmentLength" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [SoundWaveVariationSegment](/vext/ref/fb/soundwavevariationsegment)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoundWaveVariationSegment](/vext/ref/fb/soundwavevariationsegment)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundWaveVariationSegment](/vext/ref/fb/soundwavevariationsegment) type.

