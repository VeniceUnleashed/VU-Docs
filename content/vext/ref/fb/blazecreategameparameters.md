---
title: BlazeCreateGameParameters
---


## Summary
### Constructors
| |
| ----------- |
| **[BlazeCreateGameParameters](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "base" >}} | [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [BlazeCreateGameParameters](/vext/ref/fb/blazecreategameparameters) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "BlazeCreateGameParameters" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### BlazeCreateGameParameters {#constructor-0}
> **BlazeCreateGameParameters**()

Creates a new [BlazeCreateGameParameters](/vext/ref/fb/blazecreategameparameters) frostbite structure.

## Properties
### {{% prop-heading "base" %}}
> **[MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters)**

## Methods
### Clone
> **Clone**(): [BlazeCreateGameParameters](/vext/ref/fb/blazecreategameparameters)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[BlazeCreateGameParameters](/vext/ref/fb/blazecreategameparameters)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [BlazeCreateGameParameters](/vext/ref/fb/blazecreategameparameters) type.

