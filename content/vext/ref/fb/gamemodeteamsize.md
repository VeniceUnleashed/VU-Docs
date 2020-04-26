---
title: GameModeTeamSize
---


## Summary
### Constructors
| |
| ----------- |
| **[GameModeTeamSize](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "playerCount" >}} | int |
| {{< prop "squadSize" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GameModeTeamSize](/vext/ref/fb/gamemodeteamsize) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GameModeTeamSize" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GameModeTeamSize {#constructor-0}
> **GameModeTeamSize**()

Creates a new [GameModeTeamSize](/vext/ref/fb/gamemodeteamsize) frostbite structure.

## Properties
### {{% prop-heading "playerCount" %}}
> **int**

### {{% prop-heading "squadSize" %}}
> **int**

## Methods
### Clone
> **Clone**(): [GameModeTeamSize](/vext/ref/fb/gamemodeteamsize)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GameModeTeamSize](/vext/ref/fb/gamemodeteamsize)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GameModeTeamSize](/vext/ref/fb/gamemodeteamsize) type.

