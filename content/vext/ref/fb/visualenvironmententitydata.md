---
title: VisualEnvironmentEntityData
---
### Base Classes

[GameEntityData](GameEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| VisualEnvironmentEntityData()                                                          | Create a new instance of this container type.                                                                                                 |
| VisualEnvironmentEntityData(VisualEnvironmentEntityData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| VisualEnvironmentEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [VisualEnvironmentEntityData](VisualEnvironmentEntityData).                    |
| VisualEnvironmentEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [VisualEnvironmentEntityData](VisualEnvironmentEntityData).              |
| VisualEnvironmentEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [VisualEnvironmentEntityData](VisualEnvironmentEntityData).                            |
| VisualEnvironmentEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [VisualEnvironmentEntityData](VisualEnvironmentEntityData).                    |
| VisualEnvironmentEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [VisualEnvironmentEntityData](VisualEnvironmentEntityData).              |
| VisualEnvironmentEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VisualEnvironmentEntityData](VisualEnvironmentEntityData). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| visibility | number |             |
| priority   | number |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [VisualEnvironmentEntityData](VisualEnvironmentEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [VisualEnvironmentEntityData](VisualEnvironmentEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
