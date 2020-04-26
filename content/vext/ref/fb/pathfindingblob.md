---
title: PathfindingBlob
---


## Summary
### Constructors
| |
| ----------- |
| **[PathfindingBlob](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "blobId" >}} | [Guid](/vext/ref/shared/class/guid) |
| {{< prop "blobSize" >}} | int |
| {{< prop "chunkSizes" >}} | int[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PathfindingBlob](/vext/ref/fb/pathfindingblob) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PathfindingBlob" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PathfindingBlob {#constructor-0}
> **PathfindingBlob**()

Creates a new [PathfindingBlob](/vext/ref/fb/pathfindingblob) frostbite structure.

## Properties
### {{% prop-heading "blobId" %}}
> **[Guid](/vext/ref/shared/class/guid)**

### {{% prop-heading "blobSize" %}}
> **int**

### {{% prop-heading "chunkSizes" %}}
> **int**[]

## Methods
### Clone
> **Clone**(): [PathfindingBlob](/vext/ref/fb/pathfindingblob)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PathfindingBlob](/vext/ref/fb/pathfindingblob)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PathfindingBlob](/vext/ref/fb/pathfindingblob) type.

