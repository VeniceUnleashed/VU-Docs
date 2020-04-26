---
title: VoiceOverConversationQueueGroup
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverConversationQueueGroup](#constructor-0)**() |
| **[VoiceOverConversationQueueGroup](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverConversationQueueGroup](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "polyphonyMode" >}} | [VoiceOverConversationQueueGroupPolyphony](/vext/ref/fb/voiceoverconversationqueuegrouppolyphony) |
| {{< prop "polyphony" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverConversationQueueGroup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverConversationQueueGroup {#constructor-0}

> **VoiceOverConversationQueueGroup**()

Creates a new [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup) frostbite instance.

### VoiceOverConversationQueueGroup {#constructor-1}

> **VoiceOverConversationQueueGroup**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverConversationQueueGroup {#constructor-2}

> **VoiceOverConversationQueueGroup**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup). |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "polyphonyMode" %}}

> **[VoiceOverConversationQueueGroupPolyphony](/vext/ref/fb/voiceoverconversationqueuegrouppolyphony)**

### {{% prop-heading "polyphony" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup) type.

