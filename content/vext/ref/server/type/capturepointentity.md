---
title: CapturePointEntity
---

Inherits from [GameEntity](/vext/ref/server/type/gameentity)

## Summary

### Constructors

|  |
| --- |
| **[CapturePointEntity](#constructor-0)**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer)) |
| **[CapturePointEntity](#constructor-1)**(other: [Entity](/vext/ref/shared/type/entity)) |
| **[CapturePointEntity](#constructor-2)**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity)) |
| **[CapturePointEntity](#constructor-3)**(other: [GameEntity](/vext/ref/server/type/gameentity)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" true >}} | string |
| {{< prop "playersInside" true >}} | [Player](/vext/ref/server/type/player){} |
| {{< prop "flagPole" true >}} | [Entity](/vext/ref/shared/type/entity) \| nil |
| {{< prop "isInPreRound" true >}} | bool |
| {{< prop "isAttacked" true >}} | bool |
| {{< prop "previousOwner" true >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "attackingTeam" true >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "isFlagMoving" true >}} | bool |
| {{< prop "team" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "flagVelocity" >}} | float |
| {{< prop "flagLocation" >}} | float |
| {{< prop "flagHome" >}} | float |
| {{< prop "isControlled" >}} | bool |
| {{< prop "isCaptureEnabled" >}} | bool |
| {{< prop "cooldownTimer" >}} | float |
| {{< prop "team1CooldownPenalty" >}} | float |
| {{< prop "team2CooldownPenalty" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CapturePointEntity" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CapturePointEntity {#constructor-0}

> **CapturePointEntity**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityBusPeer](/vext/ref/shared/type/entitybuspeer) |  |

### CapturePointEntity {#constructor-1}

> **CapturePointEntity**(other: [Entity](/vext/ref/shared/type/entity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Entity](/vext/ref/shared/type/entity) |  |

### CapturePointEntity {#constructor-2}

> **CapturePointEntity**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntity](/vext/ref/shared/type/spatialentity) |  |

### CapturePointEntity {#constructor-3}

> **CapturePointEntity**(other: [GameEntity](/vext/ref/server/type/gameentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntity](/vext/ref/server/type/gameentity) |  |

## Properties

### {{% prop-heading "name" true %}}

> **string**

### {{% prop-heading "playersInside" true %}}

> **[Player](/vext/ref/server/type/player)**{}

### {{% prop-heading "flagPole" true %}}

> **[Entity](/vext/ref/shared/type/entity)** \| **nil**

### {{% prop-heading "isInPreRound" true %}}

> **bool**

### {{% prop-heading "isAttacked" true %}}

> **bool**

### {{% prop-heading "previousOwner" true %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "attackingTeam" true %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "isFlagMoving" true %}}

> **bool**

### {{% prop-heading "team" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "flagVelocity" %}}

> **float**

### {{% prop-heading "flagLocation" %}}

> **float**

### {{% prop-heading "flagHome" %}}

> **float**

### {{% prop-heading "isControlled" %}}

> **bool**

### {{% prop-heading "isCaptureEnabled" %}}

> **bool**

### {{% prop-heading "cooldownTimer" %}}

> **float**

### {{% prop-heading "team1CooldownPenalty" %}}

> **float**

### {{% prop-heading "team2CooldownPenalty" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

