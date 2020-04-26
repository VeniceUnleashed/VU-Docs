---
title: VoiceOverLogicFlow
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverLogicFlow](#constructor-0)**() |
| **[VoiceOverLogicFlow](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverLogicFlow](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "group" >}} | [VoiceOverGroup](/vext/ref/fb/voiceovergroup) \| nil |
| {{< prop "locals" >}} | [VoiceOverValue](/vext/ref/fb/voiceovervalue)[] |
| {{< prop "roots" >}} | [VoiceOverEventNode](/vext/ref/fb/voiceovereventnode)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverLogicFlow" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverLogicFlow {#constructor-0}
> **VoiceOverLogicFlow**()

Creates a new [VoiceOverLogicFlow](/vext/ref/fb/voiceoverlogicflow) frostbite instance.

### VoiceOverLogicFlow {#constructor-1}
> **VoiceOverLogicFlow**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverLogicFlow](/vext/ref/fb/voiceoverlogicflow) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverLogicFlow {#constructor-2}
> **VoiceOverLogicFlow**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverLogicFlow](/vext/ref/fb/voiceoverlogicflow). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverLogicFlow](/vext/ref/fb/voiceoverlogicflow). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "group" %}}
> **[VoiceOverGroup](/vext/ref/fb/voiceovergroup)** | **nil**

### {{% prop-heading "locals" %}}
> **[VoiceOverValue](/vext/ref/fb/voiceovervalue)**[]

### {{% prop-heading "roots" %}}
> **[VoiceOverEventNode](/vext/ref/fb/voiceovereventnode)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverLogicFlow](/vext/ref/fb/voiceoverlogicflow) type.

