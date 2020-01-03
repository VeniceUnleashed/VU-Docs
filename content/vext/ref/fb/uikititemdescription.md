---
title: UIKitItemDescription
---
### Base Classes

[UIItemDescription](/vext/ref/fb/uiitemdescription/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UIKitItemDescription()                                                          | Create a new instance of this container type.                                                                                   |
| UIKitItemDescription(UIKitItemDescription other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UIKitItemDescription([UIItemDescription](/vext/ref/fb/uiitemdescription/) other)              | Upcast an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription/) to [UIKitItemDescription](/vext/ref/fb/uikititemdescription/).              |
| UIKitItemDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIKitItemDescription](/vext/ref/fb/uikititemdescription/). |

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
| hudIcon                  | [UIHudIcon](/vext/ref/fb/uihudicon/) |             |
| notExplicitelySelectable | bool                   |             |
| hiddenInProgression      | bool                   |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIKitItemDescription](/vext/ref/fb/uikititemdescription/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIKitItemDescription](/vext/ref/fb/uikititemdescription/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
