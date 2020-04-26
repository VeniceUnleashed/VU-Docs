---
title: PathfindingObjectCategoryRepresentation
---


## Summary
### Constructors
| |
| ----------- |
| **[PathfindingObjectCategoryRepresentation](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "category" >}} | [PathfindingObjectCategoryAsset](/vext/ref/fb/pathfindingobjectcategoryasset) \| nil |
| {{< prop "representation" >}} | [PathfindingRepresentation](/vext/ref/fb/pathfindingrepresentation) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PathfindingObjectCategoryRepresentation](/vext/ref/fb/pathfindingobjectcategoryrepresentation) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PathfindingObjectCategoryRepresentation" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PathfindingObjectCategoryRepresentation {#constructor-0}
> **PathfindingObjectCategoryRepresentation**()

Creates a new [PathfindingObjectCategoryRepresentation](/vext/ref/fb/pathfindingobjectcategoryrepresentation) frostbite structure.

## Properties
### {{% prop-heading "category" %}}
> **[PathfindingObjectCategoryAsset](/vext/ref/fb/pathfindingobjectcategoryasset)** | **nil**

### {{% prop-heading "representation" %}}
> **[PathfindingRepresentation](/vext/ref/fb/pathfindingrepresentation)**

## Methods
### Clone
> **Clone**(): [PathfindingObjectCategoryRepresentation](/vext/ref/fb/pathfindingobjectcategoryrepresentation)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PathfindingObjectCategoryRepresentation](/vext/ref/fb/pathfindingobjectcategoryrepresentation)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PathfindingObjectCategoryRepresentation](/vext/ref/fb/pathfindingobjectcategoryrepresentation) type.

