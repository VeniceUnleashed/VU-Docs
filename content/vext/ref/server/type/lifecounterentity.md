---
title: LifeCounterEntity
---

Inherits from [GameEntity](/vext/ref/server/type/gameentity)

## Summary

### Constructors

|  |
| --- |
| **[LifeCounterEntity](#constructor-0)**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer)) |
| **[LifeCounterEntity](#constructor-1)**(other: [Entity](/vext/ref/shared/type/entity)) |
| **[LifeCounterEntity](#constructor-2)**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity)) |
| **[LifeCounterEntity](#constructor-3)**(other: [GameEntity](/vext/ref/server/type/gameentity)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "startingLifeCounter" true >}} | int |
| {{< prop "lifeCounter" >}} | int |
| {{< prop "reinforceCounter" true >}} | int |
| {{< prop "deathCountSinceReinforce" true >}} | int |
| {{< prop "objectiveAliveCount" true >}} | int |
| {{< prop "lifeTreshold" true >}} | int |
| {{< prop "baseAliveCount" true >}} | int |
| {{< prop "teamId" true >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "isAttacker" true >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LifeCounterEntity" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LifeCounterEntity {#constructor-0}

> **LifeCounterEntity**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityBusPeer](/vext/ref/shared/type/entitybuspeer) |  |

### LifeCounterEntity {#constructor-1}

> **LifeCounterEntity**(other: [Entity](/vext/ref/shared/type/entity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Entity](/vext/ref/shared/type/entity) |  |

### LifeCounterEntity {#constructor-2}

> **LifeCounterEntity**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntity](/vext/ref/shared/type/spatialentity) |  |

### LifeCounterEntity {#constructor-3}

> **LifeCounterEntity**(other: [GameEntity](/vext/ref/server/type/gameentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntity](/vext/ref/server/type/gameentity) |  |

## Properties

### {{% prop-heading "startingLifeCounter" true %}}

> **int**

### {{% prop-heading "lifeCounter" %}}

> **int**

### {{% prop-heading "reinforceCounter" true %}}

> **int**

### {{% prop-heading "deathCountSinceReinforce" true %}}

> **int**

### {{% prop-heading "objectiveAliveCount" true %}}

> **int**

### {{% prop-heading "lifeTreshold" true %}}

> **int**

### {{% prop-heading "baseAliveCount" true %}}

> **int**

### {{% prop-heading "teamId" true %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "isAttacker" true %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

