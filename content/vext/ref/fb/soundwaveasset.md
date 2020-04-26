---
title: SoundWaveAsset
---

Inherits from 
[SoundDataAsset](/vext/ref/fb/sounddataasset)

## Summary
### Constructors
| |
| ----------- |
| **[SoundWaveAsset](#constructor-0)**() |
| **[SoundWaveAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundWaveAsset](#constructor-2)**(other: [SoundDataAsset](/vext/ref/fb/sounddataasset)) |
| **[SoundWaveAsset](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SoundWaveAsset](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "variations" >}} | [SoundWaveVariation](/vext/ref/fb/soundwavevariation)[] |
| {{< prop "localization" >}} | [SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo)[] |
| {{< prop "subtitleStringIds" >}} | string[] |
| {{< prop "selection" >}} | [SoundWaveVariationSelection](/vext/ref/fb/soundwavevariationselection) |
| {{< prop "streamPool" >}} | [StreamPoolAsset](/vext/ref/fb/streampoolasset) \| nil |
| {{< prop "seekable" >}} | bool |
| {{< prop "preferAvailableVariations" >}} | bool |
| {{< prop "persistentVariationCount" >}} | int |
| {{< prop "channelCount" >}} | int |
| {{< prop "voicePriority" >}} | int |
| {{< prop "primePriority" >}} | int |
| {{< prop "requestPriority" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundWaveAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundWaveAsset {#constructor-0}
> **SoundWaveAsset**()

Creates a new [SoundWaveAsset](/vext/ref/fb/soundwaveasset) frostbite instance.

### SoundWaveAsset {#constructor-1}
> **SoundWaveAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundWaveAsset](/vext/ref/fb/soundwaveasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundWaveAsset {#constructor-2}
> **SoundWaveAsset**(other: [SoundDataAsset](/vext/ref/fb/sounddataasset))

Casts an instance of type [SoundDataAsset](/vext/ref/fb/sounddataasset) to [SoundWaveAsset](/vext/ref/fb/soundwaveasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SoundDataAsset](/vext/ref/fb/sounddataasset) | The instance to cast to [SoundWaveAsset](/vext/ref/fb/soundwaveasset). |

### SoundWaveAsset {#constructor-3}
> **SoundWaveAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SoundWaveAsset](/vext/ref/fb/soundwaveasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SoundWaveAsset](/vext/ref/fb/soundwaveasset). |

### SoundWaveAsset {#constructor-4}
> **SoundWaveAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundWaveAsset](/vext/ref/fb/soundwaveasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundWaveAsset](/vext/ref/fb/soundwaveasset). |

## Properties
### {{% prop-heading "variations" %}}
> **[SoundWaveVariation](/vext/ref/fb/soundwavevariation)**[]

### {{% prop-heading "localization" %}}
> **[SoundWaveLocalizationInfo](/vext/ref/fb/soundwavelocalizationinfo)**[]

### {{% prop-heading "subtitleStringIds" %}}
> **string**[]

### {{% prop-heading "selection" %}}
> **[SoundWaveVariationSelection](/vext/ref/fb/soundwavevariationselection)**

### {{% prop-heading "streamPool" %}}
> **[StreamPoolAsset](/vext/ref/fb/streampoolasset)** | **nil**

### {{% prop-heading "seekable" %}}
> **bool**

### {{% prop-heading "preferAvailableVariations" %}}
> **bool**

### {{% prop-heading "persistentVariationCount" %}}
> **int**

### {{% prop-heading "channelCount" %}}
> **int**

### {{% prop-heading "voicePriority" %}}
> **int**

### {{% prop-heading "primePriority" %}}
> **int**

### {{% prop-heading "requestPriority" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundWaveAsset](/vext/ref/fb/soundwaveasset) type.

