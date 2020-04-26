---
title: GameModeVariation
---


## Summary
### Constructors
| |
| ----------- |
| **[GameModeVariation](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "identifier" >}} | string |
| {{< prop "name" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [GameModeVariation](/vext/ref/fb/gamemodevariation) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GameModeVariation" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GameModeVariation {#constructor-0}
> **GameModeVariation**()

Creates a new [GameModeVariation](/vext/ref/fb/gamemodevariation) frostbite structure.

## Properties
### {{% prop-heading "identifier" %}}
> **string**

### {{% prop-heading "name" %}}
> **string**

## Methods
### Clone
> **Clone**(): [GameModeVariation](/vext/ref/fb/gamemodevariation)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[GameModeVariation](/vext/ref/fb/gamemodevariation)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GameModeVariation](/vext/ref/fb/gamemodevariation) type.

