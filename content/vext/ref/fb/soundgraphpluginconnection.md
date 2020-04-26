---
title: SoundGraphPluginConnection
---


## Summary
### Constructors
| |
| ----------- |
| **[SoundGraphPluginConnection](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "connectionType" >}} | [SoundGraphPluginConnectionType](/vext/ref/fb/soundgraphpluginconnectiontype) |
| {{< prop "parameters" >}} | [SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam)[] |
| {{< prop "bus" >}} | [SoundBusData](/vext/ref/fb/soundbusdata) \| nil |
| {{< prop "voiceIndex" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundGraphPluginConnection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundGraphPluginConnection {#constructor-0}
> **SoundGraphPluginConnection**()

Creates a new [SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection) frostbite structure.

## Properties
### {{% prop-heading "connectionType" %}}
> **[SoundGraphPluginConnectionType](/vext/ref/fb/soundgraphpluginconnectiontype)**

### {{% prop-heading "parameters" %}}
> **[SoundGraphPluginConnectionParam](/vext/ref/fb/soundgraphpluginconnectionparam)**[]

### {{% prop-heading "bus" %}}
> **[SoundBusData](/vext/ref/fb/soundbusdata)** | **nil**

### {{% prop-heading "voiceIndex" %}}
> **int**

## Methods
### Clone
> **Clone**(): [SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundGraphPluginConnection](/vext/ref/fb/soundgraphpluginconnection) type.

