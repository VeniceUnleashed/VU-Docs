---
title: VoiceOverTriggerNode
---

Inherits from [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverTriggerNode](#constructor-0)**() |
| **[VoiceOverTriggerNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverTriggerNode](#constructor-2)**(other: [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)) |
| **[VoiceOverTriggerNode](#constructor-3)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverTriggerNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "parameters" >}} | [VoiceOverTriggerParameter](/vext/ref/fb/voiceovertriggerparameter)[] |
| {{< prop "delay" >}} | float |
| {{< prop "event" >}} | [VoiceOverEvent](/vext/ref/fb/voiceoverevent) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverTriggerNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverTriggerNode {#constructor-0}

> **VoiceOverTriggerNode**()

Creates a new [VoiceOverTriggerNode](/vext/ref/fb/voiceovertriggernode) frostbite instance.

### VoiceOverTriggerNode {#constructor-1}

> **VoiceOverTriggerNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverTriggerNode](/vext/ref/fb/voiceovertriggernode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverTriggerNode {#constructor-2}

> **VoiceOverTriggerNode**(other: [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode))

Casts an instance of type [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode) to [VoiceOverTriggerNode](/vext/ref/fb/voiceovertriggernode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode) | The instance to cast to [VoiceOverTriggerNode](/vext/ref/fb/voiceovertriggernode). |

### VoiceOverTriggerNode {#constructor-3}

> **VoiceOverTriggerNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverTriggerNode](/vext/ref/fb/voiceovertriggernode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverTriggerNode](/vext/ref/fb/voiceovertriggernode). |

### VoiceOverTriggerNode {#constructor-4}

> **VoiceOverTriggerNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverTriggerNode](/vext/ref/fb/voiceovertriggernode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverTriggerNode](/vext/ref/fb/voiceovertriggernode). |

## Properties

### {{% prop-heading "parameters" %}}

> **[VoiceOverTriggerParameter](/vext/ref/fb/voiceovertriggerparameter)**[]

### {{% prop-heading "delay" %}}

> **float**

### {{% prop-heading "event" %}}

> **[VoiceOverEvent](/vext/ref/fb/voiceoverevent)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverTriggerNode](/vext/ref/fb/voiceovertriggernode) type.

