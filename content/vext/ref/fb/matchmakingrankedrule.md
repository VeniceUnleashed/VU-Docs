---
title: MatchmakingRankedRule
---


## Summary
### Constructors
| |
| ----------- |
| **[MatchmakingRankedRule](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minFitThreshold" >}} | string |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MatchmakingRankedRule](/vext/ref/fb/matchmakingrankedrule) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingRankedRule" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MatchmakingRankedRule {#constructor-0}
> **MatchmakingRankedRule**()

Creates a new [MatchmakingRankedRule](/vext/ref/fb/matchmakingrankedrule) frostbite structure.

## Properties
### {{% prop-heading "minFitThreshold" %}}
> **string**

## Methods
### Clone
> **Clone**(): [MatchmakingRankedRule](/vext/ref/fb/matchmakingrankedrule)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MatchmakingRankedRule](/vext/ref/fb/matchmakingrankedrule)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MatchmakingRankedRule](/vext/ref/fb/matchmakingrankedrule) type.

