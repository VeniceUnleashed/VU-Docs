---
title: SoundGraphAsset
---

Inherits from 
[SoundAsset](/vext/ref/fb/soundasset)

## Summary
### Constructors
| |
| ----------- |
| **[SoundGraphAsset](#constructor-0)**() |
| **[SoundGraphAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundGraphAsset](#constructor-2)**(other: [SoundAsset](/vext/ref/fb/soundasset)) |
| **[SoundGraphAsset](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SoundGraphAsset](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "graph" >}} | [SoundGraphData](/vext/ref/fb/soundgraphdata) \| nil |
| {{< prop "mixer" >}} | [MixerAsset](/vext/ref/fb/mixerasset) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundGraphAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundGraphAsset {#constructor-0}
> **SoundGraphAsset**()

Creates a new [SoundGraphAsset](/vext/ref/fb/soundgraphasset) frostbite instance.

### SoundGraphAsset {#constructor-1}
> **SoundGraphAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundGraphAsset](/vext/ref/fb/soundgraphasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundGraphAsset {#constructor-2}
> **SoundGraphAsset**(other: [SoundAsset](/vext/ref/fb/soundasset))

Casts an instance of type [SoundAsset](/vext/ref/fb/soundasset) to [SoundGraphAsset](/vext/ref/fb/soundgraphasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SoundAsset](/vext/ref/fb/soundasset) | The instance to cast to [SoundGraphAsset](/vext/ref/fb/soundgraphasset). |

### SoundGraphAsset {#constructor-3}
> **SoundGraphAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SoundGraphAsset](/vext/ref/fb/soundgraphasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SoundGraphAsset](/vext/ref/fb/soundgraphasset). |

### SoundGraphAsset {#constructor-4}
> **SoundGraphAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundGraphAsset](/vext/ref/fb/soundgraphasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundGraphAsset](/vext/ref/fb/soundgraphasset). |

## Properties
### {{% prop-heading "graph" %}}
> **[SoundGraphData](/vext/ref/fb/soundgraphdata)** | **nil**

### {{% prop-heading "mixer" %}}
> **[MixerAsset](/vext/ref/fb/mixerasset)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundGraphAsset](/vext/ref/fb/soundgraphasset) type.

