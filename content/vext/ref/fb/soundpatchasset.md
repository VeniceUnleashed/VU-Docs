---
title: SoundPatchAsset
---

Inherits from 
[SoundGraphAsset](/vext/ref/fb/soundgraphasset)

## Summary
### Constructors
| |
| ----------- |
| **[SoundPatchAsset](#constructor-0)**() |
| **[SoundPatchAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundPatchAsset](#constructor-2)**(other: [SoundGraphAsset](/vext/ref/fb/soundgraphasset)) |
| **[SoundPatchAsset](#constructor-3)**(other: [SoundAsset](/vext/ref/fb/soundasset)) |
| **[SoundPatchAsset](#constructor-4)**(other: [Asset](/vext/ref/fb/asset)) |
| **[SoundPatchAsset](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "outputNodes" >}} | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)[] |
| {{< prop "loudness" >}} | float |
| {{< prop "aiLoudness" >}} | float |
| {{< prop "radius" >}} | float |
| {{< prop "dopplerFactor" >}} | float |
| {{< prop "masterPitch" >}} | float |
| {{< prop "mixGroup" >}} | [MixGroup](/vext/ref/fb/mixgroup) \| nil |
| {{< prop "defaultStopEvent" >}} | [AudioGraphEvent](/vext/ref/fb/audiographevent) \| nil |
| {{< prop "defaultStartEvent" >}} | [AudioGraphEvent](/vext/ref/fb/audiographevent) \| nil |
| {{< prop "defaultForceInitEvent" >}} | [AudioGraphEvent](/vext/ref/fb/audiographevent) \| nil |
| {{< prop "defaultEnterScopeEvent" >}} | [AudioGraphEvent](/vext/ref/fb/audiographevent) \| nil |
| {{< prop "isPersistent" >}} | bool |
| {{< prop "isLooping" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundPatchAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundPatchAsset {#constructor-0}
> **SoundPatchAsset**()

Creates a new [SoundPatchAsset](/vext/ref/fb/soundpatchasset) frostbite instance.

### SoundPatchAsset {#constructor-1}
> **SoundPatchAsset**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundPatchAsset](/vext/ref/fb/soundpatchasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundPatchAsset {#constructor-2}
> **SoundPatchAsset**(other: [SoundGraphAsset](/vext/ref/fb/soundgraphasset))

Casts an instance of type [SoundGraphAsset](/vext/ref/fb/soundgraphasset) to [SoundPatchAsset](/vext/ref/fb/soundpatchasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SoundGraphAsset](/vext/ref/fb/soundgraphasset) | The instance to cast to [SoundPatchAsset](/vext/ref/fb/soundpatchasset). |

### SoundPatchAsset {#constructor-3}
> **SoundPatchAsset**(other: [SoundAsset](/vext/ref/fb/soundasset))

Casts an instance of type [SoundAsset](/vext/ref/fb/soundasset) to [SoundPatchAsset](/vext/ref/fb/soundpatchasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SoundAsset](/vext/ref/fb/soundasset) | The instance to cast to [SoundPatchAsset](/vext/ref/fb/soundpatchasset). |

### SoundPatchAsset {#constructor-4}
> **SoundPatchAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [SoundPatchAsset](/vext/ref/fb/soundpatchasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [SoundPatchAsset](/vext/ref/fb/soundpatchasset). |

### SoundPatchAsset {#constructor-5}
> **SoundPatchAsset**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundPatchAsset](/vext/ref/fb/soundpatchasset). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundPatchAsset](/vext/ref/fb/soundpatchasset). |

## Properties
### {{% prop-heading "outputNodes" %}}
> **[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)**[]

### {{% prop-heading "loudness" %}}
> **float**

### {{% prop-heading "aiLoudness" %}}
> **float**

### {{% prop-heading "radius" %}}
> **float**

### {{% prop-heading "dopplerFactor" %}}
> **float**

### {{% prop-heading "masterPitch" %}}
> **float**

### {{% prop-heading "mixGroup" %}}
> **[MixGroup](/vext/ref/fb/mixgroup)** | **nil**

### {{% prop-heading "defaultStopEvent" %}}
> **[AudioGraphEvent](/vext/ref/fb/audiographevent)** | **nil**

### {{% prop-heading "defaultStartEvent" %}}
> **[AudioGraphEvent](/vext/ref/fb/audiographevent)** | **nil**

### {{% prop-heading "defaultForceInitEvent" %}}
> **[AudioGraphEvent](/vext/ref/fb/audiographevent)** | **nil**

### {{% prop-heading "defaultEnterScopeEvent" %}}
> **[AudioGraphEvent](/vext/ref/fb/audiographevent)** | **nil**

### {{% prop-heading "isPersistent" %}}
> **bool**

### {{% prop-heading "isLooping" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundPatchAsset](/vext/ref/fb/soundpatchasset) type.

