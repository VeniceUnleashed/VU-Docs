---
title: EntityVoiceOverInfo
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[EntityVoiceOverInfo](#constructor-0)**() |
| **[EntityVoiceOverInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EntityVoiceOverInfo](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "voiceOverType" >}} | [VoiceOverObject](/vext/ref/fb/voiceoverobject) \| nil |
| {{< prop "labels" >}} | [VoiceOverLabel](/vext/ref/fb/voiceoverlabel)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EntityVoiceOverInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EntityVoiceOverInfo {#constructor-0}
> **EntityVoiceOverInfo**()

Creates a new [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo) frostbite instance.

### EntityVoiceOverInfo {#constructor-1}
> **EntityVoiceOverInfo**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EntityVoiceOverInfo {#constructor-2}
> **EntityVoiceOverInfo**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo). |

## Properties
### {{% prop-heading "voiceOverType" %}}
> **[VoiceOverObject](/vext/ref/fb/voiceoverobject)** | **nil**

### {{% prop-heading "labels" %}}
> **[VoiceOverLabel](/vext/ref/fb/voiceoverlabel)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EntityVoiceOverInfo](/vext/ref/fb/entityvoiceoverinfo) type.

