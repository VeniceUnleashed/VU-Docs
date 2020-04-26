---
title: MatchmakingCriteria
---

## Summary

### Constructors

|  |
| --- |
| **[MatchmakingCriteria](#constructor-0)**() |
| **[MatchmakingCriteria](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "sizeRule" >}} | [MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule) |
| {{< prop "pingSiteRule" >}} | [MatchmakingPingSiteRule](/vext/ref/fb/matchmakingpingsiterule) |
| {{< prop "rankedRule" >}} | [MatchmakingRankedRule](/vext/ref/fb/matchmakingrankedrule) |
| {{< prop "genericRules" >}} | [MatchmakingGenericRule](/vext/ref/fb/matchmakinggenericrule)[] |
| {{< prop "virtualizedRule" >}} | [MatchmakingVirtualizedRule](/vext/ref/fb/matchmakingvirtualizedrule) |
| {{< prop "uedRules" >}} | [MatchmakingUserExtendedDataRule](/vext/ref/fb/matchmakinguserextendeddatarule)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MatchmakingCriteria](/vext/ref/fb/matchmakingcriteria) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingCriteria" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MatchmakingCriteria {#constructor-0}

> **MatchmakingCriteria**()

Creates a new [MatchmakingCriteria](/vext/ref/fb/matchmakingcriteria) frostbite instance.

### MatchmakingCriteria {#constructor-1}

> **MatchmakingCriteria**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MatchmakingCriteria](/vext/ref/fb/matchmakingcriteria) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "sizeRule" %}}

> **[MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule)**

### {{% prop-heading "pingSiteRule" %}}

> **[MatchmakingPingSiteRule](/vext/ref/fb/matchmakingpingsiterule)**

### {{% prop-heading "rankedRule" %}}

> **[MatchmakingRankedRule](/vext/ref/fb/matchmakingrankedrule)**

### {{% prop-heading "genericRules" %}}

> **[MatchmakingGenericRule](/vext/ref/fb/matchmakinggenericrule)**[]

### {{% prop-heading "virtualizedRule" %}}

> **[MatchmakingVirtualizedRule](/vext/ref/fb/matchmakingvirtualizedrule)**

### {{% prop-heading "uedRules" %}}

> **[MatchmakingUserExtendedDataRule](/vext/ref/fb/matchmakinguserextendeddatarule)**[]

## Methods

### Clone {#clone}

> **Clone**(): [MatchmakingCriteria](/vext/ref/fb/matchmakingcriteria)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MatchmakingCriteria](/vext/ref/fb/matchmakingcriteria)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MatchmakingCriteria](/vext/ref/fb/matchmakingcriteria) type.

