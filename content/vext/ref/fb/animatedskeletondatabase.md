---
title: AnimatedSkeletonDatabase
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| AnimatedSkeletonDatabase()                                                          | Create a new instance of this container type.                                                                                           |
| AnimatedSkeletonDatabase(AnimatedSkeletonDatabase other)                            | Create a reference copy of an instance of the same type.                                                                                |
| AnimatedSkeletonDatabase([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedSkeletonDatabase](/vext/ref/fb/animatedskeletondatabase/). |

## Properties

| Name     | Type                                                             | Description |
| -------- | ---------------------------------------------------------------- | ----------- |
| ragdolls | [RagdollAsset](/vext/ref/fb/ragdollasset/)\[\]                                 |             |
| items    | [AnimatedSkeletonDatabaseItem](/vext/ref/fb/animatedskeletondatabaseitem/)\[\] |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [AnimatedSkeletonDatabase](/vext/ref/fb/animatedskeletondatabase/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [AnimatedSkeletonDatabase](/vext/ref/fb/animatedskeletondatabase/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
