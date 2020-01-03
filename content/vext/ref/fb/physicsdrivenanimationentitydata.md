---
title: PhysicsDrivenAnimationEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                 | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PhysicsDrivenAnimationEntityData()                                                          | Create a new instance of this container type.                                                                                                           |
| PhysicsDrivenAnimationEntityData(PhysicsDrivenAnimationEntityData other)                    | Create a reference copy of an instance of the same type.                                                                                                |
| PhysicsDrivenAnimationEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [PhysicsDrivenAnimationEntityData](PhysicsDrivenAnimationEntityData).                            |
| PhysicsDrivenAnimationEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [PhysicsDrivenAnimationEntityData](PhysicsDrivenAnimationEntityData).                    |
| PhysicsDrivenAnimationEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [PhysicsDrivenAnimationEntityData](PhysicsDrivenAnimationEntityData).              |
| PhysicsDrivenAnimationEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsDrivenAnimationEntityData](PhysicsDrivenAnimationEntityData). |

## Properties

| Name                         | Type                                                                       | Description |
| ---------------------------- | -------------------------------------------------------------------------- | ----------- |
| realm                        | [Realm](Realm)                                                             |             |
| binding                      | [PhysicsDrivenAnimationEntityBinding](PhysicsDrivenAnimationEntityBinding) |             |
| animationEntitySpacePriority | number                                                                     |             |

## Methods

| Type                                                                 | Name            | Parameters                                     |
| -------------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PhysicsDrivenAnimationEntityData](PhysicsDrivenAnimationEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PhysicsDrivenAnimationEntityData](PhysicsDrivenAnimationEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
