---
title: UIGraphEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UIGraphEntityData()                                                          | Create a new instance of this container type.                                                                             |
| UIGraphEntityData(UIGraphEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UIGraphEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [UIGraphEntityData](UIGraphEntityData).                            |
| UIGraphEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [UIGraphEntityData](UIGraphEntityData).                    |
| UIGraphEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [UIGraphEntityData](UIGraphEntityData).              |
| UIGraphEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIGraphEntityData](UIGraphEntityData). |

## Properties

| Name             | Type                               | Description |
| ---------------- | ---------------------------------- | ----------- |
| events           | [EventSpec](EventSpec)\[\]         |             |
| graphAsset       | [UIGraphAsset](UIGraphAsset)       |             |
| graphPriority    | [UIGraphPriority](UIGraphPriority) |             |
| state            | [UIState](UIState)                 |             |
| popPreviousGraph | bool                               |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UIGraphEntityData](UIGraphEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIGraphEntityData](UIGraphEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
