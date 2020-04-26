---
title: BigWorldSetting
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[BigWorldSetting](#constructor-0)**() |
| **[BigWorldSetting](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[BigWorldSetting](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "minDistance" >}} | int |
| {{< prop "maxDistance" >}} | int |
| {{< prop "minDelayTimeInMinutes" >}} | float |
| {{< prop "maxDelayTimeInMinutes" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BigWorldSetting" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BigWorldSetting {#constructor-0}
> **BigWorldSetting**()

Creates a new [BigWorldSetting](/vext/ref/fb/bigworldsetting) frostbite instance.

### BigWorldSetting {#constructor-1}
> **BigWorldSetting**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [BigWorldSetting](/vext/ref/fb/bigworldsetting) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### BigWorldSetting {#constructor-2}
> **BigWorldSetting**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BigWorldSetting](/vext/ref/fb/bigworldsetting). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [BigWorldSetting](/vext/ref/fb/bigworldsetting). |

## Properties
### {{% prop-heading "sound" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "minDistance" %}}
> **int**

### {{% prop-heading "maxDistance" %}}
> **int**

### {{% prop-heading "minDelayTimeInMinutes" %}}
> **float**

### {{% prop-heading "maxDelayTimeInMinutes" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BigWorldSetting](/vext/ref/fb/bigworldsetting) type.

