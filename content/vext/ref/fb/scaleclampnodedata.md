---
title: ScaleClampNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[ScaleClampNodeData](#constructor-0)**() |
| **[ScaleClampNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ScaleClampNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[ScaleClampNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "inMin" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "inMax" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "outMin" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "outMax" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ScaleClampNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ScaleClampNodeData {#constructor-0}
> **ScaleClampNodeData**()

Creates a new [ScaleClampNodeData](/vext/ref/fb/scaleclampnodedata) frostbite instance.

### ScaleClampNodeData {#constructor-1}
> **ScaleClampNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ScaleClampNodeData](/vext/ref/fb/scaleclampnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ScaleClampNodeData {#constructor-2}
> **ScaleClampNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [ScaleClampNodeData](/vext/ref/fb/scaleclampnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [ScaleClampNodeData](/vext/ref/fb/scaleclampnodedata). |

### ScaleClampNodeData {#constructor-3}
> **ScaleClampNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ScaleClampNodeData](/vext/ref/fb/scaleclampnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ScaleClampNodeData](/vext/ref/fb/scaleclampnodedata). |

## Properties
### {{% prop-heading "inValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "inMin" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "inMax" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "outMin" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "outMax" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ScaleClampNodeData](/vext/ref/fb/scaleclampnodedata) type.

