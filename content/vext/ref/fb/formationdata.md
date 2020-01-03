---
title: FormationData
---
### Base Classes

[GameDataContainer](/vext/ref/fb/gamedatacontainer/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| FormationData()                                                          | Create a new instance of this container type.                                                                     |
| FormationData(FormationData other)                                       | Create a reference copy of an instance of the same type.                                                          |
| FormationData([GameDataContainer](/vext/ref/fb/gamedatacontainer/) other)              | Upcast an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer/) to [FormationData](/vext/ref/fb/formationdata/).              |
| FormationData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [FormationData](/vext/ref/fb/formationdata/). |

## Properties

| Name      | Type                                  | Description |
| --------- | ------------------------------------- | ----------- |
| positions | [Vec3](/vext/ref/shared/class/vec3)\[\] |             |
| name      | string                                |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [FormationData](/vext/ref/fb/formationdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [FormationData](/vext/ref/fb/formationdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
