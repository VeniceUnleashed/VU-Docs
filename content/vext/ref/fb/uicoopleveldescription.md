---
title: UICoopLevelDescription
---
### Base Classes

[LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                            |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| UICoopLevelDescription()                                                             | Create a new instance of this container type.                                                                                          |
| UICoopLevelDescription(UICoopLevelDescription other)                                 | Create a reference copy of an instance of the same type.                                                                               |
| UICoopLevelDescription([LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) other) | Upcast an instance of type [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) to [UICoopLevelDescription](/vext/ref/fb/uicoopleveldescription/). |
| UICoopLevelDescription([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UICoopLevelDescription](/vext/ref/fb/uicoopleveldescription/).    |

## Properties

| Name             | Type       | Description |
| ---------------- | ---------- | ----------- |
| debriefing       | string     |             |
| devTime          | number     |             |
| unlockedByLevels | string\[\] |             |

## Methods

| Type                                             | Name            | Parameters                                     |
| ------------------------------------------------ | --------------- | ---------------------------------------------- |
| [UICoopLevelDescription](/vext/ref/fb/uicoopleveldescription/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UICoopLevelDescription](/vext/ref/fb/uicoopleveldescription/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
