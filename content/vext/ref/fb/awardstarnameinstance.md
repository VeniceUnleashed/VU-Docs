---
title: AwardStarNameInstance
---


## Summary
### Constructors
| |
| ----------- |
| **[AwardStarNameInstance](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "category" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AwardStarNameInstance](/vext/ref/fb/awardstarnameinstance) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AwardStarNameInstance" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AwardStarNameInstance {#constructor-0}
> **AwardStarNameInstance**()

Creates a new [AwardStarNameInstance](/vext/ref/fb/awardstarnameinstance) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "category" %}}
> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)** | **nil**

## Methods
### Clone
> **Clone**(): [AwardStarNameInstance](/vext/ref/fb/awardstarnameinstance)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AwardStarNameInstance](/vext/ref/fb/awardstarnameinstance)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AwardStarNameInstance](/vext/ref/fb/awardstarnameinstance) type.

