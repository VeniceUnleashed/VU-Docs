---
title: SpawnEntity
---

Inherits from [SpatialEntity](/vext/ref/shared/type/spatialentity)

## Summary

### Constructors

|  |
| --- |
| **[SpawnEntity](#constructor-0)**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer)) |
| **[SpawnEntity](#constructor-1)**(other: [Entity](/vext/ref/shared/type/entity)) |
| **[SpawnEntity](#constructor-2)**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "subBus" true >}} | [EntityBus](/vext/ref/shared/type/entitybus) |
| {{< prop "spawnTimer" >}} | float |
| {{< prop "spawnCount" true >}} | int |
| {{< prop "spawnDelay" true >}} | float |
| {{< prop "teamId" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "enabled" >}} | bool |
| {{< prop "locationNameSid" true >}} | string |
| {{< prop "canSpawnMore" true >}} | bool |
| {{< prop "driverEntryInputValid" true >}} | bool |
| {{< prop "driverControlled" true >}} | bool |
| {{< prop "isControlled" true >}} | bool |
| {{< prop "spawnRequested" true >}} | bool |
| {{< prop "isAutoSpawnCancelled" true >}} | bool |
| {{< prop "hasBeenInitialAutoSpawned" true >}} | bool |
| {{< prop "useFriendZones" true >}} | bool |
| {{< prop "spawnedControllables" true >}} | [ControllableEntity](/vext/ref/server/type/controllableentity){} |
| {{< prop "alternatePointIndexOrder" true >}} | int{} |

### Methods

| Method | Returns |
| ------ | ------- |
| **[IsAreaOccupiedByEnemies](#isareaoccupiedbyenemies)**(position: [Vec3](/vext/ref/shared/type/vec3), team: [TeamId](/vext/ref/fb/teamid)) | bool |
| **[IsAreaOccupiedByKilledTeamMembers](#isareaoccupiedbykilledteammembers)**(position: [Vec3](/vext/ref/shared/type/vec3), team: [TeamId](/vext/ref/fb/teamid)) | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SpawnEntity" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SpawnEntity {#constructor-0}

> **SpawnEntity**(other: [EntityBusPeer](/vext/ref/shared/type/entitybuspeer))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityBusPeer](/vext/ref/shared/type/entitybuspeer) |  |

### SpawnEntity {#constructor-1}

> **SpawnEntity**(other: [Entity](/vext/ref/shared/type/entity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Entity](/vext/ref/shared/type/entity) |  |

### SpawnEntity {#constructor-2}

> **SpawnEntity**(other: [SpatialEntity](/vext/ref/shared/type/spatialentity))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntity](/vext/ref/shared/type/spatialentity) |  |

## Properties

### {{% prop-heading "subBus" true %}}

> **[EntityBus](/vext/ref/shared/type/entitybus)**

### {{% prop-heading "spawnTimer" %}}

> **float**

### {{% prop-heading "spawnCount" true %}}

> **int**

### {{% prop-heading "spawnDelay" true %}}

> **float**

### {{% prop-heading "teamId" %}}

> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "enabled" %}}

> **bool**

### {{% prop-heading "locationNameSid" true %}}

> **string**

### {{% prop-heading "canSpawnMore" true %}}

> **bool**

### {{% prop-heading "driverEntryInputValid" true %}}

> **bool**

### {{% prop-heading "driverControlled" true %}}

> **bool**

### {{% prop-heading "isControlled" true %}}

> **bool**

### {{% prop-heading "spawnRequested" true %}}

> **bool**

### {{% prop-heading "isAutoSpawnCancelled" true %}}

> **bool**

### {{% prop-heading "hasBeenInitialAutoSpawned" true %}}

> **bool**

### {{% prop-heading "useFriendZones" true %}}

> **bool**

### {{% prop-heading "spawnedControllables" true %}}

> **[ControllableEntity](/vext/ref/server/type/controllableentity)**{}

### {{% prop-heading "alternatePointIndexOrder" true %}}

> **int**{}

## Methods

### IsAreaOccupiedByEnemies {#isareaoccupiedbyenemies}

> **IsAreaOccupiedByEnemies**(position: [Vec3](/vext/ref/shared/type/vec3), team: [TeamId](/vext/ref/fb/teamid)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **position** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### IsAreaOccupiedByKilledTeamMembers {#isareaoccupiedbykilledteammembers}

> **IsAreaOccupiedByKilledTeamMembers**(position: [Vec3](/vext/ref/shared/type/vec3), team: [TeamId](/vext/ref/fb/teamid)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **position** | [Vec3](/vext/ref/shared/type/vec3) |  |
| **team** | [TeamId](/vext/ref/fb/teamid) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

