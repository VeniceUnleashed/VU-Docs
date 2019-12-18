---
title: SubWorldInclusionSettings (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| SubWorldInclusionSettings()                                                          | Create a new instance of this container type.                                                                                             |
| SubWorldInclusionSettings(SubWorldInclusionSettings other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| SubWorldInclusionSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SubWorldInclusionSettings](SubWorldInclusionSettings). |

## Properties

| Name     | Type                                                     | Description |
| -------- | -------------------------------------------------------- | ----------- |
| settings | [SubWorldInclusionSetting](SubWorldInclusionSetting)\[\] |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [SubWorldInclusionSettings](SubWorldInclusionSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SubWorldInclusionSettings](SubWorldInclusionSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
