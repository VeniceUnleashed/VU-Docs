---
title: MinMaxValueSelectorNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[MinMaxValueSelectorNodeData](#constructor-0)**() |
| **[MinMaxValueSelectorNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MinMaxValueSelectorNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[MinMaxValueSelectorNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inputs" >}} | [MinMaxValueSelectorEntry](/vext/ref/fb/minmaxvalueselectorentry)[] |
| {{< prop "maxValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "maxIndex" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "minValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "minIndex" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MinMaxValueSelectorNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MinMaxValueSelectorNodeData {#constructor-0}
> **MinMaxValueSelectorNodeData**()

Creates a new [MinMaxValueSelectorNodeData](/vext/ref/fb/minmaxvalueselectornodedata) frostbite instance.

### MinMaxValueSelectorNodeData {#constructor-1}
> **MinMaxValueSelectorNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MinMaxValueSelectorNodeData](/vext/ref/fb/minmaxvalueselectornodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MinMaxValueSelectorNodeData {#constructor-2}
> **MinMaxValueSelectorNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [MinMaxValueSelectorNodeData](/vext/ref/fb/minmaxvalueselectornodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [MinMaxValueSelectorNodeData](/vext/ref/fb/minmaxvalueselectornodedata). |

### MinMaxValueSelectorNodeData {#constructor-3}
> **MinMaxValueSelectorNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MinMaxValueSelectorNodeData](/vext/ref/fb/minmaxvalueselectornodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MinMaxValueSelectorNodeData](/vext/ref/fb/minmaxvalueselectornodedata). |

## Properties
### {{% prop-heading "inputs" %}}
> **[MinMaxValueSelectorEntry](/vext/ref/fb/minmaxvalueselectorentry)**[]

### {{% prop-heading "maxValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "maxIndex" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "minValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "minIndex" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MinMaxValueSelectorNodeData](/vext/ref/fb/minmaxvalueselectornodedata) type.

