---
title: ClimbLadderComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ClimbLadderComponentData()                                                          | Create a new instance of this container type.                                                                                           |
| ClimbLadderComponentData(ClimbLadderComponentData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| ClimbLadderComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [ClimbLadderComponentData](ClimbLadderComponentData).                      |
| ClimbLadderComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [ClimbLadderComponentData](ClimbLadderComponentData).                    |
| ClimbLadderComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [ClimbLadderComponentData](ClimbLadderComponentData).              |
| ClimbLadderComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ClimbLadderComponentData](ClimbLadderComponentData). |

## Properties

| Name                     | Type                                     | Description |
| ------------------------ | ---------------------------------------- | ----------- |
| climbPhase               | number                                   |             |
| connectPhase             | number                                   |             |
| connectJointDisplacement | number                                   |             |
| binding                  | [ClimbLadderBinding](ClimbLadderBinding) |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [ClimbLadderComponentData](ClimbLadderComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ClimbLadderComponentData](ClimbLadderComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
