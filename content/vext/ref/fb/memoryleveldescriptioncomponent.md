---
title: MemoryLevelDescriptionComponent
---
### Base Classes

[LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                   | Description                                                                                                                                              |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MemoryLevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                            |
| MemoryLevelDescriptionComponent(MemoryLevelDescriptionComponent other)                        | Create a reference copy of an instance of the same type.                                                                                                 |
| MemoryLevelDescriptionComponent([LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) other) | Upcast an instance of type [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) to [MemoryLevelDescriptionComponent](/vext/ref/fb/memoryleveldescriptioncomponent/). |
| MemoryLevelDescriptionComponent([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MemoryLevelDescriptionComponent](/vext/ref/fb/memoryleveldescriptioncomponent/).    |

## Properties

| Name                 | Type   | Description |
| -------------------- | ------ | ----------- |
| texturePoolSize      | number |             |
| texturePoolSizeXenon | number |             |
| texturePoolSizePs3   | number |             |
| meshPoolSizePs3      | number |             |
| meshPoolSizePs3Cell  | number |             |
| meshPoolSizeXenon    | number |             |

## Methods

| Type                                                               | Name            | Parameters                                     |
| ------------------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [MemoryLevelDescriptionComponent](/vext/ref/fb/memoryleveldescriptioncomponent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [MemoryLevelDescriptionComponent](/vext/ref/fb/memoryleveldescriptioncomponent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
