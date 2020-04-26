---
title: MatchmakingVirtualizedRule
---


## Summary
### Constructors
| |
| ----------- |
| **[MatchmakingVirtualizedRule](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minFitThreshold" >}} | string |
| {{< prop "virtualizationMode" >}} | [MatchmakingVirtualizationMode](/vext/ref/fb/matchmakingvirtualizationmode) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MatchmakingVirtualizedRule](/vext/ref/fb/matchmakingvirtualizedrule) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingVirtualizedRule" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MatchmakingVirtualizedRule {#constructor-0}
> **MatchmakingVirtualizedRule**()

Creates a new [MatchmakingVirtualizedRule](/vext/ref/fb/matchmakingvirtualizedrule) frostbite structure.

## Properties
### {{% prop-heading "minFitThreshold" %}}
> **string**

### {{% prop-heading "virtualizationMode" %}}
> **[MatchmakingVirtualizationMode](/vext/ref/fb/matchmakingvirtualizationmode)**

## Methods
### Clone
> **Clone**(): [MatchmakingVirtualizedRule](/vext/ref/fb/matchmakingvirtualizedrule)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MatchmakingVirtualizedRule](/vext/ref/fb/matchmakingvirtualizedrule)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MatchmakingVirtualizedRule](/vext/ref/fb/matchmakingvirtualizedrule) type.

