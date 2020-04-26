---
title: VoiceOverConversationNode
---

Inherits from [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverConversationNode](#constructor-0)**() |
| **[VoiceOverConversationNode](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverConversationNode](#constructor-2)**(other: [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)) |
| **[VoiceOverConversationNode](#constructor-3)**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode)) |
| **[VoiceOverConversationNode](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "groups" >}} | [VoiceOverDialogGroup](/vext/ref/fb/voiceoverdialoggroup)[] |
| {{< prop "condition" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)[] |
| {{< prop "interval" >}} | [VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode) \| nil |
| {{< prop "finishedRelationship" >}} | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)[] |
| {{< prop "blockedRelationship" >}} | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)[] |
| {{< prop "conditionMode" >}} | [VoiceOverContainerConditionMode](/vext/ref/fb/voiceovercontainerconditionmode) |
| {{< prop "probability" >}} | float |
| {{< prop "pronunciation" >}} | [VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation) \| nil |
| {{< prop "interruptMode" >}} | [VoiceOverConversationInterruptMode](/vext/ref/fb/voiceoverconversationinterruptmode) |
| {{< prop "priority" >}} | int |
| {{< prop "queueMode" >}} | [VoiceOverConversationQueueMode](/vext/ref/fb/voiceoverconversationqueuemode) |
| {{< prop "relevancy" >}} | float |
| {{< prop "trackCount" >}} | int |
| {{< prop "lastSequenceIndex" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverConversationNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverConversationNode {#constructor-0}

> **VoiceOverConversationNode**()

Creates a new [VoiceOverConversationNode](/vext/ref/fb/voiceoverconversationnode) frostbite instance.

### VoiceOverConversationNode {#constructor-1}

> **VoiceOverConversationNode**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverConversationNode](/vext/ref/fb/voiceoverconversationnode) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverConversationNode {#constructor-2}

> **VoiceOverConversationNode**(other: [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode))

Casts an instance of type [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode) to [VoiceOverConversationNode](/vext/ref/fb/voiceoverconversationnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode) | The instance to cast to [VoiceOverConversationNode](/vext/ref/fb/voiceoverconversationnode). |

### VoiceOverConversationNode {#constructor-3}

> **VoiceOverConversationNode**(other: [VoiceOverNode](/vext/ref/fb/voiceovernode))

Casts an instance of type [VoiceOverNode](/vext/ref/fb/voiceovernode) to [VoiceOverConversationNode](/vext/ref/fb/voiceoverconversationnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverNode](/vext/ref/fb/voiceovernode) | The instance to cast to [VoiceOverConversationNode](/vext/ref/fb/voiceoverconversationnode). |

### VoiceOverConversationNode {#constructor-4}

> **VoiceOverConversationNode**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverConversationNode](/vext/ref/fb/voiceoverconversationnode). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverConversationNode](/vext/ref/fb/voiceoverconversationnode). |

## Properties

### {{% prop-heading "groups" %}}

> **[VoiceOverDialogGroup](/vext/ref/fb/voiceoverdialoggroup)**[]

### {{% prop-heading "condition" %}}

> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)**[]

### {{% prop-heading "interval" %}}

> **[VoiceOverIntervalNode](/vext/ref/fb/voiceoverintervalnode)** \| **nil**

### {{% prop-heading "finishedRelationship" %}}

> **[VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)**[]

### {{% prop-heading "blockedRelationship" %}}

> **[VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)**[]

### {{% prop-heading "conditionMode" %}}

> **[VoiceOverContainerConditionMode](/vext/ref/fb/voiceovercontainerconditionmode)**

### {{% prop-heading "probability" %}}

> **float**

### {{% prop-heading "pronunciation" %}}

> **[VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation)** \| **nil**

### {{% prop-heading "interruptMode" %}}

> **[VoiceOverConversationInterruptMode](/vext/ref/fb/voiceoverconversationinterruptmode)**

### {{% prop-heading "priority" %}}

> **int**

### {{% prop-heading "queueMode" %}}

> **[VoiceOverConversationQueueMode](/vext/ref/fb/voiceoverconversationqueuemode)**

### {{% prop-heading "relevancy" %}}

> **float**

### {{% prop-heading "trackCount" %}}

> **int**

### {{% prop-heading "lastSequenceIndex" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverConversationNode](/vext/ref/fb/voiceoverconversationnode) type.

