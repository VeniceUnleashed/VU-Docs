---
title: TestPointEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| TestPointEntityData()                                                          | Create a new instance of this container type.                                                                                 |
| TestPointEntityData(TestPointEntityData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| TestPointEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [TestPointEntityData](TestPointEntityData).                    |
| TestPointEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [TestPointEntityData](TestPointEntityData).              |
| TestPointEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [TestPointEntityData](TestPointEntityData).                            |
| TestPointEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [TestPointEntityData](TestPointEntityData).                    |
| TestPointEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [TestPointEntityData](TestPointEntityData).              |
| TestPointEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [TestPointEntityData](TestPointEntityData). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| outputName | string |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [TestPointEntityData](TestPointEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [TestPointEntityData](TestPointEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
