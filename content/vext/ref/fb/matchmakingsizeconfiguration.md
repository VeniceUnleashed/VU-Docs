---
title: MatchmakingSizeConfiguration
---

## Summary

### Constructors

|  |
| --- |
| **[MatchmakingSizeConfiguration](#constructor-0)**() |
| **[MatchmakingSizeConfiguration](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "platform" >}} | [MatchmakingPlatform](/vext/ref/fb/matchmakingplatform) |
| {{< prop "settings" >}} | string[] |
| {{< prop "desiredPlayerCount" >}} | int |
| {{< prop "minPlayerCount" >}} | int |
| {{< prop "maxPlayerCapacity" >}} | int |
| {{< prop "minFitThreshold" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingSizeConfiguration" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MatchmakingSizeConfiguration {#constructor-0}

> **MatchmakingSizeConfiguration**()

Creates a new [MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration) frostbite instance.

### MatchmakingSizeConfiguration {#constructor-1}

> **MatchmakingSizeConfiguration**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "platform" %}}

> **[MatchmakingPlatform](/vext/ref/fb/matchmakingplatform)**

### {{% prop-heading "settings" %}}

> **string**[]

### {{% prop-heading "desiredPlayerCount" %}}

> **int**

### {{% prop-heading "minPlayerCount" %}}

> **int**

### {{% prop-heading "maxPlayerCapacity" %}}

> **int**

### {{% prop-heading "minFitThreshold" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MatchmakingSizeConfiguration](/vext/ref/fb/matchmakingsizeconfiguration) type.

