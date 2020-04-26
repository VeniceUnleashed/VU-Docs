---
title: SoundPatchPublicNode
---


## Summary
### Constructors
| |
| ----------- |
| **[SoundPatchPublicNode](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "node" >}} | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) \| nil |
| {{< prop "id" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoundPatchPublicNode](/vext/ref/fb/soundpatchpublicnode) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundPatchPublicNode" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundPatchPublicNode {#constructor-0}
> **SoundPatchPublicNode**()

Creates a new [SoundPatchPublicNode](/vext/ref/fb/soundpatchpublicnode) frostbite structure.

## Properties
### {{% prop-heading "node" %}}
> **[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)** | **nil**

### {{% prop-heading "id" %}}
> **int**

## Methods
### Clone
> **Clone**(): [SoundPatchPublicNode](/vext/ref/fb/soundpatchpublicnode)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoundPatchPublicNode](/vext/ref/fb/soundpatchpublicnode)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundPatchPublicNode](/vext/ref/fb/soundpatchpublicnode) type.

