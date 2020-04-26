---
title: SimpleTransformNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[SimpleTransformNodeData](#constructor-0)**() |
| **[SimpleTransformNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SimpleTransformNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[SimpleTransformNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "x" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "y" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "z" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "operation" >}} | [SimpleTransformOperation](/vext/ref/fb/simpletransformoperation) |
| {{< prop "angleUnit" >}} | [AngleUnit](/vext/ref/fb/angleunit) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SimpleTransformNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SimpleTransformNodeData {#constructor-0}
> **SimpleTransformNodeData**()

Creates a new [SimpleTransformNodeData](/vext/ref/fb/simpletransformnodedata) frostbite instance.

### SimpleTransformNodeData {#constructor-1}
> **SimpleTransformNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SimpleTransformNodeData](/vext/ref/fb/simpletransformnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SimpleTransformNodeData {#constructor-2}
> **SimpleTransformNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [SimpleTransformNodeData](/vext/ref/fb/simpletransformnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [SimpleTransformNodeData](/vext/ref/fb/simpletransformnodedata). |

### SimpleTransformNodeData {#constructor-3}
> **SimpleTransformNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SimpleTransformNodeData](/vext/ref/fb/simpletransformnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SimpleTransformNodeData](/vext/ref/fb/simpletransformnodedata). |

## Properties
### {{% prop-heading "x" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "y" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "z" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "operation" %}}
> **[SimpleTransformOperation](/vext/ref/fb/simpletransformoperation)**

### {{% prop-heading "angleUnit" %}}
> **[AngleUnit](/vext/ref/fb/angleunit)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SimpleTransformNodeData](/vext/ref/fb/simpletransformnodedata) type.

