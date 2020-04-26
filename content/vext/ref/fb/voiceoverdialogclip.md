---
title: VoiceOverDialogClip
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverDialogClip](#constructor-0)**() |
| **[VoiceOverDialogClip](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverDialogClip](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "offset" >}} | float |
| {{< prop "takes" >}} | [VoiceOverDialogTake](/vext/ref/fb/voiceoverdialogtake)[] |
| {{< prop "offsetReferences" >}} | [VoiceOverDialogClip](/vext/ref/fb/voiceoverdialogclip)[] |
| {{< prop "events" >}} | [VoiceOverDialogClipEvents](/vext/ref/fb/voiceoverdialogclipevents) \| nil |
| {{< prop "sequenceIndex" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverDialogClip" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverDialogClip {#constructor-0}
> **VoiceOverDialogClip**()

Creates a new [VoiceOverDialogClip](/vext/ref/fb/voiceoverdialogclip) frostbite instance.

### VoiceOverDialogClip {#constructor-1}
> **VoiceOverDialogClip**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverDialogClip](/vext/ref/fb/voiceoverdialogclip) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverDialogClip {#constructor-2}
> **VoiceOverDialogClip**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverDialogClip](/vext/ref/fb/voiceoverdialogclip). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverDialogClip](/vext/ref/fb/voiceoverdialogclip). |

## Properties
### {{% prop-heading "offset" %}}
> **float**

### {{% prop-heading "takes" %}}
> **[VoiceOverDialogTake](/vext/ref/fb/voiceoverdialogtake)**[]

### {{% prop-heading "offsetReferences" %}}
> **[VoiceOverDialogClip](/vext/ref/fb/voiceoverdialogclip)**[]

### {{% prop-heading "events" %}}
> **[VoiceOverDialogClipEvents](/vext/ref/fb/voiceoverdialogclipevents)** | **nil**

### {{% prop-heading "sequenceIndex" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverDialogClip](/vext/ref/fb/voiceoverdialogclip) type.

