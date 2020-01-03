---
title: MaterialContainerPair
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| MaterialContainerPair()                                                          | Create a new instance of this container type.                                                                                     |
| MaterialContainerPair(MaterialContainerPair other)                               | Create a reference copy of an instance of the same type.                                                                          |
| MaterialContainerPair([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialContainerPair](MaterialContainerPair). |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| flagsAndIndex        | number |             |
| physicsPropertyIndex | number |             |
| physicsMaterialIndex | number |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [MaterialContainerPair](MaterialContainerPair) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MaterialContainerPair](MaterialContainerPair) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
