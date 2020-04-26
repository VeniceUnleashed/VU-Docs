---
title: SoundGraphPluginConstructParam
---


## Summary
### Constructors
| |
| ----------- |
| **[SoundGraphPluginConstructParam](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | float |
| {{< prop "index" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoundGraphPluginConstructParam](/vext/ref/fb/soundgraphpluginconstructparam) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundGraphPluginConstructParam" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundGraphPluginConstructParam {#constructor-0}
> **SoundGraphPluginConstructParam**()

Creates a new [SoundGraphPluginConstructParam](/vext/ref/fb/soundgraphpluginconstructparam) frostbite structure.

## Properties
### {{% prop-heading "value" %}}
> **float**

### {{% prop-heading "index" %}}
> **int**

## Methods
### Clone
> **Clone**(): [SoundGraphPluginConstructParam](/vext/ref/fb/soundgraphpluginconstructparam)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoundGraphPluginConstructParam](/vext/ref/fb/soundgraphpluginconstructparam)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundGraphPluginConstructParam](/vext/ref/fb/soundgraphpluginconstructparam) type.

