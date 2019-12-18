---
title: SoldierSoundComponentData (Frostbite Container)
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierSoundComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| SoldierSoundComponentData(SoldierSoundComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SoldierSoundComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [SoldierSoundComponentData](SoldierSoundComponentData).                      |
| SoldierSoundComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [SoldierSoundComponentData](SoldierSoundComponentData).                    |
| SoldierSoundComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [SoldierSoundComponentData](SoldierSoundComponentData).              |
| SoldierSoundComponentData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierSoundComponentData](SoldierSoundComponentData). |

## Properties

| Name                  | Type   | Description |
| --------------------- | ------ | ----------- |
| walkVelocityThreshold | number |             |
| runVelocityThreshold  | number |             |
| walkPeriod            | number |             |
| runPeriod             | number |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierSoundComponentData](SoldierSoundComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierSoundComponentData](SoldierSoundComponentData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
