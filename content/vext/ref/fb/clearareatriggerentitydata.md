---
title: ClearAreaTriggerEntityData
---
### Base Classes

[TriggerEntityData](/vext/ref/fb/triggerentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| ClearAreaTriggerEntityData()                                                          | Create a new instance of this container type.                                                                                               |
| ClearAreaTriggerEntityData(ClearAreaTriggerEntityData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| ClearAreaTriggerEntityData([TriggerEntityData](/vext/ref/fb/triggerentitydata/) other)              | Upcast an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata/) to [ClearAreaTriggerEntityData](/vext/ref/fb/clearareatriggerentitydata/).              |
| ClearAreaTriggerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [ClearAreaTriggerEntityData](/vext/ref/fb/clearareatriggerentitydata/).                    |
| ClearAreaTriggerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [ClearAreaTriggerEntityData](/vext/ref/fb/clearareatriggerentitydata/).              |
| ClearAreaTriggerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ClearAreaTriggerEntityData](/vext/ref/fb/clearareatriggerentitydata/).                            |
| ClearAreaTriggerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ClearAreaTriggerEntityData](/vext/ref/fb/clearareatriggerentitydata/).                    |
| ClearAreaTriggerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ClearAreaTriggerEntityData](/vext/ref/fb/clearareatriggerentitydata/).              |
| ClearAreaTriggerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClearAreaTriggerEntityData](/vext/ref/fb/clearareatriggerentitydata/). |

## Properties

| Name                          | Type             | Description |
| ----------------------------- | ---------------- | ----------- |
| teamOfImmortalSoldiers        | [TeamId](/vext/ref/fb/teamid/) |             |
| removeBangers                 | bool             |             |
| removeVehicles                | bool             |             |
| removeEffects                 | bool             |             |
| removeStaticModels            | bool             |             |
| removeDebrisClusters          | bool             |             |
| excludeImmortalSoldiersInTeam | bool             |             |
| removeMeshProxies             | bool             |             |
| removeSoldiers                | bool             |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ClearAreaTriggerEntityData](/vext/ref/fb/clearareatriggerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ClearAreaTriggerEntityData](/vext/ref/fb/clearareatriggerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
