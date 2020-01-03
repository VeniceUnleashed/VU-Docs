---
title: StreamGridEntityData
---
### Base Classes

[SpatialEntityData](/vext/ref/fb/spatialentitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| StreamGridEntityData()                                                          | Create a new instance of this container type.                                                                                   |
| StreamGridEntityData(StreamGridEntityData other)                                | Create a reference copy of an instance of the same type.                                                                        |
| StreamGridEntityData([SpatialEntityData](/vext/ref/fb/spatialentitydata/) other)              | Upcast an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata/) to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata/).              |
| StreamGridEntityData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata/).                            |
| StreamGridEntityData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata/).                    |
| StreamGridEntityData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata/).              |
| StreamGridEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [StreamGridEntityData](/vext/ref/fb/streamgridentitydata/). |

## Properties

| Name                      | Type                                 | Description |
| ------------------------- | ------------------------------------ | ----------- |
| cellSize                  | number                               |             |
| viewDistance              | number                               |             |
| maxStreamInCountPerFrame  | number                               |             |
| maxStreamOutCountPerFrame | number                               |             |
| cells                     | [StreamGridCell](/vext/ref/fb/streamgridcell/)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [StreamGridEntityData](/vext/ref/fb/streamgridentitydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [StreamGridEntityData](/vext/ref/fb/streamgridentitydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
