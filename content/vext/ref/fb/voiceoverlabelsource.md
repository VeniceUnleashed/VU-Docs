---
title: VoiceOverLabelSource
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverLabelSource](#constructor-0)**() |
| **[VoiceOverLabelSource](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverLabelSource](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "source" >}} | [VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverLabelSource" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverLabelSource {#constructor-0}
> **VoiceOverLabelSource**()

Creates a new [VoiceOverLabelSource](/vext/ref/fb/voiceoverlabelsource) frostbite instance.

### VoiceOverLabelSource {#constructor-1}
> **VoiceOverLabelSource**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverLabelSource](/vext/ref/fb/voiceoverlabelsource) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverLabelSource {#constructor-2}
> **VoiceOverLabelSource**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverLabelSource](/vext/ref/fb/voiceoverlabelsource). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverLabelSource](/vext/ref/fb/voiceoverlabelsource). |

## Properties
### {{% prop-heading "source" %}}
> **[VoiceOverValueConnection](/vext/ref/fb/voiceovervalueconnection)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverLabelSource](/vext/ref/fb/voiceoverlabelsource) type.

