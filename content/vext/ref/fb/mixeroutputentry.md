---
title: MixerOutputEntry
---

Inherits from 
[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary
### Constructors
| |
| ----------- |
| **[MixerOutputEntry](#constructor-0)**() |
| **[MixerOutputEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MixerOutputEntry](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[MixerOutputEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "target" >}} | [AudioGraphParameter](/vext/ref/fb/audiographparameter) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MixerOutputEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MixerOutputEntry {#constructor-0}
> **MixerOutputEntry**()

Creates a new [MixerOutputEntry](/vext/ref/fb/mixeroutputentry) frostbite instance.

### MixerOutputEntry {#constructor-1}
> **MixerOutputEntry**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MixerOutputEntry](/vext/ref/fb/mixeroutputentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MixerOutputEntry {#constructor-2}
> **MixerOutputEntry**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [MixerOutputEntry](/vext/ref/fb/mixeroutputentry). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [MixerOutputEntry](/vext/ref/fb/mixeroutputentry). |

### MixerOutputEntry {#constructor-3}
> **MixerOutputEntry**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerOutputEntry](/vext/ref/fb/mixeroutputentry). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MixerOutputEntry](/vext/ref/fb/mixeroutputentry). |

## Properties
### {{% prop-heading "inValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "target" %}}
> **[AudioGraphParameter](/vext/ref/fb/audiographparameter)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MixerOutputEntry](/vext/ref/fb/mixeroutputentry) type.

