---
title: NumberGeneratorNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[NumberGeneratorNodeData](#constructor-0)**() |
| **[NumberGeneratorNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[NumberGeneratorNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[NumberGeneratorNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "trigger" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "min" >}} | float |
| {{< prop "max" >}} | float |
| {{< prop "mode" >}} | [NumberGeneratorMode](/vext/ref/fb/numbergeneratormode) |
| {{< prop "y" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "NumberGeneratorNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### NumberGeneratorNodeData {#constructor-0}
> **NumberGeneratorNodeData**()

Creates a new [NumberGeneratorNodeData](/vext/ref/fb/numbergeneratornodedata) frostbite instance.

### NumberGeneratorNodeData {#constructor-1}
> **NumberGeneratorNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [NumberGeneratorNodeData](/vext/ref/fb/numbergeneratornodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### NumberGeneratorNodeData {#constructor-2}
> **NumberGeneratorNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [NumberGeneratorNodeData](/vext/ref/fb/numbergeneratornodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [NumberGeneratorNodeData](/vext/ref/fb/numbergeneratornodedata). |

### NumberGeneratorNodeData {#constructor-3}
> **NumberGeneratorNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [NumberGeneratorNodeData](/vext/ref/fb/numbergeneratornodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [NumberGeneratorNodeData](/vext/ref/fb/numbergeneratornodedata). |

## Properties
### {{% prop-heading "trigger" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "min" %}}
> **float**

### {{% prop-heading "max" %}}
> **float**

### {{% prop-heading "mode" %}}
> **[NumberGeneratorMode](/vext/ref/fb/numbergeneratormode)**

### {{% prop-heading "y" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [NumberGeneratorNodeData](/vext/ref/fb/numbergeneratornodedata) type.

