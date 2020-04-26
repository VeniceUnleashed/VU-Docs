---
title: SoundDataChunk
---


## Summary
### Constructors
| |
| ----------- |
| **[SoundDataChunk](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "chunkId" >}} | [Guid](/vext/ref/shared/class/guid) |
| {{< prop "chunkSize" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoundDataChunk](/vext/ref/fb/sounddatachunk) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoundDataChunk" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoundDataChunk {#constructor-0}
> **SoundDataChunk**()

Creates a new [SoundDataChunk](/vext/ref/fb/sounddatachunk) frostbite structure.

## Properties
### {{% prop-heading "chunkId" %}}
> **[Guid](/vext/ref/shared/class/guid)**

### {{% prop-heading "chunkSize" %}}
> **int**

## Methods
### Clone
> **Clone**(): [SoundDataChunk](/vext/ref/fb/sounddatachunk)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoundDataChunk](/vext/ref/fb/sounddatachunk)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoundDataChunk](/vext/ref/fb/sounddatachunk) type.

