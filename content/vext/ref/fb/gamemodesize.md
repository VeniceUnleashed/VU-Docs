---
title: GameModeSize
---


## Summary
### Constructors
| |
| ----------- |
| **[GameModeSize](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "shortName" >}} | string |
| {{< prop "metaIdentifier" >}} | string |
| {{< prop "playerCount" >}} | int |
| {{< prop "teams" >}} | [GameModeTeamSize](/vext/ref/fb/gamemodeteamsize)[] |
| {{< prop "roundsPerMap" >}} | int |
| {{< prop "forceSquad" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GameModeSize](/vext/ref/fb/gamemodesize) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GameModeSize" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GameModeSize {#constructor-0}
> **GameModeSize**()

Creates a new [GameModeSize](/vext/ref/fb/gamemodesize) frostbite structure.

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "shortName" %}}
> **string**

### {{% prop-heading "metaIdentifier" %}}
> **string**

### {{% prop-heading "playerCount" %}}
> **int**

### {{% prop-heading "teams" %}}
> **[GameModeTeamSize](/vext/ref/fb/gamemodeteamsize)**[]

### {{% prop-heading "roundsPerMap" %}}
> **int**

### {{% prop-heading "forceSquad" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [GameModeSize](/vext/ref/fb/gamemodesize)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GameModeSize](/vext/ref/fb/gamemodesize)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GameModeSize](/vext/ref/fb/gamemodesize) type.

