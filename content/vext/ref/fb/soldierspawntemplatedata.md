---
title: SoldierSpawnTemplateData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[SoldierSpawnTemplateData](#constructor-0)**() |
| **[SoldierSpawnTemplateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoldierSpawnTemplateData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SoldierSpawnTemplateData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "customizeSoldierData" >}} | [CustomizeSoldierData](/vext/ref/fb/customizesoldierdata) \| nil |
| {{< prop "sensing" >}} | [GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata) \| nil |
| {{< prop "behaviour" >}} | [GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata) \| nil |
| {{< prop "animationTemplate" >}} | [AnimationSpawnTemplate](/vext/ref/fb/animationspawntemplate) \| nil |
| {{< prop "voiceOverLabels" >}} | [VoiceOverLabel](/vext/ref/fb/voiceoverlabel)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoldierSpawnTemplateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoldierSpawnTemplateData {#constructor-0}
> **SoldierSpawnTemplateData**()

Creates a new [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata) frostbite instance.

### SoldierSpawnTemplateData {#constructor-1}
> **SoldierSpawnTemplateData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoldierSpawnTemplateData {#constructor-2}
> **SoldierSpawnTemplateData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata). |

### SoldierSpawnTemplateData {#constructor-3}
> **SoldierSpawnTemplateData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata). |

## Properties
### {{% prop-heading "customizeSoldierData" %}}
> **[CustomizeSoldierData](/vext/ref/fb/customizesoldierdata)** | **nil**

### {{% prop-heading "sensing" %}}
> **[GameSensingTemplateData](/vext/ref/fb/gamesensingtemplatedata)** | **nil**

### {{% prop-heading "behaviour" %}}
> **[GameBehaviourTemplateData](/vext/ref/fb/gamebehaviourtemplatedata)** | **nil**

### {{% prop-heading "animationTemplate" %}}
> **[AnimationSpawnTemplate](/vext/ref/fb/animationspawntemplate)** | **nil**

### {{% prop-heading "voiceOverLabels" %}}
> **[VoiceOverLabel](/vext/ref/fb/voiceoverlabel)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoldierSpawnTemplateData](/vext/ref/fb/soldierspawntemplatedata) type.

