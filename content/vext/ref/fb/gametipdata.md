---
title: GameTipData
---


## Summary
### Constructors
| |
| ----------- |
| **[GameTipData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "text" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GameTipData](/vext/ref/fb/gametipdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GameTipData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GameTipData {#constructor-0}
> **GameTipData**()

Creates a new [GameTipData](/vext/ref/fb/gametipdata) frostbite structure.

## Properties
### {{% prop-heading "text" %}}
> **string**

## Methods
### Clone
> **Clone**(): [GameTipData](/vext/ref/fb/gametipdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GameTipData](/vext/ref/fb/gametipdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GameTipData](/vext/ref/fb/gametipdata) type.

