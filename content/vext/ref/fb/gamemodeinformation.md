---
title: GameModeInformation
---


## Summary
### Constructors
| |
| ----------- |
| **[GameModeInformation](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "platform" >}} | [GamePlatform](/vext/ref/fb/gameplatform) |
| {{< prop "sizes" >}} | [GameModeSize](/vext/ref/fb/gamemodesize)[] |
| {{< prop "defaultSize" >}} | [GameModeSize](/vext/ref/fb/gamemodesize) |
| {{< prop "allowFallbackToDefault" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GameModeInformation](/vext/ref/fb/gamemodeinformation) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GameModeInformation" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GameModeInformation {#constructor-0}
> **GameModeInformation**()

Creates a new [GameModeInformation](/vext/ref/fb/gamemodeinformation) frostbite structure.

## Properties
### {{% prop-heading "platform" %}}
> **[GamePlatform](/vext/ref/fb/gameplatform)**

### {{% prop-heading "sizes" %}}
> **[GameModeSize](/vext/ref/fb/gamemodesize)**[]

### {{% prop-heading "defaultSize" %}}
> **[GameModeSize](/vext/ref/fb/gamemodesize)**

### {{% prop-heading "allowFallbackToDefault" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [GameModeInformation](/vext/ref/fb/gamemodeinformation)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GameModeInformation](/vext/ref/fb/gamemodeinformation)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GameModeInformation](/vext/ref/fb/gamemodeinformation) type.

