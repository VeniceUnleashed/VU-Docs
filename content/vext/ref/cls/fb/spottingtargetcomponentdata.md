---
title: SpottingTargetComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| SpottingTargetComponentData()                                                          | Create a new instance of this container type.                                                                                                 |
| SpottingTargetComponentData(SpottingTargetComponentData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| SpottingTargetComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SpottingTargetComponentData](SpottingTargetComponentData).                      |
| SpottingTargetComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SpottingTargetComponentData](SpottingTargetComponentData).                    |
| SpottingTargetComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SpottingTargetComponentData](SpottingTargetComponentData).              |
| SpottingTargetComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SpottingTargetComponentData](SpottingTargetComponentData). |

## Properties

| Name                         | Type   | Description |
| ---------------------------- | ------ | ----------- |
| activeSpottedTime            | number |             |
| passiveSpottedTime           | number |             |
| activeSpottedTimeMultiplier  | number |             |
| passiveSpottedTimeMultiplier | number |             |
| spotOnFireMultiplier         | number |             |
| targetBoundingBoxCenter      | bool   |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SpottingTargetComponentData](SpottingTargetComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SpottingTargetComponentData](SpottingTargetComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
