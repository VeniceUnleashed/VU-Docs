---
title: LevelDescriptionInclusionCategory
---


## Summary
### Constructors
| |
| ----------- |
| **[LevelDescriptionInclusionCategory](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "category" >}} | string |
| {{< prop "mode" >}} | string[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [LevelDescriptionInclusionCategory](/vext/ref/fb/leveldescriptioninclusioncategory) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LevelDescriptionInclusionCategory" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LevelDescriptionInclusionCategory {#constructor-0}
> **LevelDescriptionInclusionCategory**()

Creates a new [LevelDescriptionInclusionCategory](/vext/ref/fb/leveldescriptioninclusioncategory) frostbite structure.

## Properties
### {{% prop-heading "category" %}}
> **string**

### {{% prop-heading "mode" %}}
> **string**[]

## Methods
### Clone
> **Clone**(): [LevelDescriptionInclusionCategory](/vext/ref/fb/leveldescriptioninclusioncategory)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[LevelDescriptionInclusionCategory](/vext/ref/fb/leveldescriptioninclusioncategory)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LevelDescriptionInclusionCategory](/vext/ref/fb/leveldescriptioninclusioncategory) type.

