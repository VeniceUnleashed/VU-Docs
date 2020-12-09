---
title: ControllableEntity
---

Inherits from [PhysicsEntity](/vext/ref/client/type/physicsentity)

## Summary

### Constructors

|  |
| --- |
| **[ControllableEntity](#constructor-0)**(other: [Entity](/vext/ref/shared/type/entity)) |
| **[ControllableEntity](#constructor-1)**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity)) |
| **[ControllableEntity](#constructor-2)**(other: [GameEntity](/vext/ref/client/type/gameentity)) |
| **[ControllableEntity](#constructor-3)**(other: [PhysicsEntity](/vext/ref/client/type/physicsentity)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "entryCount" true >}} | int |
| {{< prop "teamId" true >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "defaultTeamId" true >}} | [TeamId](/vext/ref/fb/teamid) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[GetPlayerInEntry](#getplayerinentry)**(entryId: int) | [Player](/vext/ref/client/type/player) \| nil |
| **[GetDataForEntry](#getdataforentry)**(entryId: int) | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ControllableEntity" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ControllableEntity {#constructor-0}

> **ControllableEntity**(other: [Entity](/vext/ref/shared/type/entity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Entity](/vext/ref/shared/type/entity) |  |

### ControllableEntity {#constructor-1}

> **ControllableEntity**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntity](/vext/ref/shared/type/spatialentity) |  |

### ControllableEntity {#constructor-2}

> **ControllableEntity**(other: [GameEntity](/vext/ref/client/type/gameentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntity](/vext/ref/client/type/gameentity) |  |

### ControllableEntity {#constructor-3}

> **ControllableEntity**(other: [PhysicsEntity](/vext/ref/client/type/physicsentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PhysicsEntity](/vext/ref/client/type/physicsentity) |  |

## Properties

### {{% prop-heading "entryCount" true %}}

> **int**

### {{% prop-heading "teamId" true %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "defaultTeamId" true %}}

> **[TeamId](/vext/ref/fb/teamid)**

## Methods

### GetPlayerInEntry {#getplayerinentry}

> **GetPlayerInEntry**(entryId: int): [Player](/vext/ref/client/type/player) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entryId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Player](/vext/ref/client/type/player)** \| **nil** |  |

### GetDataForEntry {#getdataforentry}

> **GetDataForEntry**(entryId: int): [DataContainer](/vext/ref/shared/type/datacontainer) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **entryId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil** |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

