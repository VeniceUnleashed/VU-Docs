---
title: SoundWaveLocalizationInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[SoundWaveLocalizationInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "language" >}} | [AudioLanguage](/vext/ref/fb/audiolanguage) \| nil |
| {{< prop "firstVariationIndex" >}} | int |
| {{< prop "variationCount" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundWaveLocalizationInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundWaveLocalizationInfo {#constructor-0}
> **SoundWaveLocalizationInfo**()

Creates a new [SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo) frostbite structure.

## Properties
### {{% prop-heading "language" %}}
> **[AudioLanguage](/vext/ref/fb/audiolanguage)** | **nil**

### {{% prop-heading "firstVariationIndex" %}}
> **int**

### {{% prop-heading "variationCount" %}}
> **int**

## Methods
### Clone
> **Clone**(): [SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo) type.

