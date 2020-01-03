---
title: AutoTeamEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| AutoTeamEntityData()                                                          | Create a new instance of this container type.                                                                               |
| AutoTeamEntityData(AutoTeamEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| AutoTeamEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata/).                    |
| AutoTeamEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata/).              |
| AutoTeamEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata/).                            |
| AutoTeamEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata/).                    |
| AutoTeamEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata/).              |
| AutoTeamEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata/). |

## Properties

| Name                           | Type                             | Description |
| ------------------------------ | -------------------------------- | ----------- |
| teamDifferenceToAutoBalance    | number                           |             |
| teamAssignMode                 | [TeamAssignMode](/vext/ref/fb/teamassignmode/) |             |
| playerCountNeededToAutoBalance | number                           |             |
| forceIntoSquad                 | bool                             |             |
| rotateTeamOnNewRound           | bool                             |             |
| autoBalance                    | bool                             |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AutoTeamEntityData](/vext/ref/fb/autoteamentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
