---
title: VoiceOverSystemAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverSystemAsset](#constructor-0)**() |
| **[VoiceOverSystemAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverSystemAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[VoiceOverSystemAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "intervals" >}} | [VoiceOverInterval](/vext/ref/fb/voiceoverinterval)[] |
| {{< prop "labels" >}} | [VoiceOverLabel](/vext/ref/fb/voiceoverlabel)[] |
| {{< prop "types" >}} | [VoiceOverObject](/vext/ref/fb/voiceoverobject)[] |
| {{< prop "objects" >}} | [VoiceOverObject](/vext/ref/fb/voiceoverobject)[] |
| {{< prop "constants" >}} | [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue)[] |
| {{< prop "masterLanguage" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage) \| nil |
| {{< prop "defaultPronunciation" >}} | [VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation) \| nil |
| {{< prop "pronunciations" >}} | [VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation)[] |
| {{< prop "queueGroups" >}} | [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup)[] |
| {{< prop "defaultPositionedQueueGroup" >}} | [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup) \| nil |
| {{< prop "defaultUnpositionedQueueGroup" >}} | [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverSystemAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverSystemAsset {#constructor-0}
> **VoiceOverSystemAsset**()

Creates a new [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset) frostbite instance.

### VoiceOverSystemAsset {#constructor-1}
> **VoiceOverSystemAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverSystemAsset {#constructor-2}
> **VoiceOverSystemAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset). |

### VoiceOverSystemAsset {#constructor-3}
> **VoiceOverSystemAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset). |

## Properties
### {{% prop-heading "intervals" %}}
> **[VoiceOverInterval](/vext/ref/fb/voiceoverinterval)**[]

### {{% prop-heading "labels" %}}
> **[VoiceOverLabel](/vext/ref/fb/voiceoverlabel)**[]

### {{% prop-heading "types" %}}
> **[VoiceOverObject](/vext/ref/fb/voiceoverobject)**[]

### {{% prop-heading "objects" %}}
> **[VoiceOverObject](/vext/ref/fb/voiceoverobject)**[]

### {{% prop-heading "constants" %}}
> **[VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue)**[]

### {{% prop-heading "masterLanguage" %}}
> **[AudioLanguage](/vext/ref/fb/audiolanguage)** | **nil**

### {{% prop-heading "defaultPronunciation" %}}
> **[VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation)** | **nil**

### {{% prop-heading "pronunciations" %}}
> **[VoiceOverPronunciation](/vext/ref/fb/voiceoverpronunciation)**[]

### {{% prop-heading "queueGroups" %}}
> **[VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup)**[]

### {{% prop-heading "defaultPositionedQueueGroup" %}}
> **[VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup)** | **nil**

### {{% prop-heading "defaultUnpositionedQueueGroup" %}}
> **[VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverSystemAsset](/vext/ref/fb/voiceoversystemasset) type.

