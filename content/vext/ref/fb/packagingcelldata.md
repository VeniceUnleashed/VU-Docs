---
title: PackagingCellData
---
### Base Classes

[EntityData](/vext/ref/fb/entitydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PackagingCellData()                                                          | Create a new instance of this container type.                                                                             |
| PackagingCellData(PackagingCellData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| PackagingCellData([EntityData](/vext/ref/fb/entitydata/) other)                            | Upcast an instance of type [EntityData](/vext/ref/fb/entitydata/) to [PackagingCellData](/vext/ref/fb/packagingcelldata/).                            |
| PackagingCellData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [PackagingCellData](/vext/ref/fb/packagingcelldata/).                    |
| PackagingCellData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [PackagingCellData](/vext/ref/fb/packagingcelldata/).              |
| PackagingCellData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PackagingCellData](/vext/ref/fb/packagingcelldata/). |

## Properties

| Name    | Type                                       | Description |
| ------- | ------------------------------------------ | ----------- |
| rules   | [PackagingRule](/vext/ref/fb/packagingrule/)\[\]         |             |
| targets | [PackagingCellData](/vext/ref/fb/packagingcelldata/)\[\] |             |
| shape   | [Vec2](/vext/ref/shared/class/vec2)\[\]      |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [PackagingCellData](/vext/ref/fb/packagingcelldata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PackagingCellData](/vext/ref/fb/packagingcelldata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
