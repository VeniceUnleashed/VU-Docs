---
title: HumanPlayerEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| HumanPlayerEntityData()                                                          | Create a new instance of this container type.                                                                                     |
| HumanPlayerEntityData(HumanPlayerEntityData other)                               | Create a reference copy of an instance of the same type.                                                                          |
| HumanPlayerEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [HumanPlayerEntityData](/vext/ref/fb/humanplayerentitydata/).                    |
| HumanPlayerEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [HumanPlayerEntityData](/vext/ref/fb/humanplayerentitydata/).              |
| HumanPlayerEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [HumanPlayerEntityData](/vext/ref/fb/humanplayerentitydata/).                            |
| HumanPlayerEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [HumanPlayerEntityData](/vext/ref/fb/humanplayerentitydata/).                    |
| HumanPlayerEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [HumanPlayerEntityData](/vext/ref/fb/humanplayerentitydata/).              |
| HumanPlayerEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [HumanPlayerEntityData](/vext/ref/fb/humanplayerentitydata/). |

## Properties

| Name               | Type   | Description |
| ------------------ | ------ | ----------- |
| playerKilledDelay  | number |             |
| lastManStandingSid | string |             |
| displayTime        | number |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [HumanPlayerEntityData](/vext/ref/fb/humanplayerentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [HumanPlayerEntityData](/vext/ref/fb/humanplayerentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
