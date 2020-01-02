---
title: UICoopLevelDescription
---
### Base Classes

[LevelDescriptionComponent](LevelDescriptionComponent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                            |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| UICoopLevelDescription()                                                             | Create a new instance of this container type.                                                                                          |
| UICoopLevelDescription(UICoopLevelDescription other)                                 | Create a reference copy of an instance of the same type.                                                                               |
| UICoopLevelDescription([LevelDescriptionComponent](LevelDescriptionComponent) other) | Upcast an instance of type [LevelDescriptionComponent](LevelDescriptionComponent) to [UICoopLevelDescription](UICoopLevelDescription). |
| UICoopLevelDescription([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICoopLevelDescription](UICoopLevelDescription).    |

## Properties

| Name             | Type       | Description |
| ---------------- | ---------- | ----------- |
| debriefing       | string     |             |
| devTime          | number     |             |
| unlockedByLevels | string\[\] |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UICoopLevelDescription](UICoopLevelDescription) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICoopLevelDescription](UICoopLevelDescription) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
