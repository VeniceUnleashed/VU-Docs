---
title: VoiceOverGroup
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverGroup](#constructor-0)**() |
| **[VoiceOverGroup](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverGroup](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "priority" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverGroup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverGroup {#constructor-0}
> **VoiceOverGroup**()

Creates a new [VoiceOverGroup](/vext/ref/fb/voiceovergroup) frostbite instance.

### VoiceOverGroup {#constructor-1}
> **VoiceOverGroup**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverGroup](/vext/ref/fb/voiceovergroup) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverGroup {#constructor-2}
> **VoiceOverGroup**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverGroup](/vext/ref/fb/voiceovergroup). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverGroup](/vext/ref/fb/voiceovergroup). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "priority" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverGroup](/vext/ref/fb/voiceovergroup) type.

