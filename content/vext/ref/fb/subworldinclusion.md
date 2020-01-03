---
title: SubWorldInclusion
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| SubWorldInclusion()                                                          | Create a new instance of this container type.                                                                             |
| SubWorldInclusion(SubWorldInclusion other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| SubWorldInclusion([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [SubWorldInclusion](/vext/ref/fb/subworldinclusion/).                                      |
| SubWorldInclusion([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SubWorldInclusion](/vext/ref/fb/subworldinclusion/). |

## Properties

| Name     | Type                                                         | Description |
| -------- | ------------------------------------------------------------ | ----------- |
| criteria | [SubWorldInclusionCriterion](/vext/ref/fb/subworldinclusioncriterion/)\[\] |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [SubWorldInclusion](/vext/ref/fb/subworldinclusion/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SubWorldInclusion](/vext/ref/fb/subworldinclusion/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
