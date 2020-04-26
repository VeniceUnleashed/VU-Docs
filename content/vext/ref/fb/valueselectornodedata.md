---
title: ValueSelectorNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[ValueSelectorNodeData](#constructor-0)**() |
| **[ValueSelectorNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ValueSelectorNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[ValueSelectorNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inputs" >}} | [ValueSelectorEntry](/vext/ref/fb/valueselectorentry)[] |
| {{< prop "value" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "defaultCaseValue" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ValueSelectorNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ValueSelectorNodeData {#constructor-0}
> **ValueSelectorNodeData**()

Creates a new [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata) frostbite instance.

### ValueSelectorNodeData {#constructor-1}
> **ValueSelectorNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ValueSelectorNodeData {#constructor-2}
> **ValueSelectorNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata). |

### ValueSelectorNodeData {#constructor-3}
> **ValueSelectorNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata). |

## Properties
### {{% prop-heading "inputs" %}}
> **[ValueSelectorEntry](/vext/ref/fb/valueselectorentry)**[]

### {{% prop-heading "value" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "defaultCaseValue" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ValueSelectorNodeData](/vext/ref/fb/valueselectornodedata) type.

