---
title: SubWorldInclusionSetting
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| SubWorldInclusionSetting()                                                          | Create a new instance of this container type.                                                                                           |
| SubWorldInclusionSetting(SubWorldInclusionSetting other)                            | Create a reference copy of an instance of the same type.                                                                                |
| SubWorldInclusionSetting([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SubWorldInclusionSetting](/vext/ref/fb/subworldinclusionsetting/). |

## Properties

| Name           | Type                                                     | Description |
| -------------- | -------------------------------------------------------- | ----------- |
| criterion      | [SubWorldInclusionCriterion](/vext/ref/fb/subworldinclusioncriterion/) |             |
| enabledOptions | string\[\]                                               |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [SubWorldInclusionSetting](/vext/ref/fb/subworldinclusionsetting/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SubWorldInclusionSetting](/vext/ref/fb/subworldinclusionsetting/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
