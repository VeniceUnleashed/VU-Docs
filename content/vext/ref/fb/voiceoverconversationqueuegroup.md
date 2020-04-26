---
title: VoiceOverConversationQueueGroup
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverConversationQueueGroup](#constructor-0)**() |
| **[VoiceOverConversationQueueGroup](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverConversationQueueGroup](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "polyphonyMode" >}} | [VoiceOverConversationQueueGroupPolyphony](/vext/ref/fb/voiceoverconversationqueuegrouppolyphony) |
| {{< prop "polyphony" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverConversationQueueGroup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverConversationQueueGroup {#constructor-0}
> **VoiceOverConversationQueueGroup**()

Creates a new [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup) frostbite instance.

### VoiceOverConversationQueueGroup {#constructor-1}
> **VoiceOverConversationQueueGroup**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverConversationQueueGroup {#constructor-2}
> **VoiceOverConversationQueueGroup**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "polyphonyMode" %}}
> **[VoiceOverConversationQueueGroupPolyphony](/vext/ref/fb/voiceoverconversationqueuegrouppolyphony)**

### {{% prop-heading "polyphony" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup) type.

