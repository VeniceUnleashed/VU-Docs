---
title: SubWorldInclusionSettings
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SubWorldInclusionSettings()                                                          | Create a new instance of this container type.                                                                                             |
| SubWorldInclusionSettings(SubWorldInclusionSettings other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SubWorldInclusionSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SubWorldInclusionSettings](SubWorldInclusionSettings). |

## Properties

| Name     | Type                                                     | Description |
| -------- | -------------------------------------------------------- | ----------- |
| settings | [SubWorldInclusionSetting](SubWorldInclusionSetting)\[\] |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SubWorldInclusionSettings](SubWorldInclusionSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SubWorldInclusionSettings](SubWorldInclusionSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
