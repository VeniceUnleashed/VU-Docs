---
title: VoiceOverLabelSource
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverLabelSource](#constructor-0)**() |
| **[VoiceOverLabelSource](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverLabelSource](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "source" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverLabelSource" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverLabelSource {#constructor-0}

> **VoiceOverLabelSource**()

Creates a new [VoiceOverLabelSource](/vext/ref/fb/voiceoverlabelsource) frostbite instance.

### VoiceOverLabelSource {#constructor-1}

> **VoiceOverLabelSource**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverLabelSource](/vext/ref/fb/voiceoverlabelsource) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverLabelSource {#constructor-2}

> **VoiceOverLabelSource**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverLabelSource](/vext/ref/fb/voiceoverlabelsource). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverLabelSource](/vext/ref/fb/voiceoverlabelsource). |

## Properties

### {{% prop-heading "source" %}}

> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverLabelSource](/vext/ref/fb/voiceoverlabelsource) type.

