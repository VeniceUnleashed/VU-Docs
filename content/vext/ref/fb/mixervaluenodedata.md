---
title: MixerValueNodeData
---

Inherits from 
[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary
### Constructors
| |
| ----------- |
| **[MixerValueNodeData](#constructor-0)**() |
| **[MixerValueNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MixerValueNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[MixerValueNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "defaultValue" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MixerValueNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MixerValueNodeData {#constructor-0}
> **MixerValueNodeData**()

Creates a new [MixerValueNodeData](/vext/ref/fb/mixervaluenodedata) frostbite instance.

### MixerValueNodeData {#constructor-1}
> **MixerValueNodeData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MixerValueNodeData](/vext/ref/fb/mixervaluenodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MixerValueNodeData {#constructor-2}
> **MixerValueNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [MixerValueNodeData](/vext/ref/fb/mixervaluenodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [MixerValueNodeData](/vext/ref/fb/mixervaluenodedata). |

### MixerValueNodeData {#constructor-3}
> **MixerValueNodeData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MixerValueNodeData](/vext/ref/fb/mixervaluenodedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MixerValueNodeData](/vext/ref/fb/mixervaluenodedata). |

## Properties
### {{% prop-heading "out" %}}
> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "defaultValue" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MixerValueNodeData](/vext/ref/fb/mixervaluenodedata) type.

