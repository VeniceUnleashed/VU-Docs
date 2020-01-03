---
title: UIKitItemDescription
---
### Base Classes

[UIItemDescription](UIItemDescription)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIKitItemDescription()                                                          | Create a new instance of this container type.                                                                                   |
| UIKitItemDescription(UIKitItemDescription other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIKitItemDescription([UIItemDescription](UIItemDescription) other)              | Upcast an instance of type [UIItemDescription](UIItemDescription) to [UIKitItemDescription](UIKitItemDescription).              |
| UIKitItemDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIKitItemDescription](UIKitItemDescription). |

## Properties

| Name                     | Type                   | Description |
| ------------------------ | ---------------------- | ----------- |
| name                     | string                 |             |
| unlockName               | string                 |             |
| description              | string                 |             |
| category                 | string                 |             |
| texturePath              | string                 |             |
| iconTexturePath          | string                 |             |
| unlockTexturePath        | string                 |             |
| hudIcon                  | [UIHudIcon](UIHudIcon) |             |
| notExplicitelySelectable | bool                   |             |
| hiddenInProgression      | bool                   |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIKitItemDescription](UIKitItemDescription) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIKitItemDescription](UIKitItemDescription) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
