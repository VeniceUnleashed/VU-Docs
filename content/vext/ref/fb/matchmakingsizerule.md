---
title: MatchmakingSizeRule
---

## Summary

### Constructors

|  |
| --- |
| **[MatchmakingSizeRule](#constructor-0)**() |
| **[MatchmakingSizeRule](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "setting" >}} | string |
| {{< prop "configurations" >}} | [MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingSizeRule" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MatchmakingSizeRule {#constructor-0}

> **MatchmakingSizeRule**()

Creates a new [MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule) frostbite instance.

### MatchmakingSizeRule {#constructor-1}

> **MatchmakingSizeRule**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "setting" %}}

> **string**

### {{% prop-heading "configurations" %}}

> **[MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration)**[]

## Methods

### Clone {#clone}

> **Clone**(): [MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MatchmakingSizeRule](/vext/ref/fb/matchmakingsizerule) type.

