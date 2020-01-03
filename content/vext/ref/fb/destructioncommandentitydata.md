---
title: DestructionCommandEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                             | Description                                                                                                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| DestructionCommandEntityData()                                                          | Create a new instance of this container type.                                                                                                   |
| DestructionCommandEntityData(DestructionCommandEntityData other)                        | Create a reference copy of an instance of the same type.                                                                                        |
| DestructionCommandEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [DestructionCommandEntityData](/vext/ref/fb/destructioncommandentitydata/).                    |
| DestructionCommandEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [DestructionCommandEntityData](/vext/ref/fb/destructioncommandentitydata/).              |
| DestructionCommandEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [DestructionCommandEntityData](/vext/ref/fb/destructioncommandentitydata/).                            |
| DestructionCommandEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [DestructionCommandEntityData](/vext/ref/fb/destructioncommandentitydata/).                    |
| DestructionCommandEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [DestructionCommandEntityData](/vext/ref/fb/destructioncommandentitydata/).              |
| DestructionCommandEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DestructionCommandEntityData](/vext/ref/fb/destructioncommandentitydata/). |

## Properties

| Name                           | Type   | Description |
| ------------------------------ | ------ | ----------- |
| instanceCountDestroyedPerFrame | number |             |
| instanceCountDestroyedPerType  | number |             |

## Methods

| Type                                                         | Name            | Parameters                                     |
| ------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [DestructionCommandEntityData](/vext/ref/fb/destructioncommandentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [DestructionCommandEntityData](/vext/ref/fb/destructioncommandentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
