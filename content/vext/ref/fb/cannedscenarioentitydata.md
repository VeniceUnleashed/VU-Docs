---
title: CannedScenarioEntityData
---
### Base Classes

[EntityData](EntityData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| CannedScenarioEntityData()                                                          | Create a new instance of this container type.                                                                                           |
| CannedScenarioEntityData(CannedScenarioEntityData other)                            | Create a reference copy of an instance of the same type.                                                                                |
| CannedScenarioEntityData([EntityData](EntityData) other)                            | Upcast an instance of type [EntityData](EntityData) to [CannedScenarioEntityData](CannedScenarioEntityData).                            |
| CannedScenarioEntityData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [CannedScenarioEntityData](CannedScenarioEntityData).                    |
| CannedScenarioEntityData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [CannedScenarioEntityData](CannedScenarioEntityData).              |
| CannedScenarioEntityData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CannedScenarioEntityData](CannedScenarioEntityData). |

## Properties

| Name                                 | Type                                             | Description |
| ------------------------------------ | ------------------------------------------------ | ----------- |
| cannedAnimBinding                    | [CannedAnimationBinding](CannedAnimationBinding) |             |
| animationEntitySpacePriority         | number                                           |             |
| alwaysClearEntitySpaceWhenInScenario | bool                                             |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [CannedScenarioEntityData](CannedScenarioEntityData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [CannedScenarioEntityData](CannedScenarioEntityData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
