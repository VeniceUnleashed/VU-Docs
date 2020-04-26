---
title: VoiceOverGlobalConstantValue
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverGlobalConstantValue](#constructor-0)**() |
| **[VoiceOverGlobalConstantValue](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverGlobalConstantValue](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "source" >}} | [VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverGlobalConstantValue" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverGlobalConstantValue {#constructor-0}
> **VoiceOverGlobalConstantValue**()

Creates a new [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue) frostbite instance.

### VoiceOverGlobalConstantValue {#constructor-1}
> **VoiceOverGlobalConstantValue**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverGlobalConstantValue {#constructor-2}
> **VoiceOverGlobalConstantValue**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "source" %}}
> **[VoiceOverConstantValue](/vext/ref/fb/voiceoverconstantvalue)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverGlobalConstantValue](/vext/ref/fb/voiceoverglobalconstantvalue) type.

