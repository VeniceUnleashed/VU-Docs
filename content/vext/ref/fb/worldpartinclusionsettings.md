---
title: WorldPartInclusionSettings
---
### Base Classes

[SubWorldInclusionSettings](/vext/ref/fb/subworldinclusionsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| WorldPartInclusionSettings()                                                             | Create a new instance of this container type.                                                                                                  |
| WorldPartInclusionSettings(WorldPartInclusionSettings other)                             | Create a reference copy of an instance of the same type.                                                                                       |
| WorldPartInclusionSettings([SubWorldInclusionSettings](/vext/ref/fb/subworldinclusionsettings/) other) | Upcast an instance of type [SubWorldInclusionSettings](/vext/ref/fb/subworldinclusionsettings/) to [WorldPartInclusionSettings](/vext/ref/fb/worldpartinclusionsettings/). |
| WorldPartInclusionSettings([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WorldPartInclusionSettings](/vext/ref/fb/worldpartinclusionsettings/).    |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [WorldPartInclusionSettings](/vext/ref/fb/worldpartinclusionsettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WorldPartInclusionSettings](/vext/ref/fb/worldpartinclusionsettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
