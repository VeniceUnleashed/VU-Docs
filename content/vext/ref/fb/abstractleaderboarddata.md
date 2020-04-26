---
title: AbstractLeaderboardData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[AbstractLeaderboardData](#constructor-0)**() |
| **[AbstractLeaderboardData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AbstractLeaderboardData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "leaderboardName" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AbstractLeaderboardData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AbstractLeaderboardData {#constructor-0}

> **AbstractLeaderboardData**()

Creates a new [AbstractLeaderboardData](/vext/ref/fb/abstractleaderboarddata) frostbite instance.

### AbstractLeaderboardData {#constructor-1}

> **AbstractLeaderboardData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AbstractLeaderboardData](/vext/ref/fb/abstractleaderboarddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AbstractLeaderboardData {#constructor-2}

> **AbstractLeaderboardData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AbstractLeaderboardData](/vext/ref/fb/abstractleaderboarddata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AbstractLeaderboardData](/vext/ref/fb/abstractleaderboarddata). |

## Properties

### {{% prop-heading "leaderboardName" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AbstractLeaderboardData](/vext/ref/fb/abstractleaderboarddata) type.

