---
title: SimpleMovementActionTimeData
---


## Summary
### Constructors
| |
| ----------- |
| **[SimpleMovementActionTimeData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "time" >}} | float |
| {{< prop "maxVariation" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SimpleMovementActionTimeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SimpleMovementActionTimeData {#constructor-0}
> **SimpleMovementActionTimeData**()

Creates a new [SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata) frostbite structure.

## Properties
### {{% prop-heading "time" %}}
> **float**

### {{% prop-heading "maxVariation" %}}
> **float**

## Methods
### Clone
> **Clone**(): [SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SimpleMovementActionTimeData](/vext/ref/fb/simplemovementactiontimedata) type.

