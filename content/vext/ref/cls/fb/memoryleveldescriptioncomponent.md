---
title: MemoryLevelDescriptionComponent (Frostbite Container)
---
### Base Classes

[LevelDescriptionComponent](LevelDescriptionComponent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                                   | Description                                                                                                                                              |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MemoryLevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                            |
| MemoryLevelDescriptionComponent(MemoryLevelDescriptionComponent other)                        | Create a reference copy of an instance of the same type.                                                                                                 |
| MemoryLevelDescriptionComponent([LevelDescriptionComponent](LevelDescriptionComponent) other) | Upcast an instance of type [LevelDescriptionComponent](LevelDescriptionComponent) to [MemoryLevelDescriptionComponent](MemoryLevelDescriptionComponent). |
| MemoryLevelDescriptionComponent([DataContainer](/vext/ref/cls/shr/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [MemoryLevelDescriptionComponent](MemoryLevelDescriptionComponent).    |

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
| [MemoryLevelDescriptionComponent](MemoryLevelDescriptionComponent) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [MemoryLevelDescriptionComponent](MemoryLevelDescriptionComponent) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
