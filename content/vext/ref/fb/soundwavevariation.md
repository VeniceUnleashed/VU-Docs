---
title: SoundWaveVariation
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SoundWaveVariation](#constructor-0)**() |
| **[SoundWaveVariation](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoundWaveVariation](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "subtitles" >}} | [SoundWaveSubtitle](/vext/ref/fb/soundwavesubtitle)[] |
| {{< prop "seekTablesSize" >}} | int |
| {{< prop "segments" >}} | [SoundWaveVariationSegment](/vext/ref/fb/soundwavevariationsegment)[] |
| {{< prop "chunkIndex" >}} | int |
| {{< prop "firstLoopSegmentIndex" >}} | int |
| {{< prop "lastLoopSegmentIndex" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundWaveVariation" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundWaveVariation {#constructor-0}

> **SoundWaveVariation**()

Creates a new [SoundWaveVariation](/vext/ref/fb/soundwavevariation) frostbite instance.

### SoundWaveVariation {#constructor-1}

> **SoundWaveVariation**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundWaveVariation](/vext/ref/fb/soundwavevariation) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoundWaveVariation {#constructor-2}

> **SoundWaveVariation**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoundWaveVariation](/vext/ref/fb/soundwavevariation). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoundWaveVariation](/vext/ref/fb/soundwavevariation). |

## Properties

### {{% prop-heading "subtitles" %}}

> **[SoundWaveSubtitle](/vext/ref/fb/soundwavesubtitle)**[]

### {{% prop-heading "seekTablesSize" %}}

> **int**

### {{% prop-heading "segments" %}}

> **[SoundWaveVariationSegment](/vext/ref/fb/soundwavevariationsegment)**[]

### {{% prop-heading "chunkIndex" %}}

> **int**

### {{% prop-heading "firstLoopSegmentIndex" %}}

> **int**

### {{% prop-heading "lastLoopSegmentIndex" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundWaveVariation](/vext/ref/fb/soundwavevariation) type.

