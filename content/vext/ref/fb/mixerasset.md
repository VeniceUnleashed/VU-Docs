---
title: MixerAsset
---

Inherits from 
[Asset](/vext/ref/fb/asset)

## Summary
### Constructors
| |
| ----------- |
| **[MixerAsset](#constructor-0)**() |
| **[MixerAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MixerAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[MixerAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "graph" >}} | [MixerGraphData](/vext/ref/fb/mixergraphdata) \| nil |
| {{< prop "presets" >}} | [MixerPreset](/vext/ref/fb/mixerpreset)[] |
| {{< prop "defaultPreset" >}} | [MixerPreset](/vext/ref/fb/mixerpreset) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MixerAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MixerAsset {#constructor-0}
> **MixerAsset**()

Creates a new [MixerAsset](/vext/ref/fb/mixerasset) frostbite instance.

### MixerAsset {#constructor-1}
> **MixerAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MixerAsset](/vext/ref/fb/mixerasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MixerAsset {#constructor-2}
> **MixerAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [MixerAsset](/vext/ref/fb/mixerasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [MixerAsset](/vext/ref/fb/mixerasset). |

### MixerAsset {#constructor-3}
> **MixerAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerAsset](/vext/ref/fb/mixerasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MixerAsset](/vext/ref/fb/mixerasset). |

## Properties
### {{% prop-heading "graph" %}}
> **[MixerGraphData](/vext/ref/fb/mixergraphdata)** | **nil**

### {{% prop-heading "presets" %}}
> **[MixerPreset](/vext/ref/fb/mixerpreset)**[]

### {{% prop-heading "defaultPreset" %}}
> **[MixerPreset](/vext/ref/fb/mixerpreset)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MixerAsset](/vext/ref/fb/mixerasset) type.

