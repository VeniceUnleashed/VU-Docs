---
title: RadarSweepComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                        | Description                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| RadarSweepComponentData()                                                          | Create a new instance of this container type.                                                                                         |
| RadarSweepComponentData(RadarSweepComponentData other)                             | Create a reference copy of an instance of the same type.                                                                              |
| RadarSweepComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata/).                      |
| RadarSweepComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata/).                    |
| RadarSweepComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata/).              |
| RadarSweepComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata/). |

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
| [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [RadarSweepComponentData](/vext/ref/fb/radarsweepcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
