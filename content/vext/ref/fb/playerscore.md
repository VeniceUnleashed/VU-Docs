---
title: PlayerScore
---


## Summary
### Constructors
| |
| ----------- |
| **[PlayerScore](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "rank" >}} | int |
| {{< prop "kills" >}} | int |
| {{< prop "deaths" >}} | int |
| {{< prop "scoreMultiplier" >}} | int |
| {{< prop "score" >}} | int |
| {{< prop "globalScoreOriginal" >}} | int |
| {{< prop "globalScoreUpdated" >}} | int |
| {{< prop "time" >}} | float |
| {{< prop "gunMasterLevel" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PlayerScore](/vext/ref/fb/playerscore) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PlayerScore" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PlayerScore {#constructor-0}
> **PlayerScore**()

Creates a new [PlayerScore](/vext/ref/fb/playerscore) frostbite structure.

## Properties
### {{% prop-heading "rank" %}}
> **int**

### {{% prop-heading "kills" %}}
> **int**

### {{% prop-heading "deaths" %}}
> **int**

### {{% prop-heading "scoreMultiplier" %}}
> **int**

### {{% prop-heading "score" %}}
> **int**

### {{% prop-heading "globalScoreOriginal" %}}
> **int**

### {{% prop-heading "globalScoreUpdated" %}}
> **int**

### {{% prop-heading "time" %}}
> **float**

### {{% prop-heading "gunMasterLevel" %}}
> **int**

## Methods
### Clone
> **Clone**(): [PlayerScore](/vext/ref/fb/playerscore)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PlayerScore](/vext/ref/fb/playerscore)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PlayerScore](/vext/ref/fb/playerscore) type.

