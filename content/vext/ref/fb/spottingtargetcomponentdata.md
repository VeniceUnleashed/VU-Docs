---
title: SpottingTargetComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                            | Description                                                                                                                                   |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| SpottingTargetComponentData()                                                          | Create a new instance of this container type.                                                                                                 |
| SpottingTargetComponentData(SpottingTargetComponentData other)                         | Create a reference copy of an instance of the same type.                                                                                      |
| SpottingTargetComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SpottingTargetComponentData](/vext/ref/fb/spottingtargetcomponentdata/).                      |
| SpottingTargetComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SpottingTargetComponentData](/vext/ref/fb/spottingtargetcomponentdata/).                    |
| SpottingTargetComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SpottingTargetComponentData](/vext/ref/fb/spottingtargetcomponentdata/).              |
| SpottingTargetComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpottingTargetComponentData](/vext/ref/fb/spottingtargetcomponentdata/). |

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
| [SpottingTargetComponentData](/vext/ref/fb/spottingtargetcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SpottingTargetComponentData](/vext/ref/fb/spottingtargetcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
