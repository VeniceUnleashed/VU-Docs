---
title: MixerReceiveEntry
---

Inherits from 
[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary
### Constructors
| |
| ----------- |
| **[MixerReceiveEntry](#constructor-0)**() |
| **[MixerReceiveEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MixerReceiveEntry](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[MixerReceiveEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "source" >}} | [AudioGraphParameter](/vext/ref/fb/audiographparameter) \| nil |
| {{< prop "mixer" >}} | [MixerAsset](/vext/ref/fb/mixerasset) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MixerReceiveEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MixerReceiveEntry {#constructor-0}
> **MixerReceiveEntry**()

Creates a new [MixerReceiveEntry](/vext/ref/fb/mixerreceiveentry) frostbite instance.

### MixerReceiveEntry {#constructor-1}
> **MixerReceiveEntry**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MixerReceiveEntry](/vext/ref/fb/mixerreceiveentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MixerReceiveEntry {#constructor-2}
> **MixerReceiveEntry**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [MixerReceiveEntry](/vext/ref/fb/mixerreceiveentry). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [MixerReceiveEntry](/vext/ref/fb/mixerreceiveentry). |

### MixerReceiveEntry {#constructor-3}
> **MixerReceiveEntry**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerReceiveEntry](/vext/ref/fb/mixerreceiveentry). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MixerReceiveEntry](/vext/ref/fb/mixerreceiveentry). |

## Properties
### {{% prop-heading "out" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "source" %}}
> **[AudioGraphParameter](/vext/ref/fb/audiographparameter)** | **nil**

### {{% prop-heading "mixer" %}}
> **[MixerAsset](/vext/ref/fb/mixerasset)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MixerReceiveEntry](/vext/ref/fb/mixerreceiveentry) type.

