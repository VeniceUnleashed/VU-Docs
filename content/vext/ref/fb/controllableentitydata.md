---
title: ControllableEntityData
---
### Base Classes

[GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                       | Description                                                                                                                         |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ControllableEntityData()                                                          | Create a new instance of this container type.                                                                                       |
| ControllableEntityData(ControllableEntityData other)                              | Create a reference copy of an instance of the same type.                                                                            |
| ControllableEntityData([GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) other)      | Upcast an instance of type [GamePhysicsEntityData](/vext/ref/fb/gamephysicsentitydata/) to [ControllableEntityData](/vext/ref/fb/controllableentitydata/).      |
| ControllableEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [ControllableEntityData](/vext/ref/fb/controllableentitydata/).                    |
| ControllableEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [ControllableEntityData](/vext/ref/fb/controllableentitydata/).              |
| ControllableEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [ControllableEntityData](/vext/ref/fb/controllableentitydata/).                            |
| ControllableEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [ControllableEntityData](/vext/ref/fb/controllableentitydata/).                    |
| ControllableEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [ControllableEntityData](/vext/ref/fb/controllableentitydata/).              |
| ControllableEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ControllableEntityData](/vext/ref/fb/controllableentitydata/). |

## Properties

| Name                       | Type                                           | Description |
| -------------------------- | ---------------------------------------------- | ----------- |
| lowHealthThreshold         | number                                         |             |
| defaultTeam                | [TeamId](/vext/ref/fb/teamid/)                               |             |
| materialPair               | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair/) |             |
| resetTeamOnLastPlayerExits | bool                                           |             |
| fakeImmortal               | bool                                           |             |
| usePrediction              | bool                                           |             |
| immortal                   | bool                                           |             |
| forceForegroundRendering   | bool                                           |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [ControllableEntityData](/vext/ref/fb/controllableentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ControllableEntityData](/vext/ref/fb/controllableentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
