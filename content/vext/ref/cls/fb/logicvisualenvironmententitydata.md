---
title: LogicVisualEnvironmentEntityData (Frostbite Container)
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LogicVisualEnvironmentEntityData()                                                          | Create a new instance of this container type.                                                                                                           |
| LogicVisualEnvironmentEntityData(LogicVisualEnvironmentEntityData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| LogicVisualEnvironmentEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [LogicVisualEnvironmentEntityData](LogicVisualEnvironmentEntityData).                            |
| LogicVisualEnvironmentEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [LogicVisualEnvironmentEntityData](LogicVisualEnvironmentEntityData).                    |
| LogicVisualEnvironmentEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [LogicVisualEnvironmentEntityData](LogicVisualEnvironmentEntityData).              |
| LogicVisualEnvironmentEntityData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [LogicVisualEnvironmentEntityData](LogicVisualEnvironmentEntityData). |

## Properties

| Name              | Type                                                     | Description |
| ----------------- | -------------------------------------------------------- | ----------- |
| visualEnvironment | [VisualEnvironmentBlueprint](VisualEnvironmentBlueprint) |             |
| visibility        | number                                                   |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [LogicVisualEnvironmentEntityData](LogicVisualEnvironmentEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [LogicVisualEnvironmentEntityData](LogicVisualEnvironmentEntityData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
