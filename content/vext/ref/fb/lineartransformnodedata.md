---
title: LinearTransformNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[LinearTransformNodeData](#constructor-0)**() |
| **[LinearTransformNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[LinearTransformNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[LinearTransformNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "x" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "k" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "m" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "y" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LinearTransformNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LinearTransformNodeData {#constructor-0}
> **LinearTransformNodeData**()

Creates a new [LinearTransformNodeData](/vext/ref/fb/lineartransformnodedata) frostbite instance.

### LinearTransformNodeData {#constructor-1}
> **LinearTransformNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [LinearTransformNodeData](/vext/ref/fb/lineartransformnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### LinearTransformNodeData {#constructor-2}
> **LinearTransformNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [LinearTransformNodeData](/vext/ref/fb/lineartransformnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [LinearTransformNodeData](/vext/ref/fb/lineartransformnodedata). |

### LinearTransformNodeData {#constructor-3}
> **LinearTransformNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LinearTransformNodeData](/vext/ref/fb/lineartransformnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [LinearTransformNodeData](/vext/ref/fb/lineartransformnodedata). |

## Properties
### {{% prop-heading "x" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "k" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "m" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "y" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LinearTransformNodeData](/vext/ref/fb/lineartransformnodedata) type.

