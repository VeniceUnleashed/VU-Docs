---
title: WorldPartInclusionSetting
---
### Base Classes

[SubWorldInclusionSetting](/vext/ref/fb/subworldinclusionsetting/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| WorldPartInclusionSetting()                                                           | Create a new instance of this container type.                                                                                              |
| WorldPartInclusionSetting(WorldPartInclusionSetting other)                            | Create a reference copy of an instance of the same type.                                                                                   |
| WorldPartInclusionSetting([SubWorldInclusionSetting](/vext/ref/fb/subworldinclusionsetting/) other) | Upcast an instance of type [SubWorldInclusionSetting](/vext/ref/fb/subworldinclusionsetting/) to [WorldPartInclusionSetting](/vext/ref/fb/worldpartinclusionsetting/). |
| WorldPartInclusionSetting([DataContainer](/vext/ref/shared/class/datacontainer) other)  | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WorldPartInclusionSetting](/vext/ref/fb/worldpartinclusionsetting/).  |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [WorldPartInclusionSetting](/vext/ref/fb/worldpartinclusionsetting/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [WorldPartInclusionSetting](/vext/ref/fb/worldpartinclusionsetting/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
