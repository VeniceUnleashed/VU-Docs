---
title: CombatAreaTriggerEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| CombatAreaTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| CombatAreaTriggerEntityData(CombatAreaTriggerEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| CombatAreaTriggerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata/).                    |
| CombatAreaTriggerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata/).              |
| CombatAreaTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata/).                            |
| CombatAreaTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata/).                    |
| CombatAreaTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata/).              |
| CombatAreaTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata/). |

## Properties

| Name                 | Type                                 | Description |
| -------------------- | ------------------------------------ | ----------- |
| maxRandomSpawnHeight | number                               |             |
| spawnHeight          | number                               |             |
| timeToReturn         | number                               |             |
| deserterProjectile   | [BulletEntityData](/vext/ref/fb/bulletentitydata/) |             |
| team                 | [TeamId](/vext/ref/fb/teamid/)                     |             |
| strikeRadius         | number                               |             |
| initalSpeed          | number                               |             |
| isAiAllowedOutside   | bool                                 |             |
| isTeamSpecific       | bool                                 |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
