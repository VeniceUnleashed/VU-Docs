---
title: IrReverbNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[IrReverbNodeData](#constructor-0)**() |
| **[IrReverbNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[IrReverbNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[IrReverbNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "reverb0" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "amplitude0" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "reverb1" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "amplitude1" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "maxReverbLength" >}} | float |
| {{< prop "reverbPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "IrReverbNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### IrReverbNodeData {#constructor-0}
> **IrReverbNodeData**()

Creates a new [IrReverbNodeData](/vext/ref/fb/irreverbnodedata) frostbite instance.

### IrReverbNodeData {#constructor-1}
> **IrReverbNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [IrReverbNodeData](/vext/ref/fb/irreverbnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### IrReverbNodeData {#constructor-2}
> **IrReverbNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [IrReverbNodeData](/vext/ref/fb/irreverbnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [IrReverbNodeData](/vext/ref/fb/irreverbnodedata). |

### IrReverbNodeData {#constructor-3}
> **IrReverbNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [IrReverbNodeData](/vext/ref/fb/irreverbnodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [IrReverbNodeData](/vext/ref/fb/irreverbnodedata). |

## Properties
### {{% prop-heading "inValue" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "reverb0" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "amplitude0" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "reverb1" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "amplitude1" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "maxReverbLength" %}}
> **float**

### {{% prop-heading "reverbPlugin" %}}
> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [IrReverbNodeData](/vext/ref/fb/irreverbnodedata) type.

