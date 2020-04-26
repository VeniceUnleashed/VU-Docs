---
title: VoiceOverDialogTrack
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverDialogTrack](#constructor-0)**() |
| **[VoiceOverDialogTrack](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverDialogTrack](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "source" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection) \| nil |
| {{< prop "takeControl" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection) \| nil |
| {{< prop "takeIndexMapping" >}} | [VoiceOverDialogTakeMapping](/vext/ref/fb/voiceoverdialogtakemapping)[] |
| {{< prop "takeSwitching" >}} | [VoiceOverDialogTakeBehavior](/vext/ref/fb/voiceoverdialogtakebehavior) |
| {{< prop "clips" >}} | [VoiceOverDialogClip](/vext/ref/fb/voiceoverdialogclip)[] |
| {{< prop "samplerNode" >}} | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) \| nil |
| {{< prop "output" >}} | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) \| nil |
| {{< prop "queueGroup" >}} | [VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup) \| nil |
| {{< prop "parentTrackIndex" >}} | int |
| {{< prop "takeSwitchingOnResume" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverDialogTrack" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverDialogTrack {#constructor-0}
> **VoiceOverDialogTrack**()

Creates a new [VoiceOverDialogTrack](/vext/ref/fb/voiceoverdialogtrack) frostbite instance.

### VoiceOverDialogTrack {#constructor-1}
> **VoiceOverDialogTrack**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverDialogTrack](/vext/ref/fb/voiceoverdialogtrack) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverDialogTrack {#constructor-2}
> **VoiceOverDialogTrack**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverDialogTrack](/vext/ref/fb/voiceoverdialogtrack). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverDialogTrack](/vext/ref/fb/voiceoverdialogtrack). |

## Properties
### {{% prop-heading "source" %}}
> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)** | **nil**

### {{% prop-heading "takeControl" %}}
> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)** | **nil**

### {{% prop-heading "takeIndexMapping" %}}
> **[VoiceOverDialogTakeMapping](/vext/ref/fb/voiceoverdialogtakemapping)**[]

### {{% prop-heading "takeSwitching" %}}
> **[VoiceOverDialogTakeBehavior](/vext/ref/fb/voiceoverdialogtakebehavior)**

### {{% prop-heading "clips" %}}
> **[VoiceOverDialogClip](/vext/ref/fb/voiceoverdialogclip)**[]

### {{% prop-heading "samplerNode" %}}
> **[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)** | **nil**

### {{% prop-heading "output" %}}
> **[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)** | **nil**

### {{% prop-heading "queueGroup" %}}
> **[VoiceOverConversationQueueGroup](/vext/ref/fb/voiceoverconversationqueuegroup)** | **nil**

### {{% prop-heading "parentTrackIndex" %}}
> **int**

### {{% prop-heading "takeSwitchingOnResume" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverDialogTrack](/vext/ref/fb/voiceoverdialogtrack) type.

