---
title: MatchmakingRuleString
---


## Summary
### Constructors
| |
| ----------- |
| **[MatchmakingRuleString](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | string |
| {{< prop "platform" >}} | [MatchmakingPlatform](/vext/ref/fb/matchmakingplatform) |
| {{< prop "licenses" >}} | string[] |
| {{< prop "useOnlyIfEmpty" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MatchmakingRuleString](/vext/ref/fb/matchmakingrulestring) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingRuleString" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MatchmakingRuleString {#constructor-0}
> **MatchmakingRuleString**()

Creates a new [MatchmakingRuleString](/vext/ref/fb/matchmakingrulestring) frostbite structure.

## Properties
### {{% prop-heading "value" %}}
> **string**

### {{% prop-heading "platform" %}}
> **[MatchmakingPlatform](/vext/ref/fb/matchmakingplatform)**

### {{% prop-heading "licenses" %}}
> **string**[]

### {{% prop-heading "useOnlyIfEmpty" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [MatchmakingRuleString](/vext/ref/fb/matchmakingrulestring)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MatchmakingRuleString](/vext/ref/fb/matchmakingrulestring)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MatchmakingRuleString](/vext/ref/fb/matchmakingrulestring) type.

