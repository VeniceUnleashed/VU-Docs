---
title: SoundEnvironmentConstantData
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[SoundEnvironmentConstantData](#constructor-0)**() |
| **[SoundEnvironmentConstantData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundEnvironmentConstantData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SoundEnvironmentConstantData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "humanPlayerSoldierMovementVolumeOverride" >}} | float |
| {{< prop "memoryTime" >}} | float |
| {{< prop "minimumLoudness" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundEnvironmentConstantData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundEnvironmentConstantData {#constructor-0}
> **SoundEnvironmentConstantData**()

Creates a new [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata) frostbite instance.

### SoundEnvironmentConstantData {#constructor-1}
> **SoundEnvironmentConstantData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundEnvironmentConstantData {#constructor-2}
> **SoundEnvironmentConstantData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata). |

### SoundEnvironmentConstantData {#constructor-3}
> **SoundEnvironmentConstantData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata). |

## Properties
### {{% prop-heading "humanPlayerSoldierMovementVolumeOverride" %}}
> **float**

### {{% prop-heading "memoryTime" %}}
> **float**

### {{% prop-heading "minimumLoudness" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundEnvironmentConstantData](/vext/ref/fb/soundenvironmentconstantdata) type.

