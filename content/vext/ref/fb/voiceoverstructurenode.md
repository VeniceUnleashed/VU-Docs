---
title: VoiceOverStructureNode
---

Inherits from [VoiceOverNode](/vext/ref/fb/voiceovernode)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverStructureNode](#constructor-0)**() |
| **[VoiceOverStructureNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverStructureNode](#constructor-2)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverStructureNode](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "flowMode" >}} | [VoiceOverLogicFlowMode](/vext/ref/fb/voiceoverlogicflowmode) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverStructureNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverStructureNode {#constructor-0}

> **VoiceOverStructureNode**()

Creates a new [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode) frostbite instance.

### VoiceOverStructureNode {#constructor-1}

> **VoiceOverStructureNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverStructureNode {#constructor-2}

> **VoiceOverStructureNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode). |

### VoiceOverStructureNode {#constructor-3}

> **VoiceOverStructureNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode). |

## Properties

### {{% prop-heading "flowMode" %}}

> **[VoiceOverLogicFlowMode](/vext/ref/fb/voiceoverlogicflowmode)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode) type.

