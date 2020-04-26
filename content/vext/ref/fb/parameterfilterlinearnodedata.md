---
title: ParameterFilterLinearNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[ParameterFilterLinearNodeData](#constructor-0)**() |
| **[ParameterFilterLinearNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ParameterFilterLinearNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[ParameterFilterLinearNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "attackSpeed" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "releaseSpeed" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ParameterFilterLinearNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ParameterFilterLinearNodeData {#constructor-0}
> **ParameterFilterLinearNodeData**()

Creates a new [ParameterFilterLinearNodeData](/vext/ref/fb/parameterfilterlinearnodedata) frostbite instance.

### ParameterFilterLinearNodeData {#constructor-1}
> **ParameterFilterLinearNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ParameterFilterLinearNodeData](/vext/ref/fb/parameterfilterlinearnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ParameterFilterLinearNodeData {#constructor-2}
> **ParameterFilterLinearNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [ParameterFilterLinearNodeData](/vext/ref/fb/parameterfilterlinearnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [ParameterFilterLinearNodeData](/vext/ref/fb/parameterfilterlinearnodedata). |

### ParameterFilterLinearNodeData {#constructor-3}
> **ParameterFilterLinearNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ParameterFilterLinearNodeData](/vext/ref/fb/parameterfilterlinearnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ParameterFilterLinearNodeData](/vext/ref/fb/parameterfilterlinearnodedata). |

## Properties
### {{% prop-heading "inValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "attackSpeed" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "releaseSpeed" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ParameterFilterLinearNodeData](/vext/ref/fb/parameterfilterlinearnodedata) type.

