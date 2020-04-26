---
title: SoundGraphPluginConnectionParam
---


## Summary
### Constructors
| |
| ----------- |
| **[SoundGraphPluginConnectionParam](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | float |
| {{< prop "index" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundGraphPluginConnectionParam" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundGraphPluginConnectionParam {#constructor-0}
> **SoundGraphPluginConnectionParam**()

Creates a new [SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam) frostbite structure.

## Properties
### {{% prop-heading "value" %}}
> **float**

### {{% prop-heading "index" %}}
> **int**

## Methods
### Clone
> **Clone**(): [SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam) type.

