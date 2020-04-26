---
title: MixerEntry
---

Inherits from 
[AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary
### Constructors
| |
| ----------- |
| **[MixerEntry](#constructor-0)**() |
| **[MixerEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MixerEntry](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[MixerEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "amplitude" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "plugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MixerEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MixerEntry {#constructor-0}
> **MixerEntry**()

Creates a new [MixerEntry](/vext/ref/fb/mixerentry) frostbite instance.

### MixerEntry {#constructor-1}
> **MixerEntry**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MixerEntry](/vext/ref/fb/mixerentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MixerEntry {#constructor-2}
> **MixerEntry**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [MixerEntry](/vext/ref/fb/mixerentry). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [MixerEntry](/vext/ref/fb/mixerentry). |

### MixerEntry {#constructor-3}
> **MixerEntry**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerEntry](/vext/ref/fb/mixerentry). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MixerEntry](/vext/ref/fb/mixerentry). |

## Properties
### {{% prop-heading "inValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "amplitude" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "plugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MixerEntry](/vext/ref/fb/mixerentry) type.

