---
title: BusNodeData
---

Inherits from 
[SoundBusData](/vext/ref/fb/soundbusdata)

## Summary
### Constructors
| |
| ----------- |
| **[BusNodeData](#constructor-0)**() |
| **[BusNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[BusNodeData](#constructor-2)**(other: [SoundBusData](/vext/ref/fb/soundbusdata)) |
| **[BusNodeData](#constructor-3)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[BusNodeData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "vuPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BusNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BusNodeData {#constructor-0}
> **BusNodeData**()

Creates a new [BusNodeData](/vext/ref/fb/busnodedata) frostbite instance.

### BusNodeData {#constructor-1}
> **BusNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [BusNodeData](/vext/ref/fb/busnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### BusNodeData {#constructor-2}
> **BusNodeData**(other: [SoundBusData](/vext/ref/fb/soundbusdata))

Casts an instance of type [SoundBusData](/vext/ref/fb/soundbusdata) to [BusNodeData](/vext/ref/fb/busnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SoundBusData](/vext/ref/fb/soundbusdata) | The instance to cast to [BusNodeData](/vext/ref/fb/busnodedata). |

### BusNodeData {#constructor-3}
> **BusNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [BusNodeData](/vext/ref/fb/busnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [BusNodeData](/vext/ref/fb/busnodedata). |

### BusNodeData {#constructor-4}
> **BusNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BusNodeData](/vext/ref/fb/busnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [BusNodeData](/vext/ref/fb/busnodedata). |

## Properties
### {{% prop-heading "out" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "vuPlugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BusNodeData](/vext/ref/fb/busnodedata) type.

