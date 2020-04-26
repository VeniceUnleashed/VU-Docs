---
title: SoundGraphPluginRef
---


## Summary
### Constructors
| |
| ----------- |
| **[SoundGraphPluginRef](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "isValid" >}} | bool |
| {{< prop "voiceIndex" >}} | int |
| {{< prop "pluginIndex" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundGraphPluginRef" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundGraphPluginRef {#constructor-0}
> **SoundGraphPluginRef**()

Creates a new [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) frostbite structure.

## Properties
### {{% prop-heading "isValid" %}}
> **bool**

### {{% prop-heading "voiceIndex" %}}
> **int**

### {{% prop-heading "pluginIndex" %}}
> **int**

## Methods
### Clone
> **Clone**(): [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) type.

