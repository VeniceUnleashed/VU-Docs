---
title: MatchmakingGenericRule
---


## Summary
### Constructors
| |
| ----------- |
| **[MatchmakingGenericRule](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "rule" >}} | string |
| {{< prop "minFitThresHold" >}} | string |
| {{< prop "setting" >}} | string |
| {{< prop "desiredValues" >}} | [MatchmakingRuleString](/vext/ref/fb/matchmakingrulestring)[] |
| {{< prop "ignoreIfDefault" >}} | bool |
| {{< prop "mergeValues" >}} | bool |
| {{< prop "sortValues" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MatchmakingGenericRule](/vext/ref/fb/matchmakinggenericrule) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingGenericRule" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MatchmakingGenericRule {#constructor-0}
> **MatchmakingGenericRule**()

Creates a new [MatchmakingGenericRule](/vext/ref/fb/matchmakinggenericrule) frostbite structure.

## Properties
### {{% prop-heading "rule" %}}
> **string**

### {{% prop-heading "minFitThresHold" %}}
> **string**

### {{% prop-heading "setting" %}}
> **string**

### {{% prop-heading "desiredValues" %}}
> **[MatchmakingRuleString](/vext/ref/fb/matchmakingrulestring)**[]

### {{% prop-heading "ignoreIfDefault" %}}
> **bool**

### {{% prop-heading "mergeValues" %}}
> **bool**

### {{% prop-heading "sortValues" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [MatchmakingGenericRule](/vext/ref/fb/matchmakinggenericrule)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MatchmakingGenericRule](/vext/ref/fb/matchmakinggenericrule)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MatchmakingGenericRule](/vext/ref/fb/matchmakinggenericrule) type.

