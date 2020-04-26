---
title: IrReverbControllerNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[IrReverbControllerNodeData](#constructor-0)**() |
| **[IrReverbControllerNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[IrReverbControllerNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[IrReverbControllerNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "reverb0" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "amplitude0" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "reverb1" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "amplitude1" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "IrReverbControllerNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### IrReverbControllerNodeData {#constructor-0}
> **IrReverbControllerNodeData**()

Creates a new [IrReverbControllerNodeData](/vext/ref/fb/irreverbcontrollernodedata) frostbite instance.

### IrReverbControllerNodeData {#constructor-1}
> **IrReverbControllerNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [IrReverbControllerNodeData](/vext/ref/fb/irreverbcontrollernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### IrReverbControllerNodeData {#constructor-2}
> **IrReverbControllerNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [IrReverbControllerNodeData](/vext/ref/fb/irreverbcontrollernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [IrReverbControllerNodeData](/vext/ref/fb/irreverbcontrollernodedata). |

### IrReverbControllerNodeData {#constructor-3}
> **IrReverbControllerNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [IrReverbControllerNodeData](/vext/ref/fb/irreverbcontrollernodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [IrReverbControllerNodeData](/vext/ref/fb/irreverbcontrollernodedata). |

## Properties
### {{% prop-heading "reverb0" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "amplitude0" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "reverb1" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "amplitude1" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [IrReverbControllerNodeData](/vext/ref/fb/irreverbcontrollernodedata) type.

