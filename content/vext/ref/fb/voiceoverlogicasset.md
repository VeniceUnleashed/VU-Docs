---
title: VoiceOverLogicAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverLogicAsset](#constructor-0)**() |
| **[VoiceOverLogicAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverLogicAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[VoiceOverLogicAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "events" >}} | [VoiceOverEvent](/vext/ref/fb/voiceoverevent)[] |
| {{< prop "groups" >}} | [VoiceOverGroup](/vext/ref/fb/voiceovergroup)[] |
| {{< prop "flows" >}} | [VoiceOverLogicFlow](/vext/ref/fb/voiceoverlogicflow)[] |
| {{< prop "system" >}} | [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverLogicAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverLogicAsset {#constructor-0}

> **VoiceOverLogicAsset**()

Creates a new [VoiceOverLogicAsset](/vext/ref/fb/voiceoverlogicasset) frostbite instance.

### VoiceOverLogicAsset {#constructor-1}

> **VoiceOverLogicAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverLogicAsset](/vext/ref/fb/voiceoverlogicasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverLogicAsset {#constructor-2}

> **VoiceOverLogicAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [VoiceOverLogicAsset](/vext/ref/fb/voiceoverlogicasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [VoiceOverLogicAsset](/vext/ref/fb/voiceoverlogicasset). |

### VoiceOverLogicAsset {#constructor-3}

> **VoiceOverLogicAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverLogicAsset](/vext/ref/fb/voiceoverlogicasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverLogicAsset](/vext/ref/fb/voiceoverlogicasset). |

## Properties

### {{% prop-heading "events" %}}

> **[VoiceOverEvent](/vext/ref/fb/voiceoverevent)**[]

### {{% prop-heading "groups" %}}

> **[VoiceOverGroup](/vext/ref/fb/voiceovergroup)**[]

### {{% prop-heading "flows" %}}

> **[VoiceOverLogicFlow](/vext/ref/fb/voiceoverlogicflow)**[]

### {{% prop-heading "system" %}}

> **[VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverLogicAsset](/vext/ref/fb/voiceoverlogicasset) type.

