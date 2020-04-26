---
title: MatchmakingSizeRule
---


## Summary
### Constructors
| |
| ----------- |
| **[MatchmakingSizeRule](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "setting" >}} | string |
| {{< prop "configurations" >}} | [MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingSizeRule" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MatchmakingSizeRule {#constructor-0}
> **MatchmakingSizeRule**()

Creates a new [MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule) frostbite structure.

## Properties
### {{% prop-heading "setting" %}}
> **string**

### {{% prop-heading "configurations" %}}
> **[MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration)**[]

## Methods
### Clone
> **Clone**(): [MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule) type.

