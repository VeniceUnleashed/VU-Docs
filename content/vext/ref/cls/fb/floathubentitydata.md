---
title: FloatHubEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| FloatHubEntityData()                                                          | Create a new instance of this container type.                                                                               |
| FloatHubEntityData(FloatHubEntityData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| FloatHubEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [FloatHubEntityData](FloatHubEntityData).                            |
| FloatHubEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [FloatHubEntityData](FloatHubEntityData).                    |
| FloatHubEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [FloatHubEntityData](FloatHubEntityData).              |
| FloatHubEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [FloatHubEntityData](FloatHubEntityData). |

## Properties

| Name        | Type           | Description |
| ----------- | -------------- | ----------- |
| realm       | [Realm](Realm) |             |
| inputCount  | number         |             |
| inputSelect | number         |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [FloatHubEntityData](FloatHubEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [FloatHubEntityData](FloatHubEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
