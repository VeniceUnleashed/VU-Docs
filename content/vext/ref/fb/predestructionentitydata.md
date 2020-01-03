---
title: PredestructionEntityData
---
### Base Classes

[GameEntityData](/vext/ref/fb/gameentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| PredestructionEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| PredestructionEntityData(PredestructionEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| PredestructionEntityData([GameEntityData](/vext/ref/fb/gameentitydata/) other)                    | Upcast an instance of type [GameEntityData](/vext/ref/fb/gameentitydata/) to [PredestructionEntityData](/vext/ref/fb/predestructionentitydata/).                    |
| PredestructionEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [PredestructionEntityData](/vext/ref/fb/predestructionentitydata/).              |
| PredestructionEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PredestructionEntityData](/vext/ref/fb/predestructionentitydata/).                            |
| PredestructionEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PredestructionEntityData](/vext/ref/fb/predestructionentitydata/).                    |
| PredestructionEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PredestructionEntityData](/vext/ref/fb/predestructionentitydata/).              |
| PredestructionEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PredestructionEntityData](/vext/ref/fb/predestructionentitydata/). |

## Properties

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| radius | number |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PredestructionEntityData](/vext/ref/fb/predestructionentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PredestructionEntityData](/vext/ref/fb/predestructionentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
