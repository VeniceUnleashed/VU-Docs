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
| SoldierSprintSettingsData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierSprintSettingsData](/vext/ref/fb/soldiersprintsettingsdata/). |

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
| interruptingActions      | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/)\[\] |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SoldierSprintSettingsData](/vext/ref/fb/soldiersprintsettingsdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierSprintSettingsData](/vext/ref/fb/soldiersprintsettingsdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
