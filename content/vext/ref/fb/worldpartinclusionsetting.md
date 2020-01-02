---
title: WorldPartInclusionSetting
---
### Base Classes

[SubWorldInclusionSetting](SubWorldInclusionSetting)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| WorldPartInclusionSetting()                                                           | Create a new instance of this container type.                                                                                              |
| WorldPartInclusionSetting(WorldPartInclusionSetting other)                            | Create a reference copy of an instance of the same type.                                                                                   |
| WorldPartInclusionSetting([SubWorldInclusionSetting](SubWorldInclusionSetting) other) | Upcast an instance of type [SubWorldInclusionSetting](SubWorldInclusionSetting) to [WorldPartInclusionSetting](WorldPartInclusionSetting). |
| WorldPartInclusionSetting([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WorldPartInclusionSetting](WorldPartInclusionSetting).  |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WorldPartInclusionSetting](WorldPartInclusionSetting) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WorldPartInclusionSetting](WorldPartInclusionSetting) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
