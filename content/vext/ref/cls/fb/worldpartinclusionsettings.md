---
title: WorldPartInclusionSettings (Frostbite Container)
---
### Base Classes

[SubWorldInclusionSettings](SubWorldInclusionSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| WorldPartInclusionSettings()                                                             | Create a new instance of this container type.                                                                                                  |
| WorldPartInclusionSettings(WorldPartInclusionSettings other)                             | Create a reference copy of an instance of the same type.                                                                                       |
| WorldPartInclusionSettings([SubWorldInclusionSettings](SubWorldInclusionSettings) other) | Upcast an instance of type [SubWorldInclusionSettings](SubWorldInclusionSettings) to [WorldPartInclusionSettings](WorldPartInclusionSettings). |
| WorldPartInclusionSettings([DataContainer](/vext/ref/cls/shr/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [WorldPartInclusionSettings](WorldPartInclusionSettings).    |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WorldPartInclusionSettings](WorldPartInclusionSettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [WorldPartInclusionSettings](WorldPartInclusionSettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
