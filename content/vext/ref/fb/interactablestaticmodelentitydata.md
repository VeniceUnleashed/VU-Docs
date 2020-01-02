---
title: InteractableStaticModelEntityData
---
### Base Classes

[StaticModelEntityData](StaticModelEntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                  | Description                                                                                                                                               |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| InteractableStaticModelEntityData()                                                          | Create a new instance of this container type.                                                                                                             |
| InteractableStaticModelEntityData(InteractableStaticModelEntityData other)                   | Create a reference copy of an instance of the same type.                                                                                                  |
| InteractableStaticModelEntityData([StaticModelEntityData](StaticModelEntityData) other)      | Upcast an instance of type [StaticModelEntityData](StaticModelEntityData) to [InteractableStaticModelEntityData](InteractableStaticModelEntityData).      |
| InteractableStaticModelEntityData([GamePhysicsEntityData](GamePhysicsEntityData) other)      | Upcast an instance of type [GamePhysicsEntityData](GamePhysicsEntityData) to [InteractableStaticModelEntityData](InteractableStaticModelEntityData).      |
| InteractableStaticModelEntityData([GameEntityData](GameEntityData) other)                    | Upcast an instance of type [GameEntityData](GameEntityData) to [InteractableStaticModelEntityData](InteractableStaticModelEntityData).                    |
| InteractableStaticModelEntityData([SpatialEntityData](SpatialEntityData) other)              | Upcast an instance of type [SpatialEntityData](SpatialEntityData) to [InteractableStaticModelEntityData](InteractableStaticModelEntityData).              |
| InteractableStaticModelEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [InteractableStaticModelEntityData](InteractableStaticModelEntityData).                            |
| InteractableStaticModelEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [InteractableStaticModelEntityData](InteractableStaticModelEntityData).                    |
| InteractableStaticModelEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [InteractableStaticModelEntityData](InteractableStaticModelEntityData).              |
| InteractableStaticModelEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InteractableStaticModelEntityData](InteractableStaticModelEntityData). |

## Methods

| Type                                                                   | Name            | Parameters                                     |
| ---------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [InteractableStaticModelEntityData](InteractableStaticModelEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [InteractableStaticModelEntityData](InteractableStaticModelEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
