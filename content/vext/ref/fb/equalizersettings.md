---
title: EqualizerSettings
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[EqualizerSettings](#constructor-0)**() |
| **[EqualizerSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EqualizerSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "lowShelfFrequency" >}} | float |
| {{< prop "lowShelfGain" >}} | float |
| {{< prop "highShelfFrequency" >}} | float |
| {{< prop "highShelfGain" >}} | float |
| {{< prop "hpCutoffFrequency" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EqualizerSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EqualizerSettings {#constructor-0}
> **EqualizerSettings**()

Creates a new [EqualizerSettings](/vext/ref/fb/equalizersettings) frostbite instance.

### EqualizerSettings {#constructor-1}
> **EqualizerSettings**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EqualizerSettings](/vext/ref/fb/equalizersettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EqualizerSettings {#constructor-2}
> **EqualizerSettings**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EqualizerSettings](/vext/ref/fb/equalizersettings). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EqualizerSettings](/vext/ref/fb/equalizersettings). |

## Properties
### {{% prop-heading "lowShelfFrequency" %}}
> **float**

### {{% prop-heading "lowShelfGain" %}}
> **float**

### {{% prop-heading "highShelfFrequency" %}}
> **float**

### {{% prop-heading "highShelfGain" %}}
> **float**

### {{% prop-heading "hpCutoffFrequency" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EqualizerSettings](/vext/ref/fb/equalizersettings) type.

