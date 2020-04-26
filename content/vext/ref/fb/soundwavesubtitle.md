---
title: SoundWaveSubtitle
---

## Summary

### Constructors

|  |
| --- |
| **[SoundWaveSubtitle](#constructor-0)**() |
| **[SoundWaveSubtitle](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "time" >}} | float |
| {{< prop "stringIndex" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoundWaveSubtitle](/vext/ref/fb/soundwavesubtitle) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundWaveSubtitle" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundWaveSubtitle {#constructor-0}

> **SoundWaveSubtitle**()

Creates a new [SoundWaveSubtitle](/vext/ref/fb/soundwavesubtitle) frostbite instance.

### SoundWaveSubtitle {#constructor-1}

> **SoundWaveSubtitle**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundWaveSubtitle](/vext/ref/fb/soundwavesubtitle) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "time" %}}

> **float**

### {{% prop-heading "stringIndex" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [SoundWaveSubtitle](/vext/ref/fb/soundwavesubtitle)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoundWaveSubtitle](/vext/ref/fb/soundwavesubtitle)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundWaveSubtitle](/vext/ref/fb/soundwavesubtitle) type.

