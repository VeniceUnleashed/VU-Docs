---
title: SoundGraphData
---

Inherits from 
[AudioGraphData](/vext/ref/fb/audiographdata)

## Summary
### Constructors
| |
| ----------- |
| **[SoundGraphData](#constructor-0)**() |
| **[SoundGraphData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoundGraphData](#constructor-2)**(other: [AudioGraphData](/vext/ref/fb/audiographdata)) |
| **[SoundGraphData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "info" >}} | [SoundGraphInfo](/vext/ref/fb/soundgraphinfo) |
| {{< prop "inputParameters" >}} | [AudioGraphParameter](/vext/ref/fb/audiographparameter)[] |
| {{< prop "outputParameters" >}} | [AudioGraphParameter](/vext/ref/fb/audiographparameter)[] |
| {{< prop "inputEvents" >}} | [AudioGraphEvent](/vext/ref/fb/audiographevent)[] |
| {{< prop "outputEvents" >}} | [AudioGraphEvent](/vext/ref/fb/audiographevent)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundGraphData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundGraphData {#constructor-0}
> **SoundGraphData**()

Creates a new [SoundGraphData](/vext/ref/fb/soundgraphdata) frostbite instance.

### SoundGraphData {#constructor-1}
> **SoundGraphData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoundGraphData](/vext/ref/fb/soundgraphdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoundGraphData {#constructor-2}
> **SoundGraphData**(other: [AudioGraphData](/vext/ref/fb/audiographdata))

Casts an instance of type [AudioGraphData](/vext/ref/fb/audiographdata) to [SoundGraphData](/vext/ref/fb/soundgraphdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphData](/vext/ref/fb/audiographdata) | The instance to cast to [SoundGraphData](/vext/ref/fb/soundgraphdata). |

### SoundGraphData {#constructor-3}
> **SoundGraphData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoundGraphData](/vext/ref/fb/soundgraphdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoundGraphData](/vext/ref/fb/soundgraphdata). |

## Properties
### {{% prop-heading "info" %}}
> **[SoundGraphInfo](/vext/ref/fb/soundgraphinfo)**

### {{% prop-heading "inputParameters" %}}
> **[AudioGraphParameter](/vext/ref/fb/audiographparameter)**[]

### {{% prop-heading "outputParameters" %}}
> **[AudioGraphParameter](/vext/ref/fb/audiographparameter)**[]

### {{% prop-heading "inputEvents" %}}
> **[AudioGraphEvent](/vext/ref/fb/audiographevent)**[]

### {{% prop-heading "outputEvents" %}}
> **[AudioGraphEvent](/vext/ref/fb/audiographevent)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundGraphData](/vext/ref/fb/soundgraphdata) type.

