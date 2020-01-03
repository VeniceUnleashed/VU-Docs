---
title: PackagingCellData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| PackagingCellData()                                                          | Create a new instance of this container type.                                                                             |
| PackagingCellData(PackagingCellData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| PackagingCellData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PackagingCellData](PackagingCellData).                            |
| PackagingCellData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PackagingCellData](PackagingCellData).                    |
| PackagingCellData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PackagingCellData](PackagingCellData).              |
| PackagingCellData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PackagingCellData](PackagingCellData). |

## Properties

| Name    | Type                                       | Description |
| ------- | ------------------------------------------ | ----------- |
| rules   | [PackagingRule](PackagingRule)\[\]         |             |
| targets | [PackagingCellData](PackagingCellData)\[\] |             |
| shape   | [Vec2](/vext/ref/shared/class/Vec2)\[\]      |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [PackagingCellData](PackagingCellData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PackagingCellData](PackagingCellData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
