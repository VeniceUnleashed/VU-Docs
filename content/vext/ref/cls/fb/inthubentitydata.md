---
title: IntHubEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| IntHubEntityData()                                                          | Create a new instance of this container type.                                                                           |
| IntHubEntityData(IntHubEntityData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| IntHubEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [IntHubEntityData](IntHubEntityData).                            |
| IntHubEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [IntHubEntityData](IntHubEntityData).                    |
| IntHubEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [IntHubEntityData](IntHubEntityData).              |
| IntHubEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [IntHubEntityData](IntHubEntityData). |

## Properties

| Name        | Type           | Description |
| ----------- | -------------- | ----------- |
| realm       | [Realm](Realm) |             |
| inputCount  | number         |             |
| inputSelect | number         |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [IntHubEntityData](IntHubEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [IntHubEntityData](IntHubEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
