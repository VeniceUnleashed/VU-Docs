---
title: UILevelStatData
---


## Summary
### Constructors
| |
| ----------- |
| **[UILevelStatData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "statEasy" >}} | string |
| {{< prop "statMedium" >}} | string |
| {{< prop "statHard" >}} | string |
| {{< prop "statHardcore" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UILevelStatData](/vext/ref/fb/uilevelstatdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UILevelStatData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UILevelStatData {#constructor-0}
> **UILevelStatData**()

Creates a new [UILevelStatData](/vext/ref/fb/uilevelstatdata) frostbite structure.

## Properties
### {{% prop-heading "statEasy" %}}
> **string**

### {{% prop-heading "statMedium" %}}
> **string**

### {{% prop-heading "statHard" %}}
> **string**

### {{% prop-heading "statHardcore" %}}
> **string**

## Methods
### Clone
> **Clone**(): [UILevelStatData](/vext/ref/fb/uilevelstatdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UILevelStatData](/vext/ref/fb/uilevelstatdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UILevelStatData](/vext/ref/fb/uilevelstatdata) type.

