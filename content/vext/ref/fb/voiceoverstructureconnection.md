---
title: VoiceOverStructureConnection
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[VoiceOverStructureConnection](#constructor-0)**() |
| **[VoiceOverStructureConnection](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VoiceOverStructureConnection](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "targetNode" >}} | [VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode) \| nil |
| {{< prop "targetInput" >}} | [VoiceOverRelationshipInput](/vext/ref/fb/voiceoverrelationshipinput) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverStructureConnection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VoiceOverStructureConnection {#constructor-0}
> **VoiceOverStructureConnection**()

Creates a new [VoiceOverStructureConnection](/vext/ref/fb/voiceoverstructureconnection) frostbite instance.

### VoiceOverStructureConnection {#constructor-1}
> **VoiceOverStructureConnection**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VoiceOverStructureConnection](/vext/ref/fb/voiceoverstructureconnection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VoiceOverStructureConnection {#constructor-2}
> **VoiceOverStructureConnection**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VoiceOverStructureConnection](/vext/ref/fb/voiceoverstructureconnection). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VoiceOverStructureConnection](/vext/ref/fb/voiceoverstructureconnection). |

## Properties
### {{% prop-heading "targetNode" %}}
> **[VoiceOverStructureNode](/vext/ref/fb/voiceoverstructurenode)** | **nil**

### {{% prop-heading "targetInput" %}}
> **[VoiceOverRelationshipInput](/vext/ref/fb/voiceoverrelationshipinput)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VoiceOverStructureConnection](/vext/ref/fb/voiceoverstructureconnection) type.

