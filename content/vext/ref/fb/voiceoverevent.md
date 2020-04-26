---
title: VoiceOverEvent
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverEvent](#constructor-0)**() |
| **[VoiceOverEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverEvent](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "parameters" >}} | [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue)[] |
| {{< prop "owner" >}} | [Asset](/vext/ref/fb/asset) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverEvent {#constructor-0}
> **VoiceOverEvent**()

Creates a new [VoiceOverEvent](/vext/ref/fb/voiceoverevent) frostbite instance.

### VoiceOverEvent {#constructor-1}
> **VoiceOverEvent**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverEvent](/vext/ref/fb/voiceoverevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverEvent {#constructor-2}
> **VoiceOverEvent**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverEvent](/vext/ref/fb/voiceoverevent). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverEvent](/vext/ref/fb/voiceoverevent). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "parameters" %}}
> **[VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue)**[]

### {{% prop-heading "owner" %}}
> **[Asset](/vext/ref/fb/asset)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverEvent](/vext/ref/fb/voiceoverevent) type.

