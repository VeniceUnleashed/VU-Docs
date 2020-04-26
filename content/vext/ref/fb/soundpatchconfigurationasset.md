---
title: SoundPatchConfigurationAsset
---

Inherits from 
[SoundAsset](/vext/ref/fb/soundasset)

## Summary
### Constructors
| |
| ----------- |
| **[SoundPatchConfigurationAsset](#constructor-0)**() |
| **[SoundPatchConfigurationAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundPatchConfigurationAsset](#constructor-2)**(other: [SoundAsset](/vext/ref/fb/soundasset)) |
| **[SoundPatchConfigurationAsset](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SoundPatchConfigurationAsset](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sound" >}} | [SoundPatchAsset](/vext/ref/fb/soundpatchasset) \| nil |
| {{< prop "entries" >}} | [SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry)[] |
| {{< prop "loudness" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundPatchConfigurationAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundPatchConfigurationAsset {#constructor-0}
> **SoundPatchConfigurationAsset**()

Creates a new [SoundPatchConfigurationAsset](/vext/ref/fb/soundpatchconfigurationasset) frostbite instance.

### SoundPatchConfigurationAsset {#constructor-1}
> **SoundPatchConfigurationAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundPatchConfigurationAsset](/vext/ref/fb/soundpatchconfigurationasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundPatchConfigurationAsset {#constructor-2}
> **SoundPatchConfigurationAsset**(other: [SoundAsset](/vext/ref/fb/soundasset))

Casts an instance of type [SoundAsset](/vext/ref/fb/soundasset) to [SoundPatchConfigurationAsset](/vext/ref/fb/soundpatchconfigurationasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SoundAsset](/vext/ref/fb/soundasset) | The instance to cast to [SoundPatchConfigurationAsset](/vext/ref/fb/soundpatchconfigurationasset). |

### SoundPatchConfigurationAsset {#constructor-3}
> **SoundPatchConfigurationAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SoundPatchConfigurationAsset](/vext/ref/fb/soundpatchconfigurationasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SoundPatchConfigurationAsset](/vext/ref/fb/soundpatchconfigurationasset). |

### SoundPatchConfigurationAsset {#constructor-4}
> **SoundPatchConfigurationAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundPatchConfigurationAsset](/vext/ref/fb/soundpatchconfigurationasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundPatchConfigurationAsset](/vext/ref/fb/soundpatchconfigurationasset). |

## Properties
### {{% prop-heading "sound" %}}
> **[SoundPatchAsset](/vext/ref/fb/soundpatchasset)** | **nil**

### {{% prop-heading "entries" %}}
> **[SoundPatchConfigurationEntry](/vext/ref/fb/soundpatchconfigurationentry)**[]

### {{% prop-heading "loudness" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundPatchConfigurationAsset](/vext/ref/fb/soundpatchconfigurationasset) type.

