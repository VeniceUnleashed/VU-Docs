---
title: LowPassButterworthNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[LowPassButterworthNodeData](#constructor-0)**() |
| **[LowPassButterworthNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[LowPassButterworthNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[LowPassButterworthNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "frequency" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "order" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "plugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LowPassButterworthNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LowPassButterworthNodeData {#constructor-0}
> **LowPassButterworthNodeData**()

Creates a new [LowPassButterworthNodeData](/vext/ref/fb/lowpassbutterworthnodedata) frostbite instance.

### LowPassButterworthNodeData {#constructor-1}
> **LowPassButterworthNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [LowPassButterworthNodeData](/vext/ref/fb/lowpassbutterworthnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### LowPassButterworthNodeData {#constructor-2}
> **LowPassButterworthNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [LowPassButterworthNodeData](/vext/ref/fb/lowpassbutterworthnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [LowPassButterworthNodeData](/vext/ref/fb/lowpassbutterworthnodedata). |

### LowPassButterworthNodeData {#constructor-3}
> **LowPassButterworthNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LowPassButterworthNodeData](/vext/ref/fb/lowpassbutterworthnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [LowPassButterworthNodeData](/vext/ref/fb/lowpassbutterworthnodedata). |

## Properties
### {{% prop-heading "inValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "frequency" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "order" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "plugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LowPassButterworthNodeData](/vext/ref/fb/lowpassbutterworthnodedata) type.

