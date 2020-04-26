---
title: SoundState
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[SoundState](#constructor-0)**() |
| **[SoundState](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundState](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "lpCutoffFrequency" >}} | float |
| {{< prop "duration" >}} | float |
| {{< prop "fadeInTime" >}} | float |
| {{< prop "fadeOutTime" >}} | float |
| {{< prop "bypassSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "hdrSetting" >}} | [HdrSetting](/vext/ref/fb/hdrsetting) \| nil |
| {{< prop "mixer" >}} | [MixerAsset](/vext/ref/fb/mixerasset) \| nil |
| {{< prop "fadeSound" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundState" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundState {#constructor-0}
> **SoundState**()

Creates a new [SoundState](/vext/ref/fb/soundstate) frostbite instance.

### SoundState {#constructor-1}
> **SoundState**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundState](/vext/ref/fb/soundstate) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundState {#constructor-2}
> **SoundState**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundState](/vext/ref/fb/soundstate). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundState](/vext/ref/fb/soundstate). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "lpCutoffFrequency" %}}
> **float**

### {{% prop-heading "duration" %}}
> **float**

### {{% prop-heading "fadeInTime" %}}
> **float**

### {{% prop-heading "fadeOutTime" %}}
> **float**

### {{% prop-heading "bypassSound" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "hdrSetting" %}}
> **[HdrSetting](/vext/ref/fb/hdrsetting)** | **nil**

### {{% prop-heading "mixer" %}}
> **[MixerAsset](/vext/ref/fb/mixerasset)** | **nil**

### {{% prop-heading "fadeSound" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundState](/vext/ref/fb/soundstate) type.

