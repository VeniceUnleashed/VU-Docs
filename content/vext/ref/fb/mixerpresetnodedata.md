---
title: MixerPresetNodeData
---


## Summary
### Constructors
| |
| ----------- |
| **[MixerPresetNodeData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "node" >}} | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) \| nil |
| {{< prop "value" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MixerPresetNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MixerPresetNodeData {#constructor-0}
> **MixerPresetNodeData**()

Creates a new [MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata) frostbite structure.

## Properties
### {{% prop-heading "node" %}}
> **[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)** | **nil**

### {{% prop-heading "value" %}}
> **float**

## Methods
### Clone
> **Clone**(): [MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MixerPresetNodeData](/vext/ref/fb/mixerpresetnodedata) type.

