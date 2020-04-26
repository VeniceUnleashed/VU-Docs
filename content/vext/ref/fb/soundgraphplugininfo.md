---
title: SoundGraphPluginInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[SoundGraphPluginInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "id" >}} | int |
| {{< prop "enableAttributeReadMask" >}} | int |
| {{< prop "connectionIndex" >}} | int |
| {{< prop "outputChannelCount" >}} | int |
| {{< prop "constructParamsIndex" >}} | int |
| {{< prop "constructParamCount" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoundGraphPluginInfo](/vext/ref/fb/soundgraphplugininfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundGraphPluginInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundGraphPluginInfo {#constructor-0}
> **SoundGraphPluginInfo**()

Creates a new [SoundGraphPluginInfo](/vext/ref/fb/soundgraphplugininfo) frostbite structure.

## Properties
### {{% prop-heading "id" %}}
> **int**

### {{% prop-heading "enableAttributeReadMask" %}}
> **int**

### {{% prop-heading "connectionIndex" %}}
> **int**

### {{% prop-heading "outputChannelCount" %}}
> **int**

### {{% prop-heading "constructParamsIndex" %}}
> **int**

### {{% prop-heading "constructParamCount" %}}
> **int**

## Methods
### Clone
> **Clone**(): [SoundGraphPluginInfo](/vext/ref/fb/soundgraphplugininfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoundGraphPluginInfo](/vext/ref/fb/soundgraphplugininfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundGraphPluginInfo](/vext/ref/fb/soundgraphplugininfo) type.

