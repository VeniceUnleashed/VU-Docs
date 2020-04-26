---
title: CriteriaStarCategoryInstance
---


## Summary
### Constructors
| |
| ----------- |
| **[CriteriaStarCategoryInstance](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "paramX" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata) \| nil |
| {{< prop "paramY" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata) \| nil |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [CriteriaStarCategoryInstance](/vext/ref/fb/criteriastarcategoryinstance) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CriteriaStarCategoryInstance" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CriteriaStarCategoryInstance {#constructor-0}
> **CriteriaStarCategoryInstance**()

Creates a new [CriteriaStarCategoryInstance](/vext/ref/fb/criteriastarcategoryinstance) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "paramX" %}}
> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)** | **nil**

### {{% prop-heading "paramY" %}}
> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)** | **nil**

## Methods
### Clone
> **Clone**(): [CriteriaStarCategoryInstance](/vext/ref/fb/criteriastarcategoryinstance)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[CriteriaStarCategoryInstance](/vext/ref/fb/criteriastarcategoryinstance)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CriteriaStarCategoryInstance](/vext/ref/fb/criteriastarcategoryinstance) type.

