---
title: SoundGraphInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[SoundGraphInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "voices" >}} | [SoundGraphVoiceInfo](/vext/ref/fb/soundgraphvoiceinfo)[] |
| {{< prop "linkedPluginAttributes" >}} | [SoundGraphLinkedPluginAttribute](/vext/ref/fb/soundgraphlinkedpluginattribute)[] |
| {{< prop "connections" >}} | [SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection)[] |
| {{< prop "constructParams" >}} | [SoundGraphPluginConstructParam](/vext/ref/fb/soundgraphpluginconstructparam)[] |
| {{< prop "pluginsParamCount" >}} | int |
| {{< prop "pluginCount" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoundGraphInfo](/vext/ref/fb/soundgraphinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundGraphInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundGraphInfo {#constructor-0}
> **SoundGraphInfo**()

Creates a new [SoundGraphInfo](/vext/ref/fb/soundgraphinfo) frostbite structure.

## Properties
### {{% prop-heading "voices" %}}
> **[SoundGraphVoiceInfo](/vext/ref/fb/soundgraphvoiceinfo)**[]

### {{% prop-heading "linkedPluginAttributes" %}}
> **[SoundGraphLinkedPluginAttribute](/vext/ref/fb/soundgraphlinkedpluginattribute)**[]

### {{% prop-heading "connections" %}}
> **[SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection)**[]

### {{% prop-heading "constructParams" %}}
> **[SoundGraphPluginConstructParam](/vext/ref/fb/soundgraphpluginconstructparam)**[]

### {{% prop-heading "pluginsParamCount" %}}
> **int**

### {{% prop-heading "pluginCount" %}}
> **int**

## Methods
### Clone
> **Clone**(): [SoundGraphInfo](/vext/ref/fb/soundgraphinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoundGraphInfo](/vext/ref/fb/soundgraphinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundGraphInfo](/vext/ref/fb/soundgraphinfo) type.

