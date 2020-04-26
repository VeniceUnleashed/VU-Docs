---
title: EffectManagerSettings
---

Inherits from 
[SystemSettings](/vext/ref/fb/systemsettings)

## Summary
### Constructors
| |
| ----------- |
| **[EffectManagerSettings](#constructor-0)**() |
| **[EffectManagerSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EffectManagerSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[EffectManagerSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "maxNewEffectsPerFrameCount" >}} | int |
| {{< prop "sizeToGrowNewEffectsContainer" >}} | int |
| {{< prop "effectQuality" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EffectManagerSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EffectManagerSettings {#constructor-0}
> **EffectManagerSettings**()

Creates a new [EffectManagerSettings](/vext/ref/fb/effectmanagersettings) frostbite instance.

### EffectManagerSettings {#constructor-1}
> **EffectManagerSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EffectManagerSettings](/vext/ref/fb/effectmanagersettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EffectManagerSettings {#constructor-2}
> **EffectManagerSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [EffectManagerSettings](/vext/ref/fb/effectmanagersettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [EffectManagerSettings](/vext/ref/fb/effectmanagersettings). |

### EffectManagerSettings {#constructor-3}
> **EffectManagerSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EffectManagerSettings](/vext/ref/fb/effectmanagersettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EffectManagerSettings](/vext/ref/fb/effectmanagersettings). |

## Properties
### {{% prop-heading "maxNewEffectsPerFrameCount" %}}
> **int**

### {{% prop-heading "sizeToGrowNewEffectsContainer" %}}
> **int**

### {{% prop-heading "effectQuality" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EffectManagerSettings](/vext/ref/fb/effectmanagersettings) type.

