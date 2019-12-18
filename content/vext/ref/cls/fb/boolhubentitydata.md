---
title: BoolHubEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| BoolHubEntityData()                                                          | Create a new instance of this container type.                                                                             |
| BoolHubEntityData(BoolHubEntityData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| BoolHubEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [BoolHubEntityData](BoolHubEntityData).                            |
| BoolHubEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [BoolHubEntityData](BoolHubEntityData).                    |
| BoolHubEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [BoolHubEntityData](BoolHubEntityData).              |
| BoolHubEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [BoolHubEntityData](BoolHubEntityData). |

## Properties

| Name        | Type           | Description |
| ----------- | -------------- | ----------- |
| realm       | [Realm](Realm) |             |
| inputCount  | number         |             |
| inputSelect | number         |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [BoolHubEntityData](BoolHubEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [BoolHubEntityData](BoolHubEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
