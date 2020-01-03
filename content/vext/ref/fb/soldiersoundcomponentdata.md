---
title: SoldierSoundComponentData
---
### Base Classes

[ComponentData](/vext/ref/fb/componentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierSoundComponentData()                                                          | Create a new instance of this container type.                                                                                             |
| SoldierSoundComponentData(SoldierSoundComponentData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SoldierSoundComponentData([ComponentData](/vext/ref/fb/componentdata/) other)                      | Upcast an instance of type [ComponentData](/vext/ref/fb/componentdata/) to [SoldierSoundComponentData](/vext/ref/fb/soldiersoundcomponentdata/).                      |
| SoldierSoundComponentData([GameObjectData](/vext/ref/fb/gameobjectdata/) other)                    | Upcast an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata/) to [SoldierSoundComponentData](/vext/ref/fb/soldiersoundcomponentdata/).                    |
| SoldierSoundComponentData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [SoldierSoundComponentData](/vext/ref/fb/soldiersoundcomponentdata/).              |
| SoldierSoundComponentData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierSoundComponentData](/vext/ref/fb/soldiersoundcomponentdata/). |

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
| [SoldierSoundComponentData](/vext/ref/fb/soldiersoundcomponentdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierSoundComponentData](/vext/ref/fb/soldiersoundcomponentdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
