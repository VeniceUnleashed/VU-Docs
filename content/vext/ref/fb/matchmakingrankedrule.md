---
title: MatchmakingRankedRule
---

## Summary

### Constructors

|  |
| --- |
| **[MatchmakingRankedRule](#constructor-0)**() |
| **[MatchmakingRankedRule](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "minFitThreshold" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MatchmakingRankedRule](/vext/ref/fb/matchmakingrankedrule) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingRankedRule" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MatchmakingRankedRule {#constructor-0}

> **MatchmakingRankedRule**()

Creates a new [MatchmakingRankedRule](/vext/ref/fb/matchmakingrankedrule) frostbite instance.

### MatchmakingRankedRule {#constructor-1}

> **MatchmakingRankedRule**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MatchmakingRankedRule](/vext/ref/fb/matchmakingrankedrule) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "minFitThreshold" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [MatchmakingRankedRule](/vext/ref/fb/matchmakingrankedrule)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MatchmakingRankedRule](/vext/ref/fb/matchmakingrankedrule)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MatchmakingRankedRule](/vext/ref/fb/matchmakingrankedrule) type.

