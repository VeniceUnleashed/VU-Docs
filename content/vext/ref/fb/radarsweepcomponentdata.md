---
title: RadarSweepComponentData
---
### Base Classes

[ComponentData](ComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| RadarSweepComponentData()                                                          | Create a new instance of this container type.                                                                                         |
| RadarSweepComponentData(RadarSweepComponentData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| RadarSweepComponentData([ComponentData](ComponentData) other)                      | Upcast an instance of type [ComponentData](ComponentData) to [RadarSweepComponentData](RadarSweepComponentData).                      |
| RadarSweepComponentData([GameObjectData](GameObjectData) other)                    | Upcast an instance of type [GameObjectData](GameObjectData) to [RadarSweepComponentData](RadarSweepComponentData).                    |
| RadarSweepComponentData([GameDataContainer](GameDataContainer) other)              | Upcast an instance of type [GameDataContainer](GameDataContainer) to [RadarSweepComponentData](RadarSweepComponentData).              |
| RadarSweepComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RadarSweepComponentData](RadarSweepComponentData). |

## Properties

| Name                       | Type   | Description |
| -------------------------- | ------ | ----------- |
| controllableSpeedThreshold | number |             |
| controllableSweepRadius    | number |             |
| controllableSweepInterval  | number |             |
| mineSweepInterval          | number |             |
| mineSweepRadius            | number |             |
| sweepForMines              | bool   |             |
| sweepForControllables      | bool   |             |

## Methods

| Type                                               | Name            | Parameters                                     |
| -------------------------------------------------- | --------------- | ---------------------------------------------- |
| [RadarSweepComponentData](RadarSweepComponentData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RadarSweepComponentData](RadarSweepComponentData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
