---
title: SamplerPlugins
---


## Summary
### Constructors
| |
| ----------- |
| **[SamplerPlugins](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "sndPlayer" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "resample" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "pause" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "gain" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SamplerPlugins](/vext/ref/fb/samplerplugins) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SamplerPlugins" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SamplerPlugins {#constructor-0}
> **SamplerPlugins**()

Creates a new [SamplerPlugins](/vext/ref/fb/samplerplugins) frostbite structure.

## Properties
### {{% prop-heading "sndPlayer" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "resample" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "pause" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "gain" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Methods
### Clone
> **Clone**(): [SamplerPlugins](/vext/ref/fb/samplerplugins)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SamplerPlugins](/vext/ref/fb/samplerplugins)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SamplerPlugins](/vext/ref/fb/samplerplugins) type.

