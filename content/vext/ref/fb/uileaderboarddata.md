---
title: UILeaderboardData
---


## Summary
### Constructors
| |
| ----------- |
| **[UILeaderboardData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "description" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UILeaderboardData](/vext/ref/fb/uileaderboarddata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UILeaderboardData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UILeaderboardData {#constructor-0}
> **UILeaderboardData**()

Creates a new [UILeaderboardData](/vext/ref/fb/uileaderboarddata) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "description" %}}
> **string**

## Methods
### Clone
> **Clone**(): [UILeaderboardData](/vext/ref/fb/uileaderboarddata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UILeaderboardData](/vext/ref/fb/uileaderboarddata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UILeaderboardData](/vext/ref/fb/uileaderboarddata) type.

