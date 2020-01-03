---
title: SoldierSprintSettingsData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SoldierSprintSettingsData()                                                          | Create a new instance of this container type.                                                                                             |
| SoldierSprintSettingsData(SoldierSprintSettingsData other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SoldierSprintSettingsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierSprintSettingsData](SoldierSprintSettingsData). |

## Properties

| Name                     | Type                                             | Description |
| ------------------------ | ------------------------------------------------ | ----------- |
| fov                      | number                                           |             |
| fovInDelay               | number                                           |             |
| fovInTime                | number                                           |             |
| fovOutDelay              | number                                           |             |
| fovOutTime               | number                                           |             |
| recoverTime              | number                                           |             |
| sprintToProneRecoverTime | number                                           |             |
| interruptingActions      | [EntryInputActionEnum](EntryInputActionEnum)\[\] |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierSprintSettingsData](SoldierSprintSettingsData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierSprintSettingsData](SoldierSprintSettingsData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
