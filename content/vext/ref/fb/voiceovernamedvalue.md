---
title: VoiceOverNamedValue
---

Inherits from 
[VoiceOverValue](/vext/ref/fb/voiceovervalue)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverNamedValue](#constructor-0)**() |
| **[VoiceOverNamedValue](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverNamedValue](#constructor-2)**(other: [VoiceOverValue](/vext/ref/fb/voiceovervalue)) |
| **[VoiceOverNamedValue](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverNamedValue" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverNamedValue {#constructor-0}
> **VoiceOverNamedValue**()

Creates a new [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue) frostbite instance.

### VoiceOverNamedValue {#constructor-1}
> **VoiceOverNamedValue**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverNamedValue {#constructor-2}
> **VoiceOverNamedValue**(other: [VoiceOverValue](/vext/ref/fb/voiceovervalue))

Casts an instance of type [VoiceOverValue](/vext/ref/fb/voiceovervalue) to [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverValue](/vext/ref/fb/voiceovervalue) | The instance to cast to [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue). |

### VoiceOverNamedValue {#constructor-3}
> **VoiceOverNamedValue**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue). |

## Properties
### {{% prop-heading "name" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue) type.

